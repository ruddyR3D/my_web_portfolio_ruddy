'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';

<div className='absolute bottom-6 -left-6 z-20 order-2 hidden h-[92px] w-[138px] flex-none grow-0 -rotate-90 md:block'>
  <div className='absolute top-0 left-0 h-[46px] w-[46px] bg-[#1D3300]' />
  <div className='absolute top-[46px] left-[46px] h-[46px] w-[46px] bg-[#1D3300]' />
  <div className='absolute top-0 left-[92px] h-[46px] w-[46px] bg-[#1D3300]' />
</div>;
//  */

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
      className='relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center py-16 md:py-30'
    >
      {/* Desktop: 46px (rotated) */}

      <div className='absolute bottom-6 -left-6 z-20 order-2 hidden h-[92px] w-[138px] flex-none grow-0 -rotate-90 md:block'>
        <div className='absolute top-0 left-0 h-[46px] w-[46px] bg-[#1D3300]' />
        <div className='absolute top-[46px] left-[46px] h-[46px] w-[46px] bg-[#1D3300]' />
        <div className='absolute top-0 left-[92px] h-[46px] w-[46px] bg-[#1D3300]' />
      </div>
      <div className='custom-container grid-col mx-auto grid w-full max-w-[1208px] gap-16'>
        {/*  About Content  */}
        <div className='grid w-full justify-items-center gap-4 md:gap-4'>
          {/* Title: mobile 361×30, desktop 1184×32 */}
          <motion.h2
            variants={fadeUp}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            className="h-[30px] w-full max-w-[361px] text-center font-['Red_Hat_Display'] text-[16px] leading-[30px] font-medium text-[#91FF02] md:h-[32px] md:max-w-[1184px] md:text-[18px] md:leading-[32px]"
          >
            ABOUT ME
          </motion.h2>

          {/*  Desktop Stage 1184×184 (md+)  */}
          <div className='relative isolate hidden h-[184px] w-full max-w-[1208px] overflow-visible md:block'>
            {/* Text grid: 60 + 4 + 120 */}
            <div className='grid h-full w-full grid-rows-[60px_4px_120px]'>
              <motion.div
                variants={fadeUp}
                initial='hidden'
                animate={inView ? 'show' : 'hidden'}
                className='row-[1/2] flex items-center justify-center'
              >
                <h2 className="text-center font-['Red_Hat_Display'] text-[48px] leading-[60px] font-extrabold text-[#FDFDFD]">
                  CRAFTING SEAMLESS
                </h2>
              </motion.div>
              <div className='row-[2/3]' />
              <motion.div
                variants={fadeUp}
                initial='hidden'
                animate={inView ? 'show' : 'hidden'}
                className='row-[3/4] flex items-center justify-center'
              >
                <div className='w-full max-w-[872px]'>
                  <h2 className="text-center font-['Red_Hat_Display'] text-[48px] leading-[60px] font-extrabold text-[#91FF02]">
                    HIGH-PERFORMANCE WEB{' '}
                    <span className='text-neutral-25'>EXPERIENCES</span>
                  </h2>
                </div>
              </motion.div>
            </div>

            {/* Images absolute per desain 1184×184 */}
            {/* Left 238×178 at (124,-131) → % dari 1184×184 */}
            <div className='pointer-events-none absolute top-[-71.195652%] left-[10.472973%] z-0 h-[96.73913%] w-[20.101351%]'>
              <div className='relative h-full w-full'>
                <Image
                  src='/images/image-1.png'
                  alt=''
                  fill
                  className='object-contain'
                  sizes='(max-width: 1184px) 20vw, 238px'
                />
              </div>
            </div>
            {/* Right 250×187 at (884,-94) */}
            <div className='pointer-events-none absolute top-[-51.086957%] left-[74.662162%] z-1 h-[101.630435%] w-[21.114865%]'>
              <div className='relative h-full w-full'>
                <Image
                  src='/images/image-2.png'
                  alt=''
                  fill
                  className='object-contain'
                  sizes='(max-width: 1184px) 21vw, 250px'
                />
              </div>
            </div>
            {/* Sticker 117×88 at (748,135) */}
            <div className='pointer-events-none absolute top-[73.369565%] left-[63.175676%] z-4 h-[47.826087%] w-[9.881757%]'>
              <div className='relative h-full w-full'>
                <Image
                  src='/images/image-3.png'
                  alt=''
                  fill
                  className='object-contain'
                  sizes='(max-width: 1184px) 10vw, 117px'
                />
              </div>
            </div>
          </div>

          {/*  Mobile About Details 361×142 (text only)  */}
          <div className='grid min-h-[142px] w-full max-w-[361px] grid-rows-[auto_4px_auto] md:hidden'>
            {/* Subtitle 361×46 → 32/46 */}
            <motion.div
              variants={fadeUp}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='row-[1/2] flex items-center justify-center'
            >
              <h2 className="text-center font-['Red_Hat_Display'] text-[32px] leading-[46px] font-extrabold text-[#FDFDFD] max-[393px]:text-[28px] max-[393px]:leading-[38px]">
                CRAFTING SEAMLESS
              </h2>
            </motion.div>

            {/* Gap 4px */}
            <div className='row-[2/3]' />

            {/* Description 361×92 → 32/46 */}
            <motion.div
              variants={fadeUp}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='row-[3/4] flex items-center justify-center'
            >
              <div className='w-full max-w-full'>
                <h2 className='text-display-md text-center leading-[46px] font-extrabold [text-wrap:balance] text-[#91FF02] max-[393px]:text-[26px] max-[393px]:leading-[36px]'>
                  HIGH-PERFORMANCE WEB{' '}
                  <span className='text-neutral-25'>EXPERIENCES</span>
                </h2>
              </div>
            </motion.div>
          </div>
        </div>

        {/*  About Text  */}
        <motion.div
          variants={fadeUp}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          className='mx-auto flex w-full max-w-[996px] items-center justify-center md:h-[68px]'
        >
          <p className='text-md w-full max-w-full text-center leading-[30px] text-neutral-400 md:max-w-none md:text-xl md:leading-[34px]'>
            I love turning designs into interactive, high-performance websites.
            With a keen eye for detail and a deep understanding of frontend
            technologies, I create smooth and visually appealing user
            experiences.
          </p>
        </motion.div>
        {/*  Mobile Pict Content 393×288 (images + decor)  */}
        <motion.div
          variants={fadeUp}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          className='relative isolate h-[288px] w-full max-w-full md:hidden'
        >
          {/* Image A: 134×99 @ (224,45) */}
          <div className='absolute top-[15.625%] left-[56.946%] h-[34.375%] w-[34.1%]'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/image-1.png'
                alt=''
                fill
                className='object-contain'
              />
            </div>
          </div>
          {/* Image B: 132.47×100 @ (144,164) */}
          <div className='absolute top-[56.944%] left-[36.651%] h-[34.722%] w-[33.724%]'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/image-2.png'
                alt=''
                fill
                className='object-contain'
              />
            </div>
          </div>
          {/* Image C: 170×127 @ (40,0) */}
          <div className='absolute top-[0%] left-[10.178%] h-[44.097%] w-[43.260%]'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/image-3.png'
                alt=''
                fill
                className='object-contain'
              />
            </div>
          </div>

          {/* Mobile: 34.5px (rotated) */}
          <div
            className='pointer-events-none absolute bottom-12 -left-6 z-[2] md:hidden'
            aria-hidden
          >
            <div className='relative h-[69px] w-[103.5px]'>
              <div className='absolute top-0 left-0 h-[34.5px] w-[34.5px] bg-[#1D3300]' />
              <div className='absolute top-[34.5px] left-[34.5px] h-[34.5px] w-[34.5px] bg-[#1D3300]' />
              <div className='absolute top-[69px] left-0 h-[34.5px] w-[34.5px] bg-[#1D3300]' />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
