import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import LogoOnlyLayout from './layouts/LogoOnlyLayout';

import NotFound from './pages/Page404';
import Init from './pages/Init';
import CreateRoom from './pages/CreateRoom';
import RoomLayout from './layouts/room';
import Room from './pages/Room';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/room',
      element: <RoomLayout />,
      children: [
        { element: <Navigate to="/init" replace /> },
        { path: 'in/:code', element: <Room /> }
      ]
    },
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
