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
    title: 'ToDoList Apps',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    href: 'https://my-project-todo-list.vercel.app/',
    img: '/images/todolist.png',
  },
  {
    title: 'Restorant Apps',
    desc: 'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    href: 'https://my-restaurant-apps.vercel.app/',
    img: '/images/restorantapps.png',
  },
  {
    title: 'Social Media Apps',
    desc: 'Next.js + TypeScript,Tailwind CSS,shadcn/ui,Redux Toolkit,TanStack Query (React Query),Day.js,.',
    href: 'https://myappssocialmedia.vercel.app',
    img: '/images/project3.png',
  },
  {
    title: 'Library Apps',
    desc: 'React + TypeScript,Tailwind CSS,shadcn/ui,Redux Toolkit,TanStack Query,Day.js,ZOD, React Hook Form.',
    href: 'https://my-library-apps.vercel.app',
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
      <div className='relative isolate mx-auto flex w-full max-w-360 py-12.5 lg:py-20'>
        {/* Decor “Group 1”  mobile */}
        <div className='pointer-events-none absolute -top-[21.62px] right-17 z-[2] lg:hidden'>
          <div className='bg-primary-400 absolute top-[69px] left-[34.5px] h-[34.5px] w-[34.5px] -rotate-90' />
          <div className='bg-primary-400 absolute top-[34.5px] left-0 h-[34.5px] w-[34.5px] -rotate-90' />
          <div className='bg-primary-400 absolute top-0 left-[34.5px] h-[34.5px] w-[34.5px] -rotate-90' />
        </div>
        <div className='custom-container flex w-full flex-col gap-6 md:gap-16 lg:gap-16'>
          {/* Header */}
          <motion.div
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            variants={containerStagger}
            className='flex flex-col items-center gap-2 text-center'
          >
            <motion.span
              variants={fadeUp}
              className='text-primary-200 text-md font-medium tracking-wide md:text-lg'
            >
              PORTFOLIO
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className='text-display-md md:text-display-2xl leading-tight font-extrabold'
            >
              SELECTED WORK
            </motion.h2>
          </motion.div>

          {/* Grid Cards */}
          <motion.ul
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            variants={containerStagger}
            className='grid w-full grid-cols-1 items-center gap-8 md:max-w-302 md:grid-cols-2 md:gap-4 md:gap-y-10 lg:grid-cols-3 lg:gap-5 lg:gap-y-12'
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
                  className='group focus-visible:ring-primary-200/60 relative flex h-full flex-col overflow-hidden rounded-2xl bg-black transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:outline-none'
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
                    <div className='ring-primary-200 group-hover:ring-primary-200 pointer-events-none absolute inset-0 ring-0 transition-all duration-300 group-hover:shadow-[0_8px_60px_rgba(145,255,2,0.18)] group-hover:ring-2' />
                    {/* Badge VISIT (desktop only per spec) */}
                    <div className='bg-neutral-25 pointer-events-none absolute top-4/5 left-1/2 hidden h-25 w-25 -translate-x-1/4 -translate-y-1/2 scale-90 transform items-center justify-center rounded-full text-neutral-950 opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 md:flex'>
                      <span className='text-lg leading-[32px] font-bold select-none'>
                        VISIT
                      </span>
                    </div>
                  </div>

                  {/* Texts */}
                  <div className='lg;gap-4 flex flex-1 flex-col gap-3 pt-3 md:pt-4 lg:pt-4'>
                    <h3 className='md:text-display-xs text-xl leading-snug font-bold'>
                      {p.title}
                    </h3>
                    <p className='md:text-md font-regular text-sm leading-7 text-zinc-400'>
                      {p.desc}
                    </p>
                  </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
