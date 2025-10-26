'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

/* =======================
   Framer Motion Variants
   ======================= */
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

type Props = {
  name?: string;
  availabilityText?: string;
  dribbbleUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
};

export default function ContactSection({
  name = 'Ruddy R3D',
  availabilityText = 'Available for Work',
  dribbbleUrl = 'https://dribbble.com/',
  instagramUrl = 'https://www.instagram.com/ronald_rollan77/',
  linkedinUrl = 'https://www.linkedin.com/in/soleh-rudiyono-ruddy-13a087344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
}: Props) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setError(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get('name') || '').trim(),
      email: String(form.get('email') || '').trim(),
      message: String(form.get('message') || '').trim(),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to send');
      setOk(true);
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err: unknown) {
      setOk(false);
      const msg =
        err instanceof Error
          ? err.message
          : typeof err === 'string'
            ? err
            : 'Something went wrong';
      setError(String(msg));
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.section
      id='contact'
      className='relative isolate mx-auto flex w-full max-w-360 flex-col items-center border-t-0 bg-black pt-3 md:border-t md:border-neutral-800 md:pt-20 md:pb-30'
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* DECORATION: DESKTOP (static, no animation) */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 z-10 hidden md:block'
      >
        <div className='absolute top-0 left-0'>
          <span className='bg-primary-400 absolute top-0 left-0 h-11.5 w-11.5' />
          <span className='bg-primary-400 absolute top-11.5 left-11.5 h-11.5 w-11.5' />
          <span className='bg-primary-400 absolute top-0 left-23 h-11.5 w-11.5' />
        </div>
        <div className='absolute right-0 bottom-0'>
          <span className='bg-primary-400 absolute right-23 bottom-0 h-11.5 w-11.5' />
          <span className='bg-primary-400 absolute right-11.5 bottom-11.5 h-11.5 w-11.5' />
          <span className='bg-primary-400 absolute right-0 bottom-0 h-11.5 w-11.5' />
        </div>
      </div>

      <div className='custom-container relative mx-auto grid w-full max-w-302 grid-cols-1 items-center md:grid-cols-[4fr_6fr] md:gap-17.5 lg:gap-30.5'>
        {/* DECORATION: MOBILE (static, no animation) */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 md:hidden'
        >
          <div className='absolute left-0 z-200 md:top-0'>
            <span className='bg-primary-400 absolute top-0 left-0 h-8.5 w-8.5' />
            <span className='bg-primary-400 absolute top-8.5 left-8.5 h-8.5 w-8.5' />
            <span className='bg-primary-400 absolute top-0 left-[69px] h-8.5 w-8.5' />
          </div>
          <div className='absolute right-0 bottom-0 -z-10'>
            <span className='bg-primary-400 absolute right-0 bottom-0 h-8.5 w-8.5' />
            <span className='bg-primary-400 absolute right-8.5 bottom-8.5 h-8.5 w-8.5' />
            <span className='bg-primary-400 absolute right-[69px] bottom-0 h-8.5 w-8.5' />
          </div>
        </div>

        {/* LEFT: Photo card  */}
        <motion.div
          className='relative z-10 mx-auto flex w-full bg-black pb-10 md:top-0 md:h-160 md:w-105 md:pb-0'
          variants={fadeDownCol}
        >
          {/* Overlay social (desktop) */}
          <div className='hidden md:block'>
            <motion.div
              className='absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-6 px-6 md:translate-y-10'
              variants={mobileItemsContainer}
            >
              <motion.div
                className='flex items-center gap-6'
                variants={rowsContainer}
              >
                <motion.div variants={fadeDownItem}>
                  <SocialIcon
                    href={dribbbleUrl}
                    src='/icons/dribble2.svg'
                    alt='Dribbble'
                  />
                </motion.div>
                <motion.div variants={fadeDownItem}>
                  <SocialIcon
                    href={instagramUrl}
                    src='/icons/instagram2.svg'
                    alt='Instagram'
                  />
                </motion.div>
                <motion.div variants={fadeDownItem}>
                  <SocialIcon
                    href={linkedinUrl}
                    src='/icons/linkedin2.svg'
                    alt='LinkedIn'
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className='flex flex-col items-center gap-1'
                variants={fadeDownItem}
              >
                <p className='text-md text-center font-bold text-white md:text-xl'>
                  {name}
                </p>
                <div className='flex items-center gap-3'>
                  <span className='bg-primary-200 inline-block h-3 w-3 rounded-full' />
                  <span className='md:text-md text-sm font-semibold text-neutral-400'>
                    {availabilityText}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Gradient overlay  */}
          <div className='pointer-events-none absolute -inset-5 top-0 left-1/2 z-10 aspect-auto h-full w-screen -translate-x-1/2 bg-[linear-gradient(180deg,rgba(0,0,0,0)_-92.59%,#000_88.93%)] md:left-0 md:w-[420px] md:-translate-x-0' />

          {/* CONTACT IMAGE  */}
          <div className='relative aspect-[420/557] h-full w-full overflow-hidden'>
            <Image
              src='/images/pict.png'
              alt='Portrait'
              fill
              className='touch-action webkit-user-drag-none webkit-user-select-none user-select-none touch-action-none pointer-events-none object-cover mix-blend-luminosity'
              priority
            />

            {/* Overlay social (mobile)  */}
            <div className='md:hidden'>
              <motion.div
                className='absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-6 px-6'
                variants={mobileItemsContainer}
              >
                <motion.div
                  className='flex items-center gap-6'
                  variants={rowsContainer}
                >
                  <motion.div variants={fadeDownItem}>
                    <SocialIcon
                      href={dribbbleUrl}
                      src='/icons/dribble2.svg'
                      alt='Dribbble'
                    />
                  </motion.div>
                  <motion.div variants={fadeDownItem}>
                    <SocialIcon
                      href={instagramUrl}
                      src='/icons/instagram2.svg'
                      alt='Instagram'
                    />
                  </motion.div>
                  <motion.div variants={fadeDownItem}>
                    <SocialIcon
                      href={linkedinUrl}
                      src='/icons/linkedin2.svg'
                      alt='LinkedIn'
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  className='flex flex-col items-center gap-1'
                  variants={fadeDownItem}
                >
                  <p className='text-md text-center font-bold text-white md:text-xl'>
                    {name}
                  </p>
                  <div className='flex items-center gap-3'>
                    <span className='bg-primary-200 inline-block h-3 w-3 rounded-full' />
                    <span className='md:text-md text-sm font-semibold text-neutral-400'>
                      {availabilityText}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Form  */}
        <motion.div
          className='relative max-w-full min-w-0 py-10 md:py-0'
          variants={fadeDownCol}
        >
          <div className='mb-6 flex flex-col gap-6 md:mb-0 md:gap-12 md:py-0'>
            <motion.header
              className='flex flex-col gap-2'
              variants={fadeDownHeader}
            >
              <p className='text-md text-primary-200 leading-8 font-medium md:text-lg'>
                CONTACT
              </p>
              <h2 className='text-neutral-25 text-display-md md:text-display-2xl leading-[1.25] font-extrabold'>
                LET’S GET IN TOUCH
              </h2>
            </motion.header>

            <motion.form
              onSubmit={onSubmit}
              className='flex flex-col gap-4 md:gap-6'
              variants={rowsContainer}
              noValidate
            >
              <motion.div
                className='flex flex-col gap-2'
                variants={fadeDownRow}
              >
                <label
                  htmlFor='name'
                  className='md:text-md text-neutral-25 text-sm font-semibold'
                >
                  Your name
                </label>
                <div className='flex items-center gap-2 rounded-2xl border border-neutral-800 px-4 py-3 hover:shadow-[0_0_60px_rgba(145,255,2,0.6)]'>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Enter your name'
                    required
                    className='md:text-md text-neutral-25 w-full bg-transparent text-sm leading-[30px] font-semibold placeholder:text-neutral-500 focus:outline-none'
                  />
                </div>
              </motion.div>

              <motion.div
                className='flex flex-col gap-2'
                variants={fadeDownRow}
              >
                <label
                  htmlFor='email'
                  className='md:text-md text-neutral-25 text-sm font-semibold'
                >
                  Email address
                </label>
                <div className='flex items-center gap-2 rounded-2xl border border-neutral-800 px-4 py-3 hover:shadow-[0_0_60px_rgba(145,255,2,0.6)]'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='enter your email'
                    required
                    className='md:text-md text-neutral-25 w-full bg-transparent text-sm leading-[30px] font-semibold placeholder:text-neutral-500 focus:outline-none'
                  />
                </div>
              </motion.div>

              <motion.div
                className='flex flex-col gap-2'
                variants={fadeDownRow}
              >
                <label
                  htmlFor='message'
                  className='md:text-md text-neutral-25 text-sm font-semibold'
                >
                  Message
                </label>
                <div className='h-[156px] rounded-2xl border border-neutral-800 px-4 py-3 hover:shadow-[0_0_60px_rgba(145,255,2,0.6)] md:h-[216px]'>
                  <textarea
                    id='message'
                    name='message'
                    rows={6}
                    placeholder='Please write your message here...'
                    required
                    className='text-neutral-25 md:text-md w-full resize-none bg-transparent text-sm leading-[30px] font-semibold placeholder:text-neutral-500 focus:outline-none'
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeDownRow}>
                <Button
                  type='submit'
                  disabled={loading}
                  className={cn(
                    'md:text-md h-12 w-full rounded-full text-sm font-bold text-neutral-950 md:h-14',
                    'shadow-[0px_4px_40px_rgba(145,255,2,0.4)]',
                    'bg-primary-200 hover:bg-primary-200 hover:brightness-110',
                    'disabled:cursor-not-allowed disabled:opacity-60'
                  )}
                >
                  {loading ? (
                    <span className='inline-flex items-center gap-2'>
                      <Loader2 className='h-4 w-4 animate-spin' />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </Button>
                {ok && (
                  <p className='mt-3 text-sm text-green-400' role='status'>
                    Thanks! Your message has been sent.
                  </p>
                )}
                {ok === false && (
                  <p className='mt-3 text-sm text-red-400' role='alert'>
                    {error || 'Failed to send. Try again.'}
                  </p>
                )}
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function SocialIcon({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='hover:border-primary-200 focus-visible:ring-primary-200 grid h-12 w-12 place-items-center rounded-full border border-neutral-800 transition-colors hover:shadow-[0_0_60px_rgba(145,255,2,0.9)] focus-visible:ring-2 focus-visible:outline-none md:h-16 md:w-16'
    >
      <Image
        src={src}
        alt={alt}
        width={28}
        height={28}
        className='h-7 w-7 md:h-7 md:w-7'
      />
    </Link>
  );
}
