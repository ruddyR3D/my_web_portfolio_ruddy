'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useInView,
  useAnimationControls,
  type Variants,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

type ExperienceItem = {
  id: number;
  period: string;
  role: string;
  description: string;
  logo: string;
  href?: string;
};

const ITEMS: ExperienceItem[] = [
  {
    id: 1,
    period: '2020 - 2022',
    role: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
    logo: '/icons/icon-upwork.svg',
    href: 'https://example.com/upwork',
  },
  {
    id: 2,
    period: '2020 - 2022',
    role: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
    logo: '/icons/icon-trello.svg',
    href: 'https://example.com/trello',
  },
  {
    id: 3,
    period: '2020 - 2022',
    role: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
    logo: '/icons/icon-zoom.svg',
    href: 'https://example.com/zoom',
  },
  {
    id: 4,
    period: '2020 - 2022',
    role: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences',
    logo: '/icons/icon-zapier.svg',
    href: 'https://example.com/zapier',
  },
];

const easeEnter = [0.17, 0.55, 0.55, 1] as const;

const headerDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeEnter } },
};

// KNOB/NUMBER
const knobUpRight: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: easeEnter, delay: 0.05 + i * 0.06 },
  }),
};
const knobUpLeft: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: easeEnter, delay: 0.05 + i * 0.06 },
  }),
};

const rightCard: Variants = {
  hidden: { opacity: 0, x: 100 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: easeEnter, delay: 0.1 + i * 0.08 },
  }),
};
const leftCard: Variants = {
  hidden: { opacity: 0, x: -100 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: easeEnter, delay: 0.1 + i * 0.08 },
  }),
};

const lineUpVar: Variants = {
  hidden: { scaleY: 0 },
  show: (i: number) => ({
    scaleY: 1,
    transition: { duration: 0.35, ease: easeEnter, delay: 0.04 + i * 0.06 },
  }),
};
const lineDownVar: Variants = {
  hidden: { scaleY: 0 },
  show: (i: number) => ({
    scaleY: 1,
    transition: { duration: 0.4, ease: easeEnter, delay: 0.12 + i * 0.08 },
  }),
};

const decorRight: Variants = {
  hidden: { opacity: 0, x: 120 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeEnter, delay: 0.15 },
  },
};

