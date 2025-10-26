'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';

<div className='absolute bottom-6 -left-6 z-20 order-2 hidden h-23 w-34.5 flex-none grow-0 -rotate-90 md:block'>
  <div className='bg-primary-400 absolute top-0 left-0 h-11.5 w-11.5' />
  <div className='bg-primary-400 absolute top-11.5 left-11.5 h-11.5 w-11.5' />
  <div className='bg-primary-400 absolute top-0 left-[92px] h-11.5 w-11.5' />
</div>;

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
} satisfies Variants;

export default function AboutSection() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.section
      ref={ref}
      variants={fadeUp}
      initial='hidden'
      animate={inView ? 'show' : 'hidden'}
      id='about'
      className='relative isolate mx-auto flex w-full max-w-360 flex-col items-center pt-10 md:py-30'
    >
      <div className='absolute bottom-6 -left-6 z-20 order-2 hidden h-23 w-34.5 flex-none grow-0 -rotate-90 md:block'>
        <div className='bg-primary-400 absolute top-0 left-0 h-11.5 w-11.5' />
        <div className='bg-primary-400 absolute top-11.5 left-11.5 h-11.5 w-11.5' />
        <div className='bg-primary-400 absolute top-0 left-[92px] h-11.5 w-11.5' />
      </div>
      <div className='custom-container grid-col mx-auto grid w-full max-w-302 gap-4 md:gap-16'>
        <div className='grid w-full justify-items-center gap-4 md:gap-4'>
          <motion.h2
            variants={fadeUp}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            className='text-md text-primary-200 h-[30px] w-full max-w-[361px] text-center leading-[30px] font-medium md:h-[32px] md:max-w-302 md:text-lg md:leading-[32px]'
          >
            ABOUT ME
          </motion.h2>

          <div className='relative isolate hidden h-46 w-full max-w-302 overflow-visible md:block'>
            <div className='grid-col z-20 grid h-full w-full md:gap-1'>
              <motion.div
                variants={fadeUp}
                initial='hidden'
                animate={inView ? 'show' : 'hidden'}
                className='flex items-center justify-center'
              >
                <h2 className='text-display-md md:text-display-2xl text-neutral-25 z-20 text-center leading-[60px] font-extrabold'>
                  CRAFTING SEAMLESS
                </h2>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial='hidden'
                animate={inView ? 'show' : 'hidden'}
                className='flex items-center justify-center'
              >
                <div className='z-20 w-full max-w-218'>
                  <h2 className='text-display-md md:text-display-2xl text-primary-200 text-center leading-[60px] font-extrabold'>
                    HIGH-PERFORMANCE WEB{' '}
                    <span className='text-neutral-25'>EXPERIENCES</span>
                  </h2>
                </div>
              </motion.div>
            </div>

            <div className='pointer-events-none absolute top-[-71.195652%] left-[10.972973%] z-0 h-[96.73913%] w-[20.101351%]'>
              <div className='relative h-full w-full'>
                <Image
                  src='/images/image-1.png'
                  alt=''
                  fill
                  className='touch-action webkit-user-drag-none webkit-user-select-none user-select-none touch-action-none pointer-events-none object-contain'
                  sizes='(max-width: 1184px) 20vw, 238px'
                />
              </div>
            </div>

            <div className='pointer-events-none absolute top-[-51.086957%] left-[74.162162%] z-1 h-[101.630435%] w-[21.114865%]'>
              <div className='relative h-full w-full'>
                <Image
                  src='/images/image-2.png'
                  alt=''
                  fill
                  className='touch-action webkit-user-drag-none webkit-user-select-none user-select-none touch-action-none pointer-events-none object-contain'
                  sizes='(max-width: 1184px) 21vw, 250px'
                />
              </div>
            </div>

            <div className='pointer-events-none absolute top-[73.369565%] left-[62.875676%] z-30 h-[47.826087%] w-[9.881757%]'>
              <div className='relative h-full w-full'>
                <Image
                  src='/images/image-3.png'
                  alt=''
                  fill
                  className='touch-action webkit-user-drag-none webkit-user-select-none user-select-none touch-action-none pointer-events-none object-contain'
                  sizes='(max-width: 1184px) 10vw, 117px'
                />
              </div>
            </div>
          </div>

          <div className='gird-col grid min-h-fit w-full max-w-full gap-1 md:hidden'>
            <motion.div
              variants={fadeUp}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='flex items-center justify-center'
            >
              <h2 className='text-display-md md:text-display-2xl text-neutral-25 text-center leading-11.5 font-extrabold max-[393px]:text-[28px] max-[393px]:leading-[38px]'>
                CRAFTING SEAMLESS
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='flex items-center justify-center'
            >
              <div className='w-full max-w-full'>
                <h2 className='text-display-md md:text-display-2xl text-primary-200 max-[393px]:text-display-md text-center leading-11.5 font-extrabold tracking-tight [text-wrap:balance] max-[393px]:leading-[36px]'>
                  HIGH-PERFORMANCE WEB{' '}
                  <span className='text-neutral-25'>EXPERIENCES</span>
                </h2>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          className='mx-auto flex w-full max-w-[996px] items-center justify-center pb-4 md:h-[68px]'
        >
          <p className='text-md w-full text-center leading-[30px] font-medium tracking-[-0.01em] text-neutral-400 md:text-xl md:leading-[34px]'>
            I love turning designs into interactive, high-performance websites.
            With a keen eye for detail and a deep understanding of frontend
            technologies, I create smooth and visually appealing user
            experiences.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          className='relative isolate h-72 w-full max-w-full md:hidden'
        >
          <div className='absolute top-[15.625%] left-[56.946%] h-[34.375%] w-[34.1%]'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/image-2.png'
                alt=''
                fill
                className='touch-action webkit-user-drag-none webkit-user-select-none user-select-none touch-action-none pointer-events-none object-contain'
              />
            </div>
          </div>

          <div className='absolute top-[56.944%] left-[36.651%] h-[34.722%] w-[33.724%]'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/image-3.png'
                alt=''
                fill
                className='touch-action webkit-user-drag-none webkit-user-select-none user-select-none touch-action-none pointer-events-none object-contain'
              />
            </div>
          </div>

          <div className='absolute top-[0%] left-[10.178%] h-[44.097%] w-[43.260%]'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/image-1.png'
                alt=''
                fill
                className='touch-action webkit-user-drag-none webkit-user-select-none user-select-none touch-action-none pointer-events-none object-contain'
              />
            </div>
          </div>

          <div
            className='pointer-events-none absolute bottom-12 -left-4 z-[2] md:hidden'
            aria-hidden
          >
            <div className='relative h-[69px] w-[103.px]'>
              <div className='bg-primary-400 absolute top-0 left-0 h-8.5 w-8.5' />
              <div className='bg-primary-400 absolute top-8.5 left-8.5 h-8.5 w-8.5' />
              <div className='bg-primary-400 absolute top-[69px] left-0 h-8.5 w-8.5' />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
