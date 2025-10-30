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
    a: 'I focus primarily on frontend development, translating UI/UX designs into responsive and interactive web experiences. However, I collaborate closely with designers to ensure a seamless user experience.',
  },
  {
    q: 'Can you optimize an existing website for better performance?',
    a: 'Yes! I can analyze, debug, and optimize websites to improve speed, accessibility, and SEO, using best practices like lazy loading, code splitting, and performance monitoring.',
  },
  {
    q: 'Do you take freelance or contract-based projects?',
    a: 'Yes! I am open to freelance, contract, and full-time opportunities, depending on the project scope and requirements. Feel free to reach out!',
  },
  {
    q: 'How do you approach a new project?',
    a: 'I start by understanding the project goals and requirements, followed by wireframing or UI implementation, then development, testing, and deployment—ensuring a smooth and efficient workflow.',
  },
  {
    q: 'How can we collaborate?',
    a: 'You can contact me via email, LinkedIn, or GitHub. I usually begin with a consultation to discuss your needs, then propose a plan to bring your vision to life. Let’s create something awesome together!',
  },
];

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

const fadeDownCol: Variants = {
  hidden: { opacity: 0, y: -24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeDownItem: Variants = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
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

const mobileItemsContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

/* ===== Reusable list (desktop) ===== */
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
          <motion.div variants={fadeDownItem} key={`${item.q}-${i}`}>
            <AccordionItem
              value={`item-${item.q}-${i}`}
              className='flex flex-col gap-2 border-b border-neutral-800 md:gap-6'
            >
              <AccordionTrigger className='group focus-visible:ring-primary-200 flex items-start gap-3 rounded-md p-0 text-left hover:no-underline focus-visible:ring-2 focus-visible:outline-none md:gap-3 [&>svg]:hidden'>
                <Image
                  src='/icons/stargreen.svg'
                  alt='toggle answer'
                  width={32}
                  height={32}
                  className='h-6 w-6 shrink-0 transition-transform duration-300 group-hover:scale-105 group-data-[state=open]:rotate-180 motion-reduce:transition-none md:h-8 md:w-8'
                  priority
                />
                <span className='text-neutral-25 md:text-display-xs text-lg leading-8 font-bold md:leading-9'>
                  {item.q}
                </span>
              </AccordionTrigger>

              <AccordionContent className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down md:text-md text-sm leading-7 font-medium text-neutral-400 motion-reduce:transition-none md:pt-0 lg:leading-[30px]'>
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
    <section id='faq' className='mx-auto w-full'>
      <div className='relative isolate mx-auto flex w-full max-w-360 flex-col items-center bg-black py-10 text-white md:py-20'>
        <div className='custom-container mx-auto flex w-full flex-col gap-6 overflow-hidden px-4 md:gap-12 md:px-6 lg:px-8'>
          <motion.div
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.4 }}
            className='mx-auto flex w-73 flex-col items-center gap-2 md:w-full'
          >
            <motion.p
              variants={fadeDownHeader}
              className='text-md text-primary-200 leading-[30px] font-medium md:text-lg'
            >
              FAQ
            </motion.p>
            <motion.h2
              variants={fadeDownHeader}
              className='text-display-md md:text-display-2xl text-neutral-25 text-center font-extrabold'
            >
              FREQUENTLY ASKED QUESTIONS
            </motion.h2>
          </motion.div>

          {/* MOBILE: (staggered) */}
          <motion.div
            variants={mobileItemsContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className='mx-auto w-full md:hidden'
          >
            <Accordion type='multiple' className='w-full'>
              {FAQS.map((item, i) => (
                <motion.div key={`m-${item.q}-${i}`} variants={fadeDownItem}>
                  <AccordionItem
                    value={`m-item-${i}`}
                    className={`flex flex-col gap-2 border-[#252B37] py-4 ${i === FAQS.length - 1 ? 'border-b-0' : 'border-b'}`}
                  >
                    <AccordionTrigger className='group focus-visible:ring-primary-200 flex items-start gap-3 rounded-md p-0 text-left hover:no-underline focus-visible:ring-2 focus-visible:outline-none [&>svg]:hidden'>
                      <Image
                        src='/icons/stargreen.svg'
                        alt='toggle answer'
                        width={32}
                        height={32}
                        className='h-6 w-6 shrink-0 transition-transform duration-300 group-hover:scale-105 group-data-[state=open]:rotate-180 motion-reduce:transition-none'
                        priority
                      />
                      <span className='text-neutral-25 text-lg leading-8 font-bold'>
                        {item.q}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pt-2 text-sm leading-7 text-neutral-400 motion-reduce:transition-none'>
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          <div className='hidden md:block'>
            <motion.div
              variants={rowsContainer}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.2 }}
              className='w/full relative mx-auto max-w-[1208px]'
            >
              {rows.map((pair, rowIdx) => (
                <motion.div
                  key={`d-row-${rowIdx}`}
                  variants={fadeDownRow}
                  className={`relative grid grid-cols-1 gap-8 border-[#252B37] py-8 md:grid-cols-2 md:after:pointer-events-none md:after:absolute md:after:top-[calc(theme(spacing.8)+1px)] md:after:bottom-[calc(theme(spacing.8)+1px)] md:after:left-1/2 md:after:w-px md:after:-translate-x-1/2 md:after:bg-[#252B37] md:after:content-[''] lg:gap-10 ${rowIdx < rows.length - 1 ? 'border-b border-[#252B37]' : ''}`}
                >
                  <motion.div
                    variants={fadeDownCol}
                    className='w-full max-w-[552px] transform-gpu will-change-transform'
                  >
                    <FaqList items={[pair[0]]} />
                  </motion.div>

                  <motion.div
                    variants={fadeDownCol}
                    className='w-full max-w-[552px] transform-gpu will-change-transform'
                  >
                    <FaqList items={[pair[1]]} />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
