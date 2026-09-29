import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The production build ships pre-rendered HTML (see scripts/prerender.mjs), which we hydrate;
// in `npm run dev` the root is empty, so render from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
