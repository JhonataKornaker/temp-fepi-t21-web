import { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge('bg-slate-50/10 animate-pulse rounded-md', className)}
      {...props}
    ></div>
  )
}
