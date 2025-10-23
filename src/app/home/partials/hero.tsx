'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, type Variants } from 'framer-motion';

// Variants
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
      className='relative isolate mx-auto flex w-full max-w-360 flex-col items-center bg-black py-10 md:py-20'
    >
      {/* dekor (no motion) */}
      <div className='absolute top-0 left-[192px] h-[663px] w-px bg-neutral-800 md:top-0 md:left-[375px] md:h-[926px]' />
      <div className='absolute top-20 left-[290px] z-0 h-[542px] w-px bg-neutral-800 md:top-0 md:left-[707px] md:h-[926px]' />
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
                    Hi, I am R3D Frontend Developer
                  </motion.p>
                </div>

                <div className='flex w-full flex-col md:w-201.75'>
                  <motion.h1
                    {...fmItemProps}
                    className='text-display-lg md:text-display-3xl leading-[48px] font-extrabold tracking-[-0.03em] text-white md:leading-tight md:tracking-widest lg:text-[69px] lg:leading-[78px]'
                  >
                    BUILDING FAST &amp;{' '}
                    <span className='text-primary-200'>INTERACTIVE</span> WEB
                    EXPERIENCES.
                  </motion.h1>
                </div>

                <motion.p
                  {...fmItemProps}
                  className='max-w-[42ch] text-lg leading-[32px] font-medium text-neutral-400 md:text-xl'
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
                  <Link href='#contact' className='text-md font-bold'>
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
            <div className='bg-primary-200 absolute inset-y-0 -right-6 left-1/2 md:-right-0' />

            {/* portrait wrapper animation */}
            <div className='absolute top-0 left-0 h-full w-full'>
              <Image
                src='/images/pict.png'
                alt='Portrait'
                fill
                priority
                sizes='(max-width:768px) 100vw, 41vw'
                className='touch-action user-select webkit-user-drag webkit-user-select user-select-none touch-action-none -translate-x-3 -translate-y-[50px] object-cover mix-blend-luminosity md:-translate-x-0 md:-translate-y-20'
              />
            </div>

            {/* overlay (no motion) */}
            <div className='absolute -inset-6 bg-[linear-gradient(180deg,rgba(0,0,0,0)_-92.59%,#000_88.93%)] md:-inset-0' />

            {/* rating card animation */}
            <motion.div
              {...fmRootProps}
              {...fmItemProps}
              className='absolute top-81 left-1/2 w-87.25 -translate-x-1/2 rounded-2xl border border-neutral-800 bg-black p-4 md:top-153 md:w-79 md:rounded-3xl md:p-5'
            >
              <div className='flex flex-col gap-2'>
                <div className='text-display-xs md:text-display-xl font-bold tracking-[-0.02em]'>
                  5.0
                </div>
                <div className='flex items-center gap-2 md:gap-1.5'>
                  {['s1', 's2', 's3', 's4', 's5'].map((k) => (
                    <Image
                      key={k}
                      src='/icons/star.svg'
                      alt=''
                      aria-hidden
                      width={24}
                      height={24}
                      className='h-6 w-6 md:h-8 md:w-8'
                    />
                  ))}
                </div>
                <div className='text-md font-semibold md:text-xl'>
                  Many Client Trust with me
                </div>
              </div>
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
