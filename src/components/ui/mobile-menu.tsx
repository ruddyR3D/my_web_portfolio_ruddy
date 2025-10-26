'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { navigtionData } from '@/components/constants/navigation-data';

interface MobileMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
  title: string;
  items: typeof navigtionData;
}

const NAVBAR_HEIGHT = 80;

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const menuVariants = {
  // lunch from right
  hidden: { x: '100%' },
  visible: { x: 0 },
  exit: { x: '100%' },
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  id,
  open,
  onClose,
  title,
  items,
}) => {
  const initialFocusRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';

      initialFocusRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleResize = () => {
      if (window.innerWidth > 1024 && open) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [open, onClose]);
  const handleMobileClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el instanceof HTMLElement) {
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - NAVBAR_HEIGHT;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      } else {
        window.location.hash = href;
      }

      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id={id}
          className='fixed inset-0 z-[60] h-full w-full'
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={backdropVariants}
          transition={{ duration: 0.3 }}
        >
          <motion.dialog
            open
            className='fixed inset-0 m-0 h-full w-full bg-black p-0 focus:outline-none'
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={menuVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            aria-labelledby='mobile-menu-title'
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                onClose();
              }
            }}
          >
            {/* Header / Mobile */}
            <div className='flex h-20 w-full items-center justify-between border-b border-[#252B37] px-4 md:h-20 md:pt-0'>
              {/* Brand/Title */}
              <div className='flex items-center gap-2'>
                {/* horison line */}
                <div className='h-px w-[21px] bg-white'></div>
                <p
                  id='mobile-menu-title'
                  className='text-primary-200 text-md font-bold'
                >
                  {title}
                </p>
              </div>

              {/* Close Button */}
              <button
                aria-label='Close menu'
                onClick={onClose}
                className='inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-gray-800'
              >
                {/* --- change ICONCLOSE with INLINE SVG --- */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-6 w-6'
                >
                  <line x1='18' y1='6' x2='6' y2='18' />
                  <line x1='6' y1='6' x2='18' y2='18' />
                </svg>
                {/* ------------------------------------------------ */}
              </button>
            </div>

            {/* Menu Links */}
            <nav className='h-[852px] bg-black px-4 py-8'>
              <ul className='flex flex-col gap-4'>
                {items.map((data, index) => (
                  <motion.li
                    key={data.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className='w-full'
                  >
                    <Link
                      href={data.href}
                      onClick={(e) => handleMobileClick(e, data.href)}
                      className='text-md font-regular hover:text-primary-200 block w-full p-2 text-white transition-colors duration-200 hover:underline hover:decoration-2 hover:underline-offset-4'
                      ref={index === 0 ? initialFocusRef : null}
                    >
                      {data.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.dialog>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
