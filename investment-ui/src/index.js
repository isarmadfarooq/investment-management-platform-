import React from 'react';
import ReactDOM from 'react-dom/client';  // Use 'react-dom/client' for React 18
import { Provider } from 'react-redux';
import store from './redux/store';  // Import your Redux store
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';  // Import your CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app wrapped with Provider for Redux store access
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Performance measurement (optional)
reportWebVitals();
