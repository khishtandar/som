import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

// Used at build time (scripts/prerender.mjs) to bake the page's HTML into dist/index.html,
// so crawlers that don't run JavaScript still see the full content.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
