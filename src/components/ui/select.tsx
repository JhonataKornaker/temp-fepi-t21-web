import * as SelectPrimitive from '@radix-ui/react-select'

import { Check, ChevronDown } from 'lucide-react'

import { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

export interface SelectProps
  extends ComponentProps<typeof SelectPrimitive.Root> {}

export function Select(props: SelectProps) {
  return <SelectPrimitive.Root {...props} />
}

export interface SelectTriggerProps
  extends ComponentProps<typeof SelectPrimitive.Trigger> {
  children?: never
}

export function SelectTrigger({ className, ...props }: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      className={twMerge(
        'px-3 py-1.5 text-slate-100 tabular-nums rounded-md border border-slate-800 bg-slate-800/50 flex items-center gap-2.5',
        className,
      )}
      {...props}
    >
      <SelectPrimitive.Value placeholder="Select an option" />

      <SelectPrimitive.Icon className="text-slate-600">
        <ChevronDown className="size-4" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

export interface SelectContentProps
  extends ComponentProps<typeof SelectPrimitive.Content> {}

export function SelectContent({ className, ...props }: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        sideOffset={6}
        position="popper"
        className={twMerge(
          'z-50 text-sm max-h-96 min-w-[6rem] overflow-hidden rounded-md border border-slate-800 bg-slate-900',
          className,
        )}
        {...props}
      />
    </SelectPrimitive.Portal>
  )
}

export interface SelectItemProps
  extends ComponentProps<typeof SelectPrimitive.Item> {}

export function SelectItem({ className, children, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      className={twMerge(
        'flex items-center gap-2 text-slate-300 px-3 py-1.5 justify-between outline-none hover:bg-slate-800',
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>

      <SelectPrimitive.ItemIndicator>
        <Check className="text-slate-300 size-4" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}
