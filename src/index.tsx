import * as React from 'react';
import * as  ReactDOM from 'react-dom/client';
import './index.css';
import './_css/utils/width.css';
import './_css/utils/height.css';
import './_css/utils/flex.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
