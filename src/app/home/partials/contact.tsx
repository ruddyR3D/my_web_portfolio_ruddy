'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const border = '#252B37';

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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
  instagramUrl = 'https://instagram.com/',
  linkedinUrl = 'https://www.linkedin.com/',
}: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(rootRef, { once: true, amount: 0.3 });

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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='relative isolate mx-auto flex w-full max-w-[1440px] flex-col items-center border-t-0 bg-black py-16 md:border-t md:border-[#252B37] md:py-30'
      style={{
        transform: isInView ? 'none' : 'translateY(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <div
        ref={rootRef}
        className='custom-container max-w-[1208px]relative mx-auto grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[4fr_6fr] lg:gap-[122px]'
      >
        {/* ====== DECORATION: DESKTOP (md+) ======
         */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 z-10 hidden md:block'
        >
          {/* Group 2 */}
          <div className='absolute top-0 left-0'>
            <span className='absolute top-0 left-0 h-[46px] w-[46px] bg-[#1D3300]' />
            <span className='absolute top-[46px] left-[46px] h-[46px] w-[46px] bg-[#1D3300]' />
            <span className='absolute top-0 left-[92px] h-[46px] w-[46px] bg-[#1D3300]' />
          </div>

          {/* Group 1 */}
          <div className='absolute right-0 bottom-0'>
            <span className='absolute right-[92px] bottom-0 h-[46px] w-[46px] bg-[#1D3300]' />
            <span className='absolute right-[46px] bottom-[46px] h-[46px] w-[46px] bg-[#1D3300]' />
            <span className='absolute right-0 bottom-0 h-[46px] w-[46px] bg-[#1D3300]' />
          </div>
        </div>

        {/* ====== DECORATION: MOBILE (sm-) ======
         */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 z-10 md:hidden'
        >
          {/* Group 2 */}
          <div className='absolute top-0 left-0'>
            <span className='absolute top-0 left-0 h-[34.5px] w-[34.5px] bg-[#1D3300]' />
            <span className='absolute top-[34.5px] left-[34.5px] h-[34.5px] w-[34.5px] bg-[#1D3300]' />
            <span className='absolute top-0 left-[69] h-[34.5px] w-[34.5px] bg-[#1D3300]' />
          </div>

          {/* Group 1 */}
          <div className='absolute right-0 bottom-0'>
            <span className='absolute right-0 bottom-0 h-[34.5px] w-[34.5px] bg-[#1D3300]' />
            <span className='absolute right-[34.5px] bottom-[34.5px] h-[34.5px] w-[34.5px] bg-[#1D3300]' />
            <span className='absolute right-[69px] bottom-0 h-[34.5px] w-[34.5px] bg-[#1D3300]' />
          </div>
        </div>
        {/* LEFT: Photo card */}
        <motion.div
          variants={fadeUp}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          className='relative mx-auto w-full max-w-[420px]'
        >
          {/* foto */}

          <div className='relative aspect-[420/557] w-full overflow-hidden'>
            <Image
              src='/images/pict.png'
              alt='Portrait'
              fill
              className='object-cover mix-blend-luminosity'
              priority
            />
            {/* Gradient overlay */}
            <div className='pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black' />

            {/* Footer overlay: social + name/status */}
            <div className='absolute inset-x-0 bottom-0 flex flex-col items-center gap-6 p-6'>
              {/* Social Row */}
              <div className='flex items-center gap-6'>
                <SocialIcon
                  href={dribbbleUrl}
                  src='/icons/dribble2.svg'
                  alt='Dribbble'
                />
                <SocialIcon
                  href={instagramUrl}
                  src='/icons/instagram2.svg'
                  alt='Instagram'
                />
                <SocialIcon
                  href={linkedinUrl}
                  src='/icons/linkedin2.svg'
                  alt='LinkedIn'
                />
              </div>

              {/* Name + availability */}
              <div className='flex flex-col items-start gap-1'>
                <p className='text-neutral-25 text-md text-center font-bold md:text-2xl'>
                  {name}
                </p>
                <div className='flex items-center gap-3'>
                  <span className='bg-primary-200 inline-block h-3 w-3 rounded-full' />
                  <span className='md:text-md text-sm font-semibold text-neutral-400'>
                    {availabilityText}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Form */}
        <motion.div
          variants={stagger}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          className='relative max-w-full'
        >
          {/* Top-right header */}

          <motion.header variants={fadeUp} className='mb-6'>
            <p className='text-md text-primary-200 leading-8 font-medium md:text-lg'>
              CONTACT
            </p>
            <h2 className='text-neutral-25 text-display-md md:text-display-2xl leading-[1.25] font-extrabold'>
              LET’S GET IN TOUCH
            </h2>
          </motion.header>

          <motion.form
            onSubmit={onSubmit}
            variants={stagger}
            className='flex flex-col gap-6'
            noValidate
          >
            <motion.div variants={fadeUp} className='flex flex-col gap-2'>
              <label
                htmlFor='name'
                className='md:text-md text-neutral-25 text-sm font-semibold'
              >
                Your name
              </label>
              <div className='flex items-center gap-2 rounded-2xl border border-neutral-800 bg-black px-4 py-3'>
                <input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Enter your name'
                  required
                  className="w-full bg-transparent font-['Poppins'] text-base leading-[30px] text-white placeholder:text-white/40 focus:outline-none"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className='flex flex-col gap-2'>
              <label
                htmlFor='email'
                className='md:text-md text-neutral-25 text-sm font-semibold'
              >
                Email address
              </label>
              <div
                className='flex items-center gap-2 rounded-2xl border bg-black px-4 py-3'
                style={{ borderColor: border }}
              >
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='enter your email'
                  required
                  className="w-full bg-transparent font-['Poppins'] text-base leading-[30px] text-white placeholder:text-white/40 focus:outline-none"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className='flex flex-col gap-2'>
              <label
                htmlFor='message'
                className='md:text-md text-neutral-25 text-sm font-semibold'
              >
                Message
              </label>
              <div
                className='rounded-2xl border bg-black px-4 py-3'
                style={{ borderColor: border }}
              >
                <textarea
                  id='message'
                  name='message'
                  rows={6}
                  placeholder='Please write your message here...'
                  required
                  className="w-full resize-none bg-transparent font-['Poppins'] text-base leading-[30px] text-white placeholder:text-white/40 focus:outline-none"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <button
                type='submit'
                disabled={loading}
                className='bg-primary-200 h-12 w-full rounded-full font-bold text-black shadow-[0px_4px_40px_rgba(145,255,2,0.4)] transition-all hover:scale-105 lg:h-14'
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {ok && (
                <p className='mt-3 text-sm text-green-400'>
                  Thanks! Your message has been sent.
                </p>
              )}
              {ok === false && (
                <p className='mt-3 text-sm text-red-400'>
                  {error || 'Failed to send. Try again.'}
                </p>
              )}
            </motion.div>
          </motion.form>
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
      rel='noreferrer'
      className='grid h-12 w-12 place-items-center rounded-full border border-[#252B37] bg-black transition-colors hover:border-[#91FF02] focus-visible:ring-2 focus-visible:ring-[#91FF02] focus-visible:outline-none md:h-16 md:w-16'
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
