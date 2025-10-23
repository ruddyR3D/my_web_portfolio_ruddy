'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  label: string;
  percent: number;
}

interface SkillsSectionProps {
  title?: string;
  subtitle?: string;
  icons?: string[];
  bars?: Skill[];
  className?: string;
}

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

const leftColumn = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: easeCurve },
  },
};

// Stagger
const leftStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const leftItem = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: easeCurve },
  },
};

export default function SkillsSection({
  title = 'SKILLS',
  subtitle = 'SKILLS THAT BRING IDEAS TO LIFE',
  icons = ['js', 'css', 'html', 'ejs', 'mongodb', 'react', 'ts', 'docker'],
  bars = [
    { label: 'React JS', percent: 50 },
    { label: 'Next js', percent: 80 },
    { label: 'Tailwind CSS', percent: 90 },
    { label: 'HTML', percent: 100 },
    { label: 'Docker', percent: 70 },
    { label: 'JavaScript', percent: 90 },
  ],
}: SkillsSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.25, once: true });

  return (
    <section
      ref={sectionRef}
      id='skills'
      className='relative isolate mx-auto flex w-full max-w-360 flex-col items-center bg-black py-10 text-white md:py-20'
    >
      {/* Wrapper & padding */}
      <div className='custom-container mx-auto w-full'>
        <div className='grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-14.5'>
          {/*  LEFT: Content  */}
          <motion.div
            variants={leftColumn}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            className='my-auto flex min-w-0 flex-col gap-6 md:gap-14.5'
          >
            <motion.div
              variants={leftStagger}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='flex flex-col gap-2'
              aria-describedby='skills-subtitle'
            >
              <motion.p
                variants={leftItem}
                id='skills-title'
                className='text-primary-200 text-md leading-[30px] font-medium md:text-lg md:leading-[32px]'
              >
                {title}
              </motion.p>

              <motion.h2
                variants={leftItem}
                id='skills-subtitle'
                className='text-neutral-25 md:text-display-2xl text-display-md max-w-[52ch] leading-[46px] font-extrabold md:leading-[60px]'
              >
                {subtitle}
              </motion.h2>
            </motion.div>

            {/* Icons */}
            <motion.ul
              variants={leftStagger}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='grid w-fit grid-cols-4 grid-rows-2 place-items-start gap-4 md:gap-6'
            >
              {icons.map((name) => (
                <motion.li key={name} variants={leftItem}>
                  <div className='flex size-12 items-center justify-center rounded-full border border-neutral-800 p-1.5 md:size-16 md:p-1.5'>
                    <div className='flex size-9 items-center justify-center rounded-full bg-black md:size-12'>
                      <Image
                        src={`/icons/${name}.svg`}
                        alt={`${name} icon`}
                        width={40}
                        height={40}
                        className='h-5 w-5 md:h-7 md:w-7'
                      />
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/*  RIGHT: Skill Bars  */}
          <div className='flex min-w-0 flex-col gap-4 md:gap-6'>
            {bars.map((item, i) => (
              <SkillBar
                key={item.label}
                index={i}
                label={item.label}
                percent={item.percent}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({
  label,
  percent,
  index,
  inView,
}: {
  label: string;
  percent: number;
  index: number;
  inView: boolean;
}) {
  const pct = Math.max(0, Math.min(100, percent));

  return (
    <div
      className='flex w-full items-center gap-4 md:gap-6'
      role='group'
      aria-label={`${label} skill level`}
    >
      {/* Track + Label */}
      <div className='flex w-full items-center gap-4 md:gap-6'>
        {/* Green label */}
        <div className='relative w-full max-w-150.5'>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${pct}%` } : { width: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.08 * index,
              ease: easeCurve,
            }}
            className='bg-primary-300 relative inline-flex h-10 items-center overflow-hidden rounded-xl px-4 py-2 md:h-16 md:rounded-3xl md:px-6 md:py-3'
            aria-hidden={false}
          >
            {/* Diagonal stripes overlay */}
            <div
              aria-hidden
              className='pointer-events-none absolute inset-0 opacity-20'
              style={{
                backgroundImage:
                  'repeating-linear-gradient(-115deg, rgba(253,253,253,0.25) 0 1px, transparent 1px 8px)',
              }}
            />
            {/* Label text */}
            <span className='text-neutral-25 relative z-10 text-sm leading-7 font-semibold md:text-lg md:leading-8'>
              {label}
            </span>
          </motion.div>

          {/* (track) */}
          <div className='absolute inset-y-1/2 right-0 left-0 -translate-y-1/2'>
            <div className='flex w-full items-center'>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${pct}%` } : { width: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.08 * index,
                  ease: easeCurve,
                }}
                className='h-px opacity-0'
                aria-hidden
              />
              <div
                className={`${pct >= 100 ? 'hidden' : 'flex-1 border-t border-neutral-800'}`}
                aria-hidden={pct >= 100}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Percent right */}
      <div className='w-12 shrink-0 text-right text-sm leading-[28px] font-semibold text-white md:w-16 md:text-xl md:leading-[34px]'>
        {pct}%
      </div>
    </div>
  );
}
