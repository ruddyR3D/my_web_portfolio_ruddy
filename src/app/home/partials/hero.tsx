'use client';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeroSection: FC = () => {
  return (
    <section
      id='home'
      className='custom-container relative isolate mx-auto max-w-[1440px] overflow-hidden border-b-0 bg-black md:border-b md:border-[#252B37] md:px-33'
    >
      {/* Decorative squares (mobile spec) */}
      <div className='absolute top-[789px] left-0 hidden h-[92px] w-[138px] md:block'>
        <Image src='/icons/rectangle.svg' alt='icon' width='138' height='138' />
      </div>
      {/* Line 118 */}
      <div className='absolute top-[-83px] left-[197px] h-[563px] w-px bg-[#252B37] md:top-0 md:left-[375px] md:h-[881px]' />
      {/* Line 117 */}
      <div className='absolute top-[1px] left-[296px] z-0 h-[482px] w-px translate-y-32 bg-[#252B37] md:top-0 md:left-[707px] md:h-[881px] md:translate-y-0' />

      <div className='relative grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-0'>
        {/* Left: Text */}
        <div className='relative z-20 flex translate-y-45 flex-col gap-4 bg-black md:translate-y-40 md:bg-transparent'>
          <div className='flex items-center gap-2'>
            <span className='h-px w-[21px] bg-white md:w-[114px]' />
            <p className='text-md text-neutral-25 font-medium md:text-xl'>
              Hi, I am R3D Frontend Developer
            </p>
          </div>

          <h1 className='text-display-lg md:text-display-2xl font-extrabold tracking-[-0.01em] text-white sm:text-[44px] sm:leading-[56px] lg:text-[64px] lg:leading-[76px]'>
            BUILDING FAST & <span className='text-[#91FF02]'>INTERACTIVE</span>{' '}
            WEB EXPERIENCES.
          </h1>

          <p className='max-w-[42ch] text-lg font-medium text-[#A4A7AE] md:text-xl'>
            Bridging creativity and functionality to deliver stunning,
            user-friendly web applications
          </p>

          <div className='mb-10 pt-5 md:pt-15 md:pb-0'>
            <Button asChild className='flex h-11 w-full px-19 md:h-12 md:w-fit'>
              <Link href='#contact' className='text-sm font-bold'>
                HIRE ME
              </Link>
            </Button>
          </div>
        </div>

        {/* Right: Profile / Card */}
        <div className='relative z-10 h-[513px] w-full max-w-[661px] place-self-center sm:h-[620px] lg:h-[881px] lg:translate-x-37'>
          {/* Green backing block (desktop spec) */}
          <div className='absolute top-0 right-0 h-full w-[187px] bg-[#91FF02] sm:w-[215px] lg:block lg:w-[316px]' />

          {/* Photo */}
          <div className='absolute top-0 left-0 h-full w-full'>
            <Image
              src='/images/pict.png'
              alt='Portrait of a young man'
              fill
              className='-rotate-[1.45deg] object-contain mix-blend-luminosity'
              priority
            />
            {/* Gradient overlay */}
            <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_-92.59%,#000_88.93%)]' />
          </div>

          {/* Rating card */}
          <div className='absolute bottom-6 left-1/2 z-20 w-[349px] -translate-x-1/2 rounded-2xl border border-[#252B37] bg-black p-4 sm:bottom-6 lg:bottom-16 lg:w-[316px] lg:rounded-[20px] lg:p-5'>
            <p className='text-[24px] leading-[36px] font-bold text-white lg:text-[40px] lg:leading-[56px]'>
              5.0
            </p>
            <div className='mt-1 flex items-center gap-1 md:gap-1.5'>
              {Array.from({ length: 5 }).map((_, i) => (
                <Image
                  key={i}
                  src='/icons/star.svg'
                  alt=''
                  aria-hidden
                  width={24}
                  height={24}
                  className='h-6 w-6 md:h-8 md:w-8'
                />
              ))}
            </div>
            <p className='mt-2 text-[16px] leading-[30px] font-semibold text-white/90'>
              Many Client Trust with me
            </p>
          </div>

          {/* Decorative squares (mobile spec) */}
          <div className='absolute top-[242px] left-[-21px] block h-[69px] w-[103.5px] md:hidden'>
            <Image
              src='/icons/rectangle.svg'
              alt='icon'
              width='103'
              height='103'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