export default function ExperienceSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const inView = useInView(rootRef, { once: true, amount: 0.35 });

  const headerCtrl = useAnimationControls();
  const knobRightCtrl = useAnimationControls();
  const cardRightCtrl = useAnimationControls();
  const knobLeftCtrl = useAnimationControls();
  const cardLeftCtrl = useAnimationControls();
  const decorCtrl = useAnimationControls();

  useEffect(() => {
    if (!inView) return;
    (async () => {
      await headerCtrl.start('show');
      await knobRightCtrl.start('show');
      await cardRightCtrl.start('show');
      await knobLeftCtrl.start('show');
      await cardLeftCtrl.start('show');
      await decorCtrl.start('show');
    })();
  }, [
    inView,
    headerCtrl,
    knobRightCtrl,
    cardRightCtrl,
    knobLeftCtrl,
    cardLeftCtrl,
    decorCtrl,
  ]);

  let rightIdxKnob = 0,
    rightIdxCard = 0;
  let leftIdxKnob = 0,
    leftIdxCard = 0;

  return (
    <motion.section
      ref={rootRef}
      className='relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center bg-black py-10 text-white md:py-30'
    >
      <motion.div className='custom-container mx-auto w-full'>
        {/* Decor */}
        <motion.div
          variants={decorRight}
          initial='hidden'
          animate={decorCtrl}
          className='absolute -right-6 bottom-6 z-20 hidden h-[92px] w-[138px] rotate-90 lg:block'
          aria-hidden
        >
          <div className='absolute top-0 left-0 h-[46px] w-[46px] bg-[#1D3300]' />
          <div className='absolute top-[46px] left-[46px] h-[46px] w-[46px] bg-[#1D3300]' />
          <div className='absolute top-0 left-[92px] h-[46px] w-[46px] bg-[#1D3300]' />
        </motion.div>

        {/* Header */}
        <motion.div
          variants={headerDown}
          initial='hidden'
          animate={headerCtrl}
          className='mt-10 text-center md:mt-14'
        >
          <span className='text-base font-medium text-[#91FF02] md:text-lg'>
            EXPERIENCE
          </span>
          <h2 className='mt-1 text-3xl font-extrabold text-[#FDFDFD] md:text-5xl'>
            PROFESIONAL WORK
          </h2>
        </motion.div>

        {/* Rows */}
        <div className='mt-6 space-y-6 md:mt-16 md:space-y-10'>
          {ITEMS.map((item, idx) => {
            const isOdd = (idx + 1) % 2 === 1;
            const isFirst = idx === 0;
            const isLast = idx === ITEMS.length - 1;

            const knobCtrl = isOdd ? knobRightCtrl : knobLeftCtrl;
            const cardCtrl = isOdd ? cardRightCtrl : cardLeftCtrl;
            const knobIndex = isOdd ? rightIdxKnob++ : leftIdxKnob++;
            const cardIndex = isOdd ? rightIdxCard++ : leftIdxCard++;

            return (
              <div
                key={item.id}
                className='grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 md:gap-x-16 lg:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)]'
              >
                {/* Spacer (desktop) */}
                <div
                  className={`hidden lg:block ${isOdd ? '' : 'order-3'}`}
                  style={{ width: 'clamp(19.0625rem, 40.87vw, 31.875rem)' }}
                  aria-hidden
                />

                {/* Timeline + knob */}
                <div
                  className={`relative min-h-[342px] md:min-h-[286px] ${isOdd ? '' : 'lg:order-2'}`}
                >
                  {!isFirst && (
                    <motion.div
                      variants={lineUpVar}
                      initial='hidden'
                      animate={knobCtrl}
                      custom={knobIndex}
                      className='absolute top-0 bottom-1/2 left-1/2 w-px origin-bottom -translate-x-1/2 bg-[#252B37] will-change-transform'
                    />
                  )}

                  {!isLast && (
                    <motion.div
                      variants={lineDownVar}
                      initial='hidden'
                      animate={cardCtrl}
                      custom={cardIndex}
                      className='absolute top-1/2 left-1/2 h-[810px] w-px origin-top -translate-x-1/2 bg-[#252B37] will-change-transform md:h-[300px]'
                    />
                  )}

                  {/* Knob */}
                  <motion.span
                    variants={isOdd ? knobUpRight : knobUpLeft}
                    initial='hidden'
                    animate={knobCtrl}
                    custom={knobIndex}
                    className='absolute top-1/2 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#252B37] bg-black font-bold text-[#91FF02] md:h-12 md:w-12'
                  >
                    {item.id}
                  </motion.span>
                </div>

                {/* Card */}
                <motion.div
                  variants={isOdd ? rightCard : leftCard}
                  initial='hidden'
                  animate={cardCtrl}
                  custom={cardIndex}
                  className={`min-w-0 ${isOdd ? '' : 'lg:order-1'}`}
                >
                  <CardItem item={item} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.section>
  );
}

/* subcomponent */
function CardItem({ item }: { item: ExperienceItem }) {
  const article = (
    <article className='min-h-[342px] rounded-2xl border border-[#252B37] bg-black p-4 transition-colors hover:border-[#91FF02] md:min-h-[286px] md:rounded-3xl md:p-6'>
      <div className='flex flex-wrap items-start justify-between gap-3'>
        <div className='min-w-0'>
          <p className='text-sm text-[#A4A7AE] md:text-lg'>{item.period}</p>
          <p className='mt-1 text-base font-bold text-[#FDFDFD] md:text-2xl'>
            {item.role}
          </p>
        </div>
        <div className='relative h-8 w-[114px] md:h-12'>
          <Image
            src={item.logo}
            alt='Company'
            fill
            sizes='114px'
            className='object-contain'
          />
        </div>
      </div>
      <p className='mt-4 text-sm leading-7 text-[#A4A7AE] md:text-base'>
        {item.description}
      </p>
    </article>
  );

  return item.href ? (
    <Link
      href={item.href}
      target='_blank'
      rel='noopener noreferrer'
      className='block min-w-0'
    >
      {article}
    </Link>
  ) : (
    article
  );
}
