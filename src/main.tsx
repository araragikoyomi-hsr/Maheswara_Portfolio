import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// The Inter variable package ships axis-based CSS only (there is no per-subset
// `latin.css`), so pull in the weight axis. Every @font-face it declares is gated
// by `unicode-range`, so a browser fetches just the latin + latin-ext files this
// site renders and never requests the Cyrillic, Greek or Vietnamese ones.
import '@fontsource-variable/inter/wght.css';
import '@fontsource/jetbrains-mono/latin-400.css';
import '@fontsource/jetbrains-mono/latin-500.css';
import '@fontsource/jetbrains-mono/latin-600.css';
import './index.css';
import App from './App';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

