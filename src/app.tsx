import { Helmet, HelmetProvider } from 'react-helmet-async'

import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

import { Toaster } from 'sonner'

import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from './lib/react-query'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | T21 ArenaPark" />

      <Toaster richColors />

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </HelmetProvider>
  )
}
