'use client';

import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { navigtionData } from '@/components/constants/navigation-data';
import MobileMenu from '@/components/ui/mobilemenu';
import { IconHamburger } from '@/components/icons/hamburger';

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  const [open, setOpen] = React.useState(false);

  // Smooth scroll link anchor desktop
  const handleDesktopClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.location.hash = href;
    }
  };

  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur as unknown as string }}
      className='fixed top-0 z-50 w-full border-b border-[#252B37]'
    >
      <div className='custom-container flex-between h-20 md:h-20'>
        {/* Brand */}
        <div className='flex h-[21px] w-[21px] items-center gap-2 md:h-10 md:w-10'>
          <Image src='/icons/icon-logo.svg' alt='Logo' width={40} height={0} />
          <p className='text-primary-200 text-md font-bold md:text-xl'>R3D</p>
        </div>

        {/* Desktop nav */}
        <nav className='hidden md:block'>
          <ul className='flex items-center md:gap-4'>
            {navigtionData.map((data) => (
              <li key={data.label}>
                <Link
                  href={data.href}
                  onClick={(e) => handleDesktopClick(e, data.href)}
                  className='hover:text-primary-200 hover:decoration-primary-200 active:text-primary-200 active:decoration-primary-200 text-md font-regular p-4 transition-all duration-300 ease-in-out hover:underline hover:underline-offset-4 active:underline active:underline-offset-4'
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile trigger */}
        <button
          aria-label='Open menu'
          onClick={() => setOpen(true)}
          className='inline-flex items-center justify-center rounded-lg p-2 text-white md:hidden'
        >
          <IconHamburger className='h-6 w-6' />
        </button>
      </div>

      {/* Mobile Menu (controlled) */}
      <MobileMenu
        id='mobile-menu'
        open={open}
        onClose={() => setOpen(false)}
        title='R3D'
        items={navigtionData}
      />
    </motion.header>
  );
};

export default Navbar;
