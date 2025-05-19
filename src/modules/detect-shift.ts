// no default export here—only named exports

type Callback = () => void;
const callbacks: Callback[] = [];
let isPressed = false;

function keydownListener(e: KeyboardEvent) {
  if (e.shiftKey && !isPressed) {
    isPressed = true;
    callbacks.forEach((cb) => cb());
  }
}

function keyupListener(e: KeyboardEvent) {
  if (!e.shiftKey && isPressed) {
    isPressed = false;
  }
}

export function start() {
  document.addEventListener('keydown', keydownListener);
  document.addEventListener('keyup', keyupListener);
}

export function stop() {
  document.removeEventListener('keydown', keydownListener);
  document.removeEventListener('keyup', keyupListener);
  isPressed = false;
  callbacks.length = 0; // clear all callbacks
}

export function bind(callback: Callback) {
  if (!callbacks.includes(callback)) {
    callbacks.push(callback);
  }
}

export function unbind(callback: Callback) {
  const idx = callbacks.indexOf(callback);
  if (idx !== -1) callbacks.splice(idx, 1);
}
