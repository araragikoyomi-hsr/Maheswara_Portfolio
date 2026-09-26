import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Latin subsets only — the full @fontsource entry pulls in Cyrillic, Greek and
// Vietnamese faces that this site never renders.
import '@fontsource-variable/inter/latin.css';
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

