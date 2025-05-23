import { default as React } from 'react';
import { Action } from '../models/Game';
export type KeyboardMap = Record<string, Action>;
/**
 * Binds a map of key names → Action to:
 *  • non-Shift keys via keymaster
 *  • the “shift” key via our useShift hook
 */
export declare function useKeyboardControls(keyboardMap: KeyboardMap, dispatch: React.Dispatch<Action>): void;
//# sourceMappingURL=useKeyboardControls.d.ts.map