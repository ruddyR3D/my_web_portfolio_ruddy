'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type CardProps = {
  title: string;
  img: string;
  points: string[];
  positive?: boolean;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const listStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.07 } },
};

export default function WorkingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' });

  const cards: CardProps[] = [
    {
      title: 'WORKING WITH ME',
      img: '/images/pict.png',
      points: [
        'React Expert',
        'Precise Website Implementation',
        'TypeScript Proficiency',
        'Clean, Maintainable Code',
        'Responsive Website Development',
        'UI Design Proficiency (Figma)',
      ],
      positive: true,
    },
    {
      title: 'ANOTHER TALENT',
      img: '/images/placehoder.png',
      points: [
        'Basic React Knowledge',
        'Inconsistent Design Translation',
        'Little to No TypeScript Knowledge',
        'Unstructured Code',
        'Inconsistent Responsiveness',
        'No Design Skills',
      ],
      positive: false,
    },
  ];

  return (
    <section
      ref={ref}
      className='relative isolate mx-auto flex w-full max-w-360 flex-col items-center bg-black py-10 md:py-20'
    >
      <div className='custom-container mx-auto flex w-full max-w-302 flex-col gap-6 md:gap-12'>
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          className='flex w-full flex-col gap-2 text-center'
        >
          <p className='text-md text-primary-200 font-medium md:text-lg'>
            WORKING
          </p>
          <h2 className='text-display-md md:text-display-2xl text-neutral-25 font-extrabold'>
            WHY CHOOSE ME?
          </h2>
        </motion.div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-20'>
          {cards.map((c) => (
            <motion.article
              key={c.title}
              variants={fadeUp}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='flex flex-col items-center gap-6'
            >
              {/* Separator line */}

              <h3 className='md:text-display-sm text-neutral-25 text-center text-xl font-bold'>
                {c.title}
              </h3>
              <div className='relative h-20 w-20 overflow-hidden rounded-full bg-black/20 ring-1 ring-neutral-800'>
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes='80px'
                  className='touch-action webkit-user-drag-none webkit-user-select-none user-select-none touch-action-none pointer-events-none object-cover'
                  priority
                />
              </div>
              <motion.ul
                variants={listStagger}
                initial='hidden'
                animate={inView ? 'show' : 'hidden'}
                className='w-full divide-y divide-neutral-800'
              >
                {c.points.map((text, i) => (
                  <motion.li
                    key={`${c.title}-${i}`}
                    variants={fadeUp}
                    className='flex items-center gap-3 py-6 md:py-8'
                  >
                    <Image
                      src='/icons/stargreen.svg'
                      alt=''
                      width={32}
                      height={32}
                      className={`touch-action webkit-user-drag-none webkit-user-select-none user-select-none touch-action-none pointer-events-none h-8 w-8 shrink-0 ${c.positive ? '' : 'opacity-40'}`}
                    />
                    <span
                      className={
                        c.positive
                          ? 'text-neutral-25 text-md font-bold md:text-xl'
                          : 'text-md md:text-display-xs font-regular text-neutral-400'
                      }
                    >
                      {text}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          className='flex justify-center'
        >
          <Button asChild className='flex h-12 w-full px-19 md:h-14 md:w-60'>
            <Link href='#contact' className='md:text-md text-sm font-bold'>
              HIRE ME
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
