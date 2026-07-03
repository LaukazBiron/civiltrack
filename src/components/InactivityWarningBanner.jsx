import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

/**
 * Banner fijo arriba de la pantalla que avisa al usuario que su sesión
 * está por cerrarse por inactividad. Muestra una cuenta regresiva y
 * permite mantener la sesión activa con un clic.
 */
export function InactivityWarningBanner({ visible, secondsLeft, onStayLoggedIn }) {
  if (!visible) return null;

  return (
    <div
      data-testid="inactivity-warning-banner"
      className="fixed top-0 left-0 right-0 z-[100] bg-amber-500 text-white shadow-lg"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="max-w-2xl mx-auto flex items-center gap-3 px-4 py-3">
        <AlertTriangle size={20} className="shrink-0" />
        <p className="flex-1 text-sm font-medium">
          Tu sesión se cerrará por inactividad en{' '}
          <span data-testid="inactivity-countdown" className="font-bold">{secondsLeft}s</span>.
        </p>
        <button
          type="button"
          data-testid="inactivity-stay-logged-in"
          onClick={onStayLoggedIn}
          className="bg-white text-amber-600 font-semibold text-sm px-4 py-1.5 rounded-full hover:bg-amber-50 active:bg-amber-100 transition shrink-0"
        >
          Seguir conectado
        </button>
      </div>
    </div>
  );
}

/**
 * Hook auxiliar: controla la cuenta regresiva visible en el banner.
 * Se activa cuando `active` pasa a true y cuenta hacia abajo desde `fromSeconds`.
 */
export function useCountdown(active, fromSeconds) {
  const [secondsLeft, setSecondsLeft] = useState(fromSeconds);

  useEffect(() => {
    if (!active) {
      setSecondsLeft(fromSeconds);
      return;
    }
    setSecondsLeft(fromSeconds);
    const interval = setInterval(() => {
      setSecondsLeft(prev => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [active, fromSeconds]);

  return secondsLeft;
}
