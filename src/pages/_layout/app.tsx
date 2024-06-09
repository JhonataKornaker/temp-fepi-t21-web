import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-200">
      <Header />

      <div className="flex-1 flex flex-col gap-4 xl:p-8 pt-6 max-w-5xl">
        <Outlet />
      </div>
    </div>
  )
}
