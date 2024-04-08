import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

import './assets/styles/reset.css';
import './assets/styles/style.css';
import { SentinelProvider } from './contexts/SentinelContext';
import { AuthProvider } from './contexts/AuthContext';

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
<React.StrictMode>
  <AuthProvider>
  <SentinelProvider>
  <App />
  </SentinelProvider>
  </AuthProvider>
</React.StrictMode>,);