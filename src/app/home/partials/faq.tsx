'use client';

import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = [
  {
    q: 'What technologies do you specialize in?',
    a: 'I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.',
  },
  {
    q: 'Do you work on both design and development?',
    a: 'I focus primarily on frontend development, translating UI/UX into responsive, interactive experiences; I collaborate closely with designers.',
  },
  {
    q: 'Can you optimize an existing website for better performance?',
    a: 'Yes—audits, code splitting, lazy loading, accessibility & SEO improvements, and performance monitoring.',
  },
  {
    q: 'Do you take freelance or contract-based projects?',
    a: 'Yes. I’m open to freelance, contract, and full-time opportunities depending on scope and requirements.',
  },
  {
    q: 'How do you approach a new project?',
    a: 'Discovery → wireframing/UI → development → testing → deployment with iterative feedback.',
  },
  {
    q: 'How can we collaborate?',
    a: 'Contact me via email, LinkedIn, or GitHub. We’ll start with a short consultation to align and plan.',
  },
];

/*  Variants  */
const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const fromLeftCol: Variants = {
  hidden: { opacity: 0, x: -120 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const fromRightCol: Variants = {
  hidden: { opacity: 0, x: 120 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineGrow: Variants = {
  hidden: { scaleY: 0, originY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.15 },
  },
};

/*  (reusable mobile & desktop)  */
function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.35 }}
      className='w-full'
    >
      <Accordion type='multiple' className='w-full'>
        {items.map((item, i) => (
          <motion.div variants={itemUp} key={i}>
            <AccordionItem
              value={`item-${item.q}-${i}`}
              className='border-b border-[#252B37] py-4'
            >
              <AccordionTrigger className='group /* sembunyikan chevron bawaan shadcn */ flex items-start gap-3 rounded-md p-0 text-left hover:no-underline focus-visible:ring-2 focus-visible:ring-[#91FF02] focus-visible:outline-none lg:gap-3 [&>svg]:hidden'>
                <Image
                  src='/icons/stargreen.svg'
                  alt='toggle answer'
                  width={32}
                  height={32}
                  className='h-6 w-6 shrink-0 transition-transform duration-300 group-hover:scale-105 group-data-[state=open]:rotate-180 motion-reduce:transition-none lg:h-8 lg:w-8'
                  priority
                />
                <span className='text-[18px] leading-8 font-bold text-[#FDFDFD] lg:text-2xl lg:leading-9'>
                  {item.q}
                </span>
              </AccordionTrigger>

              <AccordionContent className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pt-2 text-sm leading-7 text-[#A4A7AE] motion-reduce:transition-none lg:text-base lg:leading-[30px]'>
                {item.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  );
}

export default function FAQ() {
  const rows = [FAQS.slice(0, 2), FAQS.slice(2, 4), FAQS.slice(4, 6)];

  return (
    <section id='faq' className='mx-auto w-full py-10 md:py-20'>
      {/* Header (fade-up ) */}
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.4 }}
        className='mx-auto flex w-full max-w-[790px] flex-col items-center gap-2'
      >
        <motion.p
          variants={itemUp}
          className='text-md leading-[30px] font-medium text-[#91FF02]'
        >
          FAQ
        </motion.p>
        <motion.h2
          variants={itemUp}
          className='text-display-md text-center leading-[60px] font-extrabold tracking-[-0.02em] text-[#FDFDFD]'
        >
          FREQUENTLY ASKED QUESTIONS
        </motion.h2>
      </motion.div>

      {/* Mobile+ stagger */}
      <div className='custom-container mx-auto w-full pt-6 lg:hidden'>
        <FaqList items={FAQS} />
      </div>

      {/* Desktop*/}
      <div className='mt-10 hidden lg:block'>
        <div className='custom-container relative mx-auto w-full max-w-[1208px]'>
          {/* vertical line (grow) */}
          <motion.span
            variants={lineGrow}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            className='pointer-events-none absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-[#252B37]'
          />

          {rows.map((pair, rowIdx) => (
            <div
              key={rowIdx}
              className={`relative grid grid-cols-1 gap-10 py-8 lg:grid-cols-2 ${
                rowIdx < rows.length - 1 ? 'border-b border-[#252B37]' : ''
              }`}
            >
              {/* left column anim from left */}
              <motion.div
                variants={fromLeftCol}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.35 }}
                className='max-w-[552px] transform-gpu'
              >
                <FaqList items={[pair[0]]} />
              </motion.div>

              {/* right column anim from right */}
              <motion.div
                variants={fromRightCol}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.35 }}
                className='max-w-[552px] transform-gpu'
              >
                <FaqList items={[pair[1]]} />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
