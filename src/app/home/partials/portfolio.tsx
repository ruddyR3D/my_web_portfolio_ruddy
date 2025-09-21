'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

type Project = {
  title: string;
  desc: string;
  href: string;
  img: string;
};

const projects: Project[] = [
  {
    title: 'Dashboard SaaS Task Management',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    href: 'https://example.com/project-1',
    img: '/images/project1.png',
  },
  {
    title: 'Dashboard SaaS Task Management',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    href: 'https://example.com/project-2',
    img: '/images/project2.png',
  },
  {
    title: 'Dashboard SaaS Task Management',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    href: 'https://example.com/project-3',
    img: '/images/project3.png',
  },
  {
    title: 'Dashboard SaaS Task Management',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    href: 'https://example.com/project-4',
    img: '/images/project4.png',
  },
  {
    title: 'Dashboard SaaS Task Management',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    href: 'https://example.com/project-5',
    img: '/images/project5.png',
  },
  {
    title: 'Dashboard SaaS Task Management',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    href: 'https://example.com/project-6',
    img: '/images/project6.png',
  },
];

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.19, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <section
      id='portfolio'
      ref={ref}
      className='relative w-full bg-black text-white'
    >
      <div className='relative isolate mx-auto max-w-[1440px] py-12.5 lg:py-20'>
        {/* Decor “Group 1”  mobile */}
        <div className='pointer-events-none absolute -top-[21.62px] right-17 z-[2] lg:hidden'>
          <div className='absolute top-[69px] left-[34.5px] h-[34.5px] w-[34.5px] -rotate-90 bg-[#1D3300]' />
          <div className='absolute top-[34.5px] left-0 h-[34.5px] w-[34.5px] -rotate-90 bg-[#1D3300]' />
          <div className='absolute top-0 left-[34.5px] h-[34.5px] w-[34.5px] -rotate-90 bg-[#1D3300]' />
        </div>
        {/* Header */}
        <motion.div
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          variants={containerStagger}
          className='flex flex-col items-center gap-2 text-center'
        >
          <motion.span
            variants={fadeUp}
            className='text-base font-medium tracking-wide text-[#91FF02] md:text-lg'
          >
            PORTFOLIO
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className='text-3xl leading-tight font-extrabold md:text-5xl'
          >
            SELECTED WORK
          </motion.h2>
        </motion.div>

        {/* Grid Cards */}
        <motion.ul
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          variants={containerStagger}
          className='custom-container mt-10 grid w-full grid-cols-1 items-center gap-8 md:max-w-[1208px] md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4'
        >
          {projects.map((p, i) => (
            <motion.li
              key={`${p.title}-${i}`}
              variants={fadeUp}
              className='h-full'
            >
              <Link
                href={p.href}
                target='_blank'
                rel='noreferrer'
                aria-label={`Visit ${p.title}`}
                className='group relative flex h-full flex-col overflow-hidden rounded-2xl bg-black transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#91FF02]/60 focus-visible:outline-none'
              >
                {/* Image */}
                <div className='relative aspect-[4/3] w-full overflow-hidden'>
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                    priority={i < 2}
                  />
                  {/* Hover ring glow */}
                  <div className='pointer-events-none absolute inset-0 ring-0 ring-[#91FF02]/0 transition-all duration-300 group-hover:shadow-[0_8px_60px_rgba(145,255,2,0.18)] group-hover:ring-2 group-hover:ring-[#91FF02]/40' />
                  {/* Badge VISIT (desktop only per spec) */}
                  <div className='pointer-events-none absolute top-1/2 left-1/2 hidden h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 scale-90 transform items-center justify-center rounded-full bg-[#FDFDFD] text-[#0A0D12] opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 md:flex'>
                    <span className="font-['Red_Hat_Display'] text-[18px] leading-[32px] font-bold select-none">
                      VISIT
                    </span>
                  </div>
                </div>

                {/* Texts */}
                <div className='lg;gap-[16px] flex flex-1 flex-col gap-[12px] pt-[12px] lg:pt-[16px]'>
                  <h3 className='text-xl leading-snug font-bold md:text-2xl'>
                    {p.title}
                  </h3>
                  <p className='text-sm leading-7 text-zinc-400 md:text-base'>
                    {p.desc}
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
