import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Home, MenuIcon, Users } from 'lucide-react'

import { Link } from 'react-router-dom'

export function LinkMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center" asChild>
        <button
          type="button"
          className="bg-slate-700 text-slate-300 size-8 flex items-center justify-center rounded hover:bg-slate-600 transition"
        >
          <MenuIcon className="size-5" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          align="start"
          className="bg-slate-800 border border-gray-700 shadow-base rounded-md w-[calc(100vw-30px)] max-w-[240px] animate-slide-up-and-fade overflow-hidden"
        >
          <DropdownMenu.Item asChild>
            <Link
              to="/"
              className="flex items-center gap-4 p-4 md:px-6 w-full text-left hover:bg-slate-700 transition outline-none"
            >
              <Home className="size-5" />

              <strong className="text-sm text-slate-100 font-bold">
                Dashboard
              </strong>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-px bg-slate-700" />

          <DropdownMenu.Item asChild>
            <Link
              to="/athletes"
              className="flex items-center gap-4 p-4 md:px-6 w-full text-left hover:bg-slate-700 transition outline-none"
            >
              <Users className="size-5" />

              <strong className="text-sm text-slate-100 font-bold">
                Atletas
              </strong>
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
