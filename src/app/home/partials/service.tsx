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
    title: 'Web App Development',
    desc: 'Modern SPAs/SSR with robust state, data fetching, and performance best practices.',
  },
  {
    id: 3,
    number: '03',
    icon: '/icons/monitor.svg',
    title: 'UI Engineering',
    desc: 'Pixel-perfect UI, accessibility, animations, and design-system integration.',
  },
];

/* ====== Animation setup (turun dari atas) ====== */
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
      className={cn(
        'relative isolate border-t-0 bg-black md:border-t md:border-[#252B37]'
      )}
    >
      <div className='custom-container w-full flex-col px-4 py-12 sm:px-6 md:px-6 md:py-20'>
        {/* Services Header */}
        <motion.div
          variants={headerDown}
          className={cn(
            'flex flex-col md:flex-row md:items-center md:justify-between',
            'gap-4 md:gap-[121px]'
          )}
        >
          {/* Services Title */}
          <div className='w/full mx-auto flex flex-col items-center gap-2 md:mx-0 md:w-[509px] md:gap-2'>
            <p className="w-full text-left font-['Red_Hat_Display'] text-[16px] leading-[30px] font-medium text-[#91FF02] md:text-[18px] md:leading-[32px]">
              Services
            </p>
            <h2 className="w-full text-left font-['Red_Hat_Display'] text-[32px] leading-[46px] font-extrabold text-[#FDFDFD] md:text-[48px] md:leading-[60px]">
              MY SERVICE EXPERTISE
            </h2>
          </div>

          <p className="mx-auto w-full font-['Red_Hat_Display'] text-[16px] leading-[30px] text-[#A4A7AE] md:mx-0 md:w-[504px] md:text-right md:text-[20px] md:leading-[34px]">
            Creating modern, intuitive, and visually consistent web experiences
            that align with industry trends and user expectations.
          </p>
        </motion.div>

        {/* Services Cards (drop down + stagger) */}
        <motion.div
          variants={gridStagger}
          className={cn(
            'mt-10 grid grid-cols-1 gap-[24px] md:mt-12 md:grid-cols-3 md:gap-[40px]'
          )}
        >
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.id}
              variants={cardDrop}
              className={cn(
                'flex flex-col',
                'gap-[12px] md:gap-[24px]',
                'bg-transparent'
              )}
            >
              {/* Number */}
              <div className="w-full font-['Red_Hat_Display'] text-[16px] leading-[30px] text-[#A4A7AE] md:text-[20px] md:leading-[34px]">
                {s.number}
              </div>

              {/* Separator line */}
              <div className='w-full border-t border-[#252B37]' />

              <div className='mt-2'>
                <div className='relative h-[32px] w-[32px]'>
                  <Image
                    src={s.icon}
                    alt='monitor icon'
                    fill
                    className='object-contain p-1'
                    sizes='32px'
                    priority={i === 0}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-1 w-full font-['Red_Hat_Display'] text-[20px] leading-[34px] font-semibold text-white md:text-[28px] md:leading-[38px]">
                {s.title}
              </h3>

              {/* Description */}
              <p className="w-full font-['Red_Hat_Display'] text-[16px] leading-[30px] text-[#A4A7AE] md:text-[20px] md:leading-[34px]">
                {s.desc}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
