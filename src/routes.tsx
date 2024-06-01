import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layout/app'
import { AuthLayout } from './pages/_layout/auth'

import { NotFound } from './pages/404'
import { Error } from './pages/error'

import { Dashboard } from './pages/app/dashboard/dashboard'

import { SignIn } from './pages/auth/sign-in'
import { Forgot } from './pages/auth/forgot'
import { Anamnse } from './pages/app/anamnse/anamnse'
import { Organizacao } from './pages/app/organizacao/organizacao'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,

    errorElement: <Error />,

    children: [{ path: '/', element: <Dashboard /> },
              { path: 'athletes', element: <Anamnse /> },
              {path: 'organization', element: <Organizacao />}],
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
