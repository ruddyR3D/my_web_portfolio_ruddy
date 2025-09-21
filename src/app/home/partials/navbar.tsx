'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { navigtionData } from '@/components/constants/navigation-data';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur[10px]']
  );

  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur }}
      className='fixed top-0 z-50 w-full'
    >
      <div className='custom-container flex-between h-20 border-b border-[#252B37] py-16 md:h-20 md:border-b-0'>
        {/* logo */}
        <div className='flex h-[21px] w-[21px] items-center gap-2 md:h-[40px] md:w-[40px]'>
          <Image src='/icons/icon-logo.svg' alt='Logo' width={40} height={0} />
          <p className='text-primary-200 text-2xl font-bold'>R3D</p>
        </div>
        {/* navlink */}
        <nav className='hidden md:block'>
          <ul className='flex items-center gap-3'>
            {navigtionData.map((data) => (
              <li key={data.label}>
                <Link
                  href={data.href}
                  className='hover:text-primary-200 hover:decoration-primary-200 active:text-primary-200 active:decoration-primary-200 md:text-md p-4 font-semibold transition-all duration-300 ease-in-out hover:underline hover:underline-offset-4 active:underline active:underline-offset-4'
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Menu className='cursor-pointer md:hidden' />
          </SheetTrigger>
          <SheetContent className='w-full bg-black p-4'>
            <nav>
              <ul>
                {navigtionData.map((data) => (
                  <li key={data.label} className='mb-2'>
                    <SheetClose asChild>
                      <Link
                        href={data.href}
                        className='hover:text-primary-200 hover:decoration-primary-200 active:text-primary-200 active:decoration-primary-200 block p-4 text-lg font-semibold transition-all duration-300 ease-in-out'
                      >
                        {data.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>

            <SheetClose asChild></SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};
export default Navbar;
