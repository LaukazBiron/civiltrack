import { useEffect, useRef, useCallback } from 'react';

const ACTIVITY_EVENTS = ['mousedown', 'mousemove', 'keydown', 'touchstart', 'scroll'];

/**
 * Cierra la sesión automáticamente tras `timeoutMs` de inactividad.
 * Dispara `onWarning` unos segundos antes (`warningBeforeMs`) para avisar al usuario,
 * y `onTimeout` cuando el tiempo se agota por completo.
 *
 * Cualquier interacción del usuario (mouse, teclado, touch, scroll) reinicia el conteo.
 */
export function useInactivityLogout({
  onWarning,
  onTimeout,
  timeoutMs = 10 * 60 * 1000,   // 10 minutos totales
  warningBeforeMs = 60 * 1000,  // avisar 1 minuto antes
  enabled = true,
}) {
  const timeoutTimerRef = useRef(null);
  const warningTimerRef = useRef(null);

  const clearTimers = useCallback(() => {
    if (timeoutTimerRef.current) clearTimeout(timeoutTimerRef.current);
    if (warningTimerRef.current) clearTimeout(warningTimerRef.current);
  }, []);

  const resetTimers = useCallback(() => {
    clearTimers();
    if (!enabled) return;

    const warningDelay = Math.max(timeoutMs - warningBeforeMs, 0);

    warningTimerRef.current = setTimeout(() => {
      onWarning?.();
    }, warningDelay);

    timeoutTimerRef.current = setTimeout(() => {
      onTimeout?.();
    }, timeoutMs);
  }, [clearTimers, enabled, timeoutMs, warningBeforeMs, onWarning, onTimeout]);

  useEffect(() => {
    if (!enabled) {
      clearTimers();
      return;
    }

    resetTimers();
    ACTIVITY_EVENTS.forEach(evt => window.addEventListener(evt, resetTimers));

    return () => {
      clearTimers();
      ACTIVITY_EVENTS.forEach(evt => window.removeEventListener(evt, resetTimers));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  // Se expone para que el botón "Seguir conectado" del banner pueda reiniciar el conteo manualmente
  return { resetTimers };
}
