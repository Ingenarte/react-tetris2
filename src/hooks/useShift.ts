import { useEffect } from 'react';

import { start, stop, bind, unbind } from '../modules/detect-shift';

/**
 * Call `callback` once each time Shift is pressed.
 * Automatically starts/stops the DOM listeners.
 */
export function useShift(callback: () => void) {
  useEffect(() => {
    start();
    bind(callback);

    return () => {
      unbind(callback);
      stop();
    };
  }, [callback]);
}
