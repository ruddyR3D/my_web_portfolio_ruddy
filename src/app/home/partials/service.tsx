'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { motion, type Variants } from 'framer-motion';

type Service = {
  id: number;
  number: string;
  icon: string;
  title: string;
  desc: string;
};

const SERVICES: Service[] = [
  {
    id: 1,
    number: '01',
    icon: '/icons/monitor.svg',
    title: 'Custom Website Development',
    desc: 'Building responsive, fast, and scalable websites tailored to your needs.',
  },
  {
    id: 2,
    number: '02',
    icon: '/icons/monitor.svg',
    title: 'Web Performance Optimization',
    desc: 'Enhancing website speed, SEO, and overall performance for better.',
  },
  {
    id: 3,
    number: '03',
    icon: '/icons/monitor.svg',
    title: 'Website Maintenance & Debugging',
    desc: 'Fixing bugs, improving UI, and ensuring smooth performance over time.',
  },
];

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

const headerDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeCurve },
  },
};

const gridStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const cardDrop: Variants = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeCurve },
  },
};

export default function ServiceSection() {
  return (
    <motion.section
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
      className='relative isolate flex border-t-0 bg-black md:border-t md:border-neutral-800'
    >
      <div className='custom-container flex w-full flex-col gap-6 py-10 md:gap-12 md:py-30'>
        {/* Services Header */}
        <motion.div
          variants={headerDown}
          className={cn(
            'flex flex-col md:flex-row md:items-start md:justify-between',
            'md:gap-auto gap-4'
          )}
        >
          {/* Services Title */}
          <div className='flex w-full flex-col justify-start gap-2 md:mx-0 md:w-127.25 md:gap-2'>
            <p className='text-md text-primary-200 w-full text-left leading-[30px] font-medium md:text-lg md:leading-8'>
              Services
            </p>
            <h2 className='text-display-md text-neutral-25 md:text-display-2xl w-full text-left leading-[46px] font-extrabold md:leading-[60px]'>
              MY SERVICE EXPERTISE
            </h2>
          </div>
          <div className='flex w-full flex-col md:w-126 md:py-7.25'>
            <p className='text-md mx-auto w-full leading-[30px] font-medium tracking-tighter text-neutral-400 md:mx-0 md:text-right md:text-xl md:leading-[34px]'>
              Creating modern, intuitive, and visually consistent web
              experiences that align with industry trends and user expectations.
            </p>
          </div>
        </motion.div>

        {/* Services Cards (drop down + stagger) */}
        <motion.div
          variants={gridStagger}
          className={cn('grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10')}
        >
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.id}
              variants={cardDrop}
              className={cn(
                'flex flex-col',
                'gap-3 md:gap-6',
                'bg-transparent'
              )}
            >
              {/* Number */}
              <div className='text-md w-full leading-[30px] font-semibold text-neutral-400 md:text-xl md:leading-[34px]'>
                {s.number}
              </div>

              {/* Separator line */}
              <div className='w-full border-t border-neutral-800' />

              <div className='mt-0'>
                <div className='relative h-8 w-8'>
                  <Image
                    src={s.icon}
                    alt='monitor icon'
                    fill
                    className='touch-action webkit-user-drag-none webkit-user-select-none user-select-none touch-action-none pointer-events-none object-contain p-1'
                    sizes='8'
                    priority={i === 0}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className='text-neutral-25 md:text-display-sm mt-1 w-full text-xl leading-[34px] font-semibold md:leading-[38px]'>
                {s.title}
              </h3>

              {/* Description */}
              <p className='font-regular text-md w-full leading-[30px] text-neutral-400 md:text-xl md:leading-[34px]'>
                {s.desc}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
