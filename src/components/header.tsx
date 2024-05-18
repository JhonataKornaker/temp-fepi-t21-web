import { Search } from 'lucide-react'

import { AccountMenu } from './account-menu'

import { LinkMenu } from './link-menu'

import { Link } from 'react-router-dom'

export function Header() {
  return (
    <div className="bg-slate-800 flex items-center justify-between border-b border-b-slate-700 py-5 px-8 col-span-full">
      <div className="flex items-center gap-4">
        <LinkMenu />

        <Link to="/">
          <span className="font-error font-bold text-xl">T21 ArenaPark</span>
        </Link>
      </div>

      {/* <div className="w-full max-w-[478px] relative flex border rounded-md border-slate-700 focus-within:border-lime-400 justify-center my-0 mx-6 max-lg:hidden max-lg:absolute max-lg:top-[72px] max-lg:left-[15px] max-lg:m-0 max-lg:max-w-[calc(100%-30px)]">
        <div className="relative z-[11] w-full h-12 flex items-center gap-2 py-0 px-4 bg-slate-900 rounded-md border border-slate-800">
          <Search className="size-6 text-slate-600" />

          <form action="" className="flex-1 h-full">
            <input
              type="text"
              className="font-default w-full border-0 h-full py-0 px-2 bg-transparent text-slate-400 outline-0 text-[15px]"
              placeholder="Busque por atletas"
            />
          </form>

          <span className="size-6 rounded-[4px] text-slate-600 border border-slate-600 flex items-center justify-center text-xs font-medium">
            /
          </span>
        </div>
      </div> */}

      <div className="flex items-center gap-3 lg:gap-4">
        <button
          type="button"
          className="size-9 border-slate-700 text-slate-200 border flex items-center justify-center rounded hover:border-slate-500 hover:text-slate-100 transition lg:hidden"
        >
          <Search className="size-5" />
        </button>

        <AccountMenu />
      </div>
    </div>
  )
}
