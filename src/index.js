import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

import 'modern-normalize/modern-normalize.css';
import './assets/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="wallet">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
