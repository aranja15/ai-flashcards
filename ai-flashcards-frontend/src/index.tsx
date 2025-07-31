import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // ✅ this is what makes it work

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
