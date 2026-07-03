import React from 'react';
import { Login } from './components/Login.jsx';
import { Dashboard } from './components/Dashboard.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import { Routes, Route } from 'react-router-dom';
import {
  fetchCurrentUser,
  readStoredUserProfile,
  persistUserProfile,
  clearStoredUserProfile,
} from './api/auth.api.js';
import { useDarkMode } from './hooks/useDarkMode.js';
import { useInactivityLogout } from './hooks/useInactivityLogout.js';
import { InactivityWarningBanner, useCountdown } from './components/InactivityWarningBanner.jsx';

// Tiempo total de inactividad antes de cerrar sesión, y con cuánto tiempo de anticipación se avisa.
const INACTIVITY_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutos
const WARNING_BEFORE_MS = 60 * 1000;          // avisar 1 minuto antes
const WARNING_SECONDS = WARNING_BEFORE_MS / 1000;

function App() {
  const [user, setUser] = React.useState(null);
  const [sessionChecked, setSessionChecked] = React.useState(false);
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [showWarning, setShowWarning] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const fromApi = await fetchCurrentUser();
        if (!cancelled && fromApi) {
          persistUserProfile(fromApi);
          setUser(fromApi);
        } else if (!cancelled) {
          const stored = readStoredUserProfile();
          if (stored) {
            setUser(stored);
          }
        }
      } finally {
        if (!cancelled) {
          setSessionChecked(true);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleLogin = (usuario) => {
    persistUserProfile(usuario);
    setUser(usuario);
    setShowWarning(false);
  };

  const handleLogout = React.useCallback(() => {
    clearStoredUserProfile();
    setUser(null);
    setShowWarning(false);
  }, []);

  // Se dispara cuando el tiempo de inactividad se agota por completo.
  const handleInactivityTimeout = React.useCallback(async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    } catch {
      // si falla la petición de red, igual limpiamos la sesión local
    } finally {
      handleLogout();
    }
  }, [handleLogout]);

  // Se dispara 60s antes del timeout, para mostrar el banner de aviso.
  const handleInactivityWarning = React.useCallback(() => {
    setShowWarning(true);
  }, []);

  const { resetTimers } = useInactivityLogout({
    onWarning: handleInactivityWarning,
    onTimeout: handleInactivityTimeout,
    timeoutMs: INACTIVITY_TIMEOUT_MS,
    warningBeforeMs: WARNING_BEFORE_MS,
    enabled: !!user, // solo corre el temporizador si hay sesión activa
  });

  const handleStayLoggedIn = () => {
    setShowWarning(false);
    resetTimers(); // reinicia el conteo manualmente al hacer clic en "Seguir conectado"
  };

  const secondsLeft = useCountdown(showWarning, WARNING_SECONDS);

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 flex flex-col items-center justify-center">
      <InactivityWarningBanner
        visible={showWarning}
        secondsLeft={secondsLeft}
        onStayLoggedIn={handleStayLoggedIn}
      />
      <div className="w-full flex-1 flex items-center justify-center">
        {!sessionChecked ? (
          <p className="text-blue-600 dark:text-blue-400">Cargando sesión...</p>
        ) : !user ? (
          <div className="w-full flex flex-col items-center">
            <Login onLogin={handleLogin} />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Dashboard user={user} onLogout={handleLogout} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/dashboard" element={<Dashboard user={user} onLogout={handleLogout} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/proyectos/:id" element={<ProjectDetail />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
