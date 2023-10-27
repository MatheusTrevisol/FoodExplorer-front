import React from 'react';
import ReactDOM from 'react-dom/client';

import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './hooks/auth';
import { CartProvider } from './hooks/cart';

import { Routes } from './routes';

import GlobalStyles from './styles/global';

function App() {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <React.StrictMode>
        <GlobalStyles />
        <AuthProvider>
          <CartProvider>
            <Routes toggleTheme={toggleTheme} currentTheme={currentTheme} />
            <ToastContainer />
          </CartProvider>
        </AuthProvider>
      </React.StrictMode>
    </ThemeProvider>
  );
}
  
ReactDOM.createRoot(document.getElementById('root')).render(<App />);