// manipulação do título e outras meta tags do documento de forma assíncrona.
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

//mostrar notificações (toasts) na aplicação.
import { Toaster } from 'sonner'

//realizar consultas de dados assíncronas.
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
