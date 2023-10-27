import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';

export function Routes({toggleTheme, currentTheme}) {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      { user ? <AppRoutes toggleTheme={toggleTheme} currentTheme={currentTheme} /> : <AuthRoutes />}
    </BrowserRouter>
  )
}