import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bulma/css/bulma.min.css';
import { SearchContextProvider } from './context/SearchContext';
import { AuthContext, AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchContextProvider>
    <App />
    </SearchContextProvider>
  </React.StrictMode>
);

