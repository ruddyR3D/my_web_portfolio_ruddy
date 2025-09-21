import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex justify-center items-center shrink-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer outline-none disabled:text-neutral-800',
  {
    variants: {
      variant: {
        default:
          'bg-primary-200 text-md-bold text-black shadow-xs rounded-full hover:shadow-[0_4px_40px_rgba(145,255,2,0.4)] tranition-shadow',
        outline:
          'border border-neutral-800 bg-transparent text-neutral-800 rounded-full hover:text-primary-200',
        iphone:
          'relative rounded-full bg-primary-200 text-black ' +
          'shadow-[inset_0_1px_0_rgba(255,255,255,0.35),_0_1px_2px_rgba(0,0,0,0.35),_0_8px_24px_-6px_rgba(145,255,2,0.5)] ' +
          "before:absolute before:inset-0 before:rounded-inherit before:content-[''] before:shadow-[inset_0_-2px_6px_rgba(0,0,0,0.25)] " +
          'hover:brightness-105 active:brightness-95 active:translate-y-[0.5px]',
      },
      size: {
        default: 'h-14 px-29',
        sm: 'h-10 px-4 text-xs',
        md: 'h-12 px-6 text-sm',
        lg: 'h-14 px-7 text-base',
        // untuk tombol bulat/ikon
        xl: 'h-24 w-24 p-0 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
    compoundVariants: [
      {
        variant: 'iphone',
        size: 'xl',
        className: 'h-16 w-16 p-0',
      },
    ],
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
