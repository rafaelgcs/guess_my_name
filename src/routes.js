import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import LogoOnlyLayout from './layouts/LogoOnlyLayout';

import NotFound from './pages/Page404';
import Init from './pages/Init';
import CreateRoom from './pages/CreateRoom';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'init', element: <Init /> },
        { path: 'create', element: <CreateRoom /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/init" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
