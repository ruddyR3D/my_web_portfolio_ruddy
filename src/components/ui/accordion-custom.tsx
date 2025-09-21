// components/ui/accordion-custom.tsx
'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const Accordion = AccordionPrimitive.Root;
export const AccordionItem = AccordionPrimitive.Item;

export const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='w-full'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        // layout
        'group flex w-full items-start gap-3 py-4 text-left outline-none',

        // GARIS PEMBATAS default (tampil saat closed)
        'border-b border-[#252B37]',

        // HILANGKAN garis saat item open
        'data-[state=open]:border-b-0',

        className
      )}
      {...props}
    >
      {/* ikon stargreen yang berputar saat open (opsional) */}
      <Image
        src='/icons/stargreen.svg'
        alt='toggle'
        width={32}
        height={32}
        className='h-6 w-6 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180 lg:h-8 lg:w-8'
      />
      <span className='flex-1 text-[18px] leading-8 font-bold text-[#FDFDFD] md:text-2xl'>
        {children}
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = 'CustomAccordionTrigger';

export const CustomAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn('pt-2 text-sm text-[#A4A7AE] md:text-base', className)}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
));
CustomAccordionContent.displayName = 'CustomAccordionContent';
