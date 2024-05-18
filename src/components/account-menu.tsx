import { LogOut, Settings } from 'lucide-react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import * as Avatar from '@radix-ui/react-avatar'

import { Link } from 'react-router-dom'

export function AccountMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Avatar.Root className="size-12 cursor-pointer rounded-full flex items-center justify-center text-lg border border-lime-500 font-semibold bg-lime-600">
          <Avatar.Fallback>WJ</Avatar.Fallback>
        </Avatar.Root>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          align="end"
          className="bg-slate-800 border border-gray-700 shadow-base rounded-[10px] w-[calc(100vw-30px)] max-w-[354px] animate-slide-up-and-fade overflow-hidden"
        >
          <DropdownMenu.Item asChild>
            <div className="flex items-center gap-4 md:px-6 px-4 py-4 outline-none">
              <Avatar.Root className="size-12 rounded-full flex items-center justify-center text-lg border border-lime-500 font-semibold bg-lime-600">
                <Avatar.Fallback>WJ</Avatar.Fallback>
              </Avatar.Root>

              <div className="flex flex-col">
                <strong className="line-clamp-1 text-sm text-slate-100 font-bold">
                  Wesley Júnior
                </strong>

                <span className="line-clamp-1 text-xs text-slate-200">
                  bw3sley@gmail.com
                </span>
              </div>
            </div>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-px bg-slate-700" />

          <DropdownMenu.Item asChild>
            <Link
              to="/organizations"
              className="flex items-center gap-4 p-4 md:px-6 w-full text-left hover:bg-slate-700 transition outline-none"
            >
              <Settings className="size-7 text-lime-300" />

              <div className="flex flex-col gap-1">
                <strong className="text-sm text-slate-100 font-bold">
                  Minha organização
                </strong>

                <p className="text-xs text-slate-300">
                  Gerencie dados e preferências
                </p>
              </div>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-px bg-slate-700" />

          <DropdownMenu.Item
            asChild
            className="flex items-center gap-4 p-4 md:px-6 w-full text-left hover:bg-slate-700 transition outline-none"
          >
            <button
              type="button"
              className="text-rose-400 font-semibold text-sm"
            >
              <LogOut className="size-7" />
              Sair da conta
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
