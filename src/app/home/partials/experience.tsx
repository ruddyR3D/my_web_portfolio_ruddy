'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';

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

/* ===========
   Variants
   =========== */
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

const fadeDownItem: Variants = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

// stagger
const cardContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export default function ExperienceSection() {
  return (
    <motion.section
      id='experience'
      className='relative isolate mx-auto flex w-full max-w-360 flex-col items-center bg-black py-10 text-white md:py-20'
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className='custom-container w/full mx-auto flex flex-col gap-6 md:gap-16'>
        {/* Desktop: (rotated) */}
        <div className='absolute -right-6 bottom-6 z-20 order-2 hidden h-23 w-34.5 flex-none grow-0 rotate-90 md:hidden lg:block'>
          <div className='bg-primary-400 absolute top-0 left-0 h-11.5 w-11.5' />
          <div className='bg-primary-400 absolute top-11.5 left-11.5 h-11.5 w-11.5' />
          <div className='bg-primary-400 absolute top-0 left-23 h-11.5 w-11.5' />
        </div>

        {/* Header (ANIMATED) */}
        <motion.div
          className='relative isolate mx-auto flex h-32.5 w-73 flex-col items-center gap-2 md:h-25 md:w-127.25'
          variants={fadeDownHeader}
        >
          <span className='text-primary-200 text-md font-medium md:text-lg'>
            EXPERIENCE
          </span>
          <h2 className='text-neutral-25 text-display-md md:text-display-2xl text-center font-extrabold'>
            PROFESIONAL WORK
          </h2>
        </motion.div>

        {/* Rows (ANIMATED CONTAINER) */}
        <motion.div
          className='space-y-6 md:space-y-10'
          variants={rowsContainer}
        >
          {ITEMS.map((item, idx) => {
            const isOdd = (idx + 1) % 2 === 1;
            const isFirst = idx === 0;
            const isLast = idx === ITEMS.length - 1;

            return (
              <motion.div
                key={item.id}
                className='grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 md:gap-x-16 lg:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)]'
                variants={fadeDownRow}
              >
                {/* Desktop spacer left/right */}
                <div
                  className={`hidden lg:block ${isOdd ? '' : 'order-3'}`}
                  style={{ width: 'clamp(19.0625rem, 40.87vw, 31.875rem)' }}
                  aria-hidden
                />

                {/* Knob/number */}
                <div
                  className={`relative min-h-85.5 md:min-h-71.5 ${
                    isOdd ? '' : 'lg:order-2'
                  }`}
                >
                  {!isFirst && (
                    <div className='absolute top-0 bottom-1/2 left-1/2 w-px -translate-x-1/2 bg-neutral-800' />
                  )}
                  {!isLast && (
                    <div className='absolute top-1/2 left-1/2 h-75 w-px origin-top -translate-x-1/2 bg-neutral-800 will-change-transform md:h-75' />
                  )}
                  <motion.span
                    className='text-primary-200 absolute top-1/2 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-800 bg-black font-bold md:h-12 md:w-12'
                    variants={fadeDownItem}
                  >
                    {item.id}
                  </motion.span>
                </div>

                {/* Card */}
                <div className={`min-w-0 ${isOdd ? '' : 'lg:order-1'}`}>
                  <CardItem item={item} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* subcomponent */
function CardItem({ item }: { item: ExperienceItem }) {
  const body = (
    <motion.article
      className='hover:border-primary-200 min-h-85.5 rounded-2xl border border-neutral-800 bg-black p-4 transition-colors md:min-h-71.5 md:rounded-3xl md:p-6'
      variants={cardContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className='flex flex-wrap items-start justify-between gap-1'>
        <div className='min-w-0'>
          <motion.p
            className='font-reguler text-sm text-neutral-400 md:text-lg md:font-medium'
            variants={fadeDownItem}
          >
            {item.period}
          </motion.p>
          <motion.p
            className='text-neutral-25 text-md md:text-display-xs mt-1 font-bold'
            variants={fadeDownItem}
          >
            {item.role}
          </motion.p>
        </div>

        <motion.div
          className='relative h-8 w-[114px] md:h-12'
          variants={fadeDownItem}
        >
          <Image
            src={item.logo}
            alt='Company'
            fill
            sizes='114px'
            className='object-contain object-left'
          />
        </motion.div>
      </div>

      <motion.p
        className='font-regular md:text-md mt-4 text-sm leading-7 text-neutral-400'
        variants={fadeDownItem}
      >
        {item.description}
      </motion.p>
    </motion.article>
  );

  return item.href ? (
    <Link
      href={item.href}
      target='_blank'
      rel='noopener noreferrer'
      className='block min-w-0'
    >
      {body}
    </Link>
  ) : (
    body
  );
}
