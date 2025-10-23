'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import MaskIcon from '@/components/icons/maskicon';
import { TESTIMONIALS } from '@/components/constants/testimonial-data';
import Image from 'next/image';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';

function RoundNav({
  icon,
  onClick,
  variant = 'default',
  ariaLabel,
}: {
  icon: 'left' | 'right';
  onClick: () => void;
  variant?: 'default' | 'accent';
  ariaLabel: string;
}) {
  const border =
    variant === 'accent'
      ? 'border-neutral-800 text-neutral-800'
      : 'border-neutral-800 text-neutral-800';
  return (
    <button
      type='button'
      onClick={onClick}
      aria-label={ariaLabel}
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full border ${border} hover:text-primary-200 transition-colors md:h-14 md:w-14`}
    >
      <MaskIcon
        src={icon === 'left' ? '/icons/left.svg' : '/icons/right.svg'}
        className='h-5 w-5 md:h-6 md:w-6'
      />
    </button>
  );
}

function Stars({
  value = 5,
  max = 5,
  className = '',
}: {
  value?: number;
  max?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: max }).map((_, i) => (
        <MaskIcon
          key={i}
          src='/icons/star.svg'
          className={`h-5 w-5 md:h-8 md:w-8 ${i < value ? 'text-[#F3993F]' : 'text-neutral-800'}`}
          title={`${value}/${max}`}
        />
      ))}
    </div>
  );
}

function useItemsPerPage() {
  const [perPage, setPerPage] = useState(3);
  useEffect(() => {
    const calc = () => setPerPage(window.innerWidth >= 768 ? 4 : 3);
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);
  return perPage;
}

const easeEnter = [0.17, 0.55, 0.55, 1] as const;

const gridContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.28,
      staggerChildren: 0.14,
    },
  },
};

const fromLeftCard: Variants = {
  hidden: { opacity: 0, x: -160 },
  show: { opacity: 1, x: 0, transition: { duration: 1.1, ease: easeEnter } },
};
const fromRightCard: Variants = {
  hidden: { opacity: 0, x: 160 },
  show: { opacity: 1, x: 0, transition: { duration: 1.1, ease: easeEnter } },
};

export default function TestimonialsSection() {
  const itemsPerPage = useItemsPerPage();
  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(TESTIMONIALS.length / itemsPerPage)),
    [itemsPerPage]
  );

  const [page, setPage] = useState(0);

  useEffect(() => setPage(0), [itemsPerPage]);

  const start = page * itemsPerPage;
  const visible = TESTIMONIALS.slice(start, start + itemsPerPage);

  const gridRef = useRef<HTMLDivElement | null>(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-12% 0px' });

  const pagerCtrl = useAnimation();
  useEffect(() => {
    void pagerCtrl.set({ x: 0, opacity: 1 });
  }, [pagerCtrl]);

  const prev = async () => {
    await pagerCtrl.start({
      x: 60,
      opacity: 0,
      transition: { duration: 0.35, ease: 'easeInOut' },
    });
    setPage((p) => (p - 1 + totalPages) % totalPages);
    await pagerCtrl.set({ x: -60, opacity: 0 });
    await pagerCtrl.start({
      x: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: 'easeOut' },
    });
  };

  const next = async () => {
    await pagerCtrl.start({
      x: -60,
      opacity: 0,
      transition: { duration: 0.35, ease: 'easeInOut' },
    });
    setPage((p) => (p + 1) % totalPages);
    await pagerCtrl.set({ x: 60, opacity: 0 });
    await pagerCtrl.start({
      x: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: 'easeOut' },
    });
  };

  return (
    <section className='relative isolate mx-auto max-w-360 bg-black py-10 md:py-20'>
      <div className='custom-container mx-auto flex w-full max-w-302 flex-col gap-6 md:gap-16'>
        {/* Header */}
        <div className='mx-auto flex max-w-148 flex-col items-center gap-2'>
          <p className='text-primary-200 text-md text-center leading-7 font-medium md:text-lg md:leading-8'>
            TESTIMONIALS
          </p>
          <h2 className='text-display-md md:text-display-2xl text-neutral-25 max-w-197.5 px-10 text-center font-extrabold md:px-0'>
            PEOPLE SAYS ABOUT ME
          </h2>
        </div>

        {/* List + pager animation wrapper */}
        <div className=''>
          <motion.div animate={pagerCtrl}>
            {/* GRID: inView → trigger stagger */}
            <motion.div
              ref={gridRef}
              variants={gridContainer}
              initial='hidden'
              animate={gridInView ? 'show' : 'hidden'}
              className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 md:gap-y-8.75'
            >
              {visible.map((t, idx) => {
                const isLeftCol = idx % 2 === 0;

                return (
                  <motion.article
                    key={`${t.name}-${idx}-p${page}`}
                    variants={isLeftCol ? fromLeftCard : fromRightCard}
                    className='box-border flex h-auto transform-gpu flex-col gap-3 rounded-2xl border border-neutral-800 p-4 will-change-transform md:h-67.5 md:rounded-3xl md:p-6'
                  >
                    {/* Top row */}
                    <div className='flex items-center justify-between gap-4'>
                      {/* Name + role */}
                      <div className='mx-auto flex min-w-0 flex-1 flex-col gap-1'>
                        <h3 className='text-neutral-25 truncate text-lg font-bold md:text-xl'>
                          {t.name}
                        </h3>
                        <p className='text-md font-regular truncate text-neutral-400 md:text-lg md:font-medium'>
                          {t.role}
                        </p>
                      </div>
                      {/* Company logo */}
                      <Image
                        src={t.companyLogo}
                        alt='Company logo'
                        className='mx-auto h-8 w-auto md:h-12'
                        loading='lazy'
                        width={48}
                        height={48}
                      />
                    </div>

                    {/* Stars */}
                    <Stars value={t.rating} className='mt-1 md:mt-0' />

                    {/* Feedback */}
                    <p className='text-md text-neutral-25 font-medium md:text-lg'>
                      {t.feedback}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Nav buttons */}
          <div className='flex justify-center gap-4 pt-6 md:pt-10'>
            <RoundNav
              icon='left'
              onClick={prev}
              ariaLabel='Previous testimonials'
            />
            <RoundNav
              icon='right'
              onClick={next}
              variant='accent'
              ariaLabel='Next testimonials'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
