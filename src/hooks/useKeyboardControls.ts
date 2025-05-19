// src/hooks/useKeyboardControls.ts
import React from 'react';
import keymaster from 'keymaster';

import DetectShift from '../modules/detect-shift';
import { Action } from '../models/Game';

export type KeyboardMap = Record<string, Action>;

export const useKeyboardControls = (
  keyboardMap: KeyboardMap,
  dispatch: React.Dispatch<Action>
): void => {
  React.useEffect(() => {
    const keyboardDispatch = Object.entries(keyboardMap).reduce<
      Record<string, () => void>
    >((output, [k, action]) => {
      output[k] = () => dispatch(action);
      return output;
    }, {});

    addKeyboardEvents(keyboardDispatch);
    return () => removeKeyboardEvents(keyboardDispatch);
  }, [keyboardMap, dispatch]);
};

function addKeyboardEvents(keyboardMap: Record<string, () => void>) {
  Object.keys(keyboardMap).forEach((k) => {
    const fn = keyboardMap[k];
    if (k === 'shift') {
      if (fn) {
        // direct call expression—allowed by no-unused-expressions
        DetectShift.bind(fn);
      }
    } else {
      if (fn) {
        keymaster(k, fn);
      }
    }
  });
}

function removeKeyboardEvents(keyboardMap: Record<string, () => void>) {
  Object.keys(keyboardMap).forEach((k) => {
    const fn = keyboardMap[k];
    if (k === 'shift') {
      if (fn) {
        DetectShift.unbind(fn);
      }
    } else {
      keymaster.unbind(k);
    }
  });
}
