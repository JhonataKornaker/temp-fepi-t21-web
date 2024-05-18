import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layout/app'
import { AuthLayout } from './pages/_layout/auth'

import { NotFound } from './pages/404'
import { Error } from './pages/error'

import { Dashboard } from './pages/app/dashboard/dashboard'

import { SignIn } from './pages/auth/sign-in'
import { Forgot } from './pages/auth/forgot'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,

    errorElement: <Error />,

    children: [{ path: '/', element: <Dashboard /> }],
  },

  {
    path: '/me/:username',
    element: <AppLayout />,

    errorElement: <Error />,
  },

  {
    path: '/',
    element: <AuthLayout />,

    errorElement: <Error />,

    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/forgot', element: <Forgot /> },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
])
