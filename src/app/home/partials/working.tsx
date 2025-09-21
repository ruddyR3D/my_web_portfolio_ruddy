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
      className='custom-container mx-auto w-full max-w-[1184px] px-4 py-20'
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial='hidden'
        animate={inView ? 'show' : 'hidden'}
        className='mb-10 text-center'
      >
        <p className='text-md font-medium text-[#91FF02] md:text-lg'>WORKING</p>
        <h2 className='text-display-md md:text-display-2xl text-neutral-25 font-extrabold'>
          WHY CHOOSE ME?
        </h2>
      </motion.div>

      <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
        {cards.map((c) => (
          <motion.article
            key={c.title}
            variants={fadeUp}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            className='flex flex-col items-center gap-6'
          >
            <h3 className='md:text-display-sm text-neutral-25 text-center text-xl font-bold'>
              {c.title}
            </h3>

            <div className='relative h-20 w-20 overflow-hidden rounded-full bg-black/20 ring-1 ring-[#252B37]'>
              <Image
                src={c.img}
                alt={c.title}
                fill
                sizes='80px'
                className='object-cover'
                priority
              />
            </div>

            <motion.ul
              variants={listStagger}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='w-full divide-y divide-[#252B37]'
            >
              {c.points.map((text, i) => (
                <motion.li
                  key={`${c.title}-${i}`}
                  variants={fadeUp}
                  className='flex items-center gap-3 py-8'
                >
                  <Image
                    src='/icons/stargreen.svg'
                    alt=''
                    width={32}
                    height={32}
                    className={`h-8 w-8 shrink-0 ${c.positive ? '' : 'opacity-40'}`}
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
        className='mt-12 flex justify-center'
      >
        <Button asChild className='flex h-11 w-full px-19 md:h-12 md:w-fit'>
          <Link href='#contact' className='text-md font-bold'>
            HIRE ME
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
