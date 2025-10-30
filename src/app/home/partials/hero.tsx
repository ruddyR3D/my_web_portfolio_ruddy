'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, type Variants } from 'framer-motion';

// Variants
const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const fadeDownHeader: Variants = {
  hidden: { opacity: 0, y: -32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeDownCol: Variants = {
  hidden: { opacity: 0, y: -24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeDownItem: Variants = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const rowsContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.1 },
  },
};

const fadeDownRow: Variants = {
  hidden: { opacity: 0, y: -24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const mobileItemsContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

const fmStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fmDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 24 },
  },
};

// Reusable props
const fmRootProps = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, amount: 0.4 },
  variants: fmStagger,
};
const fmItemProps = { variants: fmDown };

const HeroSection = () => {
  return (
    <section
      id='home'
      className='relative isolate mx-auto flex w-full max-w-360 flex-col items-center bg-transparent py-10 md:py-20'
    >
      {/* decor (no motion) */}
      <div className='absolute top-0 left-[188px] h-[663px] w-px bg-neutral-800 md:top-0 md:left-[375px] md:h-[926px]' />
      <div className='absolute top-20 left-[281px] z-0 h-[542px] w-px bg-neutral-800 md:top-0 md:left-[707px] md:h-[926px]' />
      <div
        aria-hidden
        className='absolute bottom-0 left-0 hidden h-23 w-34.5 md:block'
      >
        <div className='bg-primary-400 absolute top-11.5 left-0 h-11.5 w-11.5' />
        <div className='bg-primary-400 absolute top-0 left-11.5 h-11.5 w-11.5' />
        <div className='bg-primary-400 absolute top-11.5 left-23 h-11.5 w-11.5' />
      </div>

      <div className='custom-container mx-auto flex w-full flex-col'>
        {/* ROOT stagger childrens left */}
        <motion.div
          {...fmRootProps}
          className='flex flex-wrap gap-7 overflow-hidden pt-20.5 pb-10 md:pt-35.25 md:pb-20'
        >
          {/* left */}
          <div className='z-20 flex-[5.9] basis-80'>
            {/* Stagger stack texts */}
            <motion.div
              variants={fmStagger}
              className='flex w-full max-w-201.75 flex-col gap-10 md:gap-15'
            >
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2 md:gap-4'>
                  <span className='h-px w-5.25 bg-white md:w-[114px]' />
                  <motion.p
                    {...fmItemProps}
                    className='text-md text-neutral-25 leading-[30px] font-medium md:text-xl'
                  >
                    Hi, I am Ruddy R3D Frontend Developer
                  </motion.p>
                </div>

                <div className='flex w-full flex-col md:w-201.75'>
                  <motion.h1
                    {...fmItemProps}
                    className='text-display-lg md:text-display-3xl leading-[48px] font-extrabold tracking-[-0.03em] text-white md:leading-tight md:tracking-widest lg:text-[68px] lg:leading-[78px]'
                  >
                    BUILDING FAST &amp;{' '}
                    <span className='text-primary-200'>INTERACTIVE</span> WEB
                    EXPERIENCES.
                  </motion.h1>
                </div>

                <motion.p
                  {...fmItemProps}
                  className='max-w-[42ch] text-lg leading-[32px] font-medium tracking-[-0.015em] text-neutral-400 md:text-xl md:tracking-[0.0em]'
                >
                  Bridging creativity and functionality to deliver stunning,
                  user-friendly web applications
                </motion.p>
              </div>

              {/* Button wrapper motion.*/}
              <motion.div {...fmItemProps}>
                <Button
                  asChild
                  className='flex h-11 w-full px-19 md:h-14 md:w-73.5'
                >
                  <Link
                    href='#contact'
                    className='md:text-md text-sm font-bold'
                  >
                    HIRE ME
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* right */}
        <div className='flex-[4.1] basis-80 md:absolute md:top-1/2 md:right-0 md:h-220.25 md:w-165 md:-translate-y-108'>
          <div className='relative h-116.5 w-full bg-black md:h-220.25'>
            {/* dekor (no motion) */}
            <div className='bg-primary-200 absolute inset-y-0 -right-4 left-1/2 md:-right-0' />

            {/* portrait wrapper animation */}
            <div className='absolute top-0 left-0 h-full w-full'>
              <Image
                src='/images/pict.png'
                alt='Portrait'
                fill
                priority
                sizes='(max-width:768px) 100vw, 41vw'
                className='touch-action webkit-user-drag-none webkit-user-select-none user-select-none touch-action-none pointer-events-none -translate-x-3 -translate-y-[5px] object-cover mix-blend-luminosity md:-translate-x-0 md:-translate-y-20'
              />
            </div>

            {/* overlay (no motion) */}
            <div className='absolute -inset-4 bg-[linear-gradient(180deg,rgba(0,0,0,0)_-92.59%,#000_88.93%)] md:-inset-0' />

            {/* rating card animation */}
            <motion.div
              {...fmRootProps}
              {...fmItemProps}
              className='absolute top-81 left-1/2 w-87.25 -translate-x-1/2 rounded-2xl border border-neutral-800 bg-black p-4 hover:shadow-[0_0_60px_rgba(145,255,2,0.6)] md:top-153 md:w-79 md:rounded-3xl md:p-5'
            >
              <motion.div
                variants={rowsContainer}
                className='flex flex-col gap-2'
              >
                <motion.div
                  variants={fadeDownItem}
                  className='text-display-xs md:text-display-xl font-bold tracking-[-0.02em]'
                >
                  5.0
                </motion.div>
                <div className='flex items-center'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div key={i} variants={fadeDownItem}>
                      <Image
                        src='/icons/star.svg'
                        alt=''
                        aria-hidden
                        width={32}
                        height={32}
                        className='touch-action webkit-user-drag-none webkit-user-select-none user-select-none touch-action-none pointer-events-none h-6 w-6 md:h-8 md:w-8'
                      />
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  variants={fadeDownCol}
                  className='text-md font-semibold md:text-xl'
                >
                  Many Client Trust with me
                </motion.div>
              </motion.div>
            </motion.div>

            {/* dekor (no motion) */}
            <div
              aria-hidden
              className='absolute top-60.5 left-[-17px] hidden h-17.25 w-25.5 md:hidden'
            >
              <div className='bg-primary-400 absolute top-8.5 left-0 h-8.5 w-8.5' />
              <div className='bg-primary-400 absolute top-0 left-8.5 h-8.5 w-8.5' />
              <div className='bg-primary-400 absolute top-8.5 left-[69px] h-8.5 w-8.5' />
            </div>

            <div className='absolute top-60.5 left-[-17px] block h-17.25 w-25.5 md:hidden'>
              <Image
                src='/icons/rectangle.svg'
                alt='icon'
                width={103}
                height={103}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
