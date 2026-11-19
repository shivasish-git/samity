// Ensure window.fetch has both getter and setter in iframe environments to prevent getter-only TypeError
try {
  if (typeof window !== 'undefined') {
    let currentFetch = window.fetch;
    const desc = Object.getOwnPropertyDescriptor(window, 'fetch') ||
                 Object.getOwnPropertyDescriptor(Window.prototype, 'fetch');
    if (!desc || !desc.set || !desc.writable) {
      Object.defineProperty(window, 'fetch', {
        get() {
          return currentFetch;
        },
        set(val) {
          currentFetch = val;
        },
        configurable: true,
        enumerable: true,
      });
    }
  }
} catch {
  // Gracefully ignored
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
