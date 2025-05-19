import React from 'react';
import keymaster from 'keymaster';

import { useShift } from './useShift';
import { Action } from '../models/Game';

export type KeyboardMap = Record<string, Action>;

/**
 * Binds a map of key names → Action to:
 *  • non-Shift keys via keymaster
 *  • the “shift” key via our useShift hook
 */
export function useKeyboardControls(
  keyboardMap: KeyboardMap,
  dispatch: React.Dispatch<Action>
): void {
  // 1) Shift handling
  useShift(() => {
    const action = keyboardMap['shift'];
    if (action) dispatch(action);
  });

  // 2) All other keys
  React.useEffect(() => {
    const handlers: Record<string, () => void> = {};

    for (const [keyName, action] of Object.entries(keyboardMap)) {
      if (keyName === 'shift') continue; // skip Shift here
      const fn = () => dispatch(action);
      handlers[keyName] = fn;
      keymaster(keyName, fn);
    }

    return () => {
      for (const k of Object.keys(handlers)) {
        keymaster.unbind(k);
      }
    };
  }, [keyboardMap, dispatch]);
}
