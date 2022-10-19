import { Navigate, useRoutes } from 'react-router-dom'
// layouts
import DashboardLayout from './Layouts/dashboard'
import LogoOnlyLayout from './Layouts/LogoOnlyLayout'

import DashboardApp from './pages/DashboardApp'
import Page404 from './pages/Page404'

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [{ path: 'app', element: <DashboardApp /> }],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to='/dashboard/app' /> },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to='/404' /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />,
    },
  ])
}
