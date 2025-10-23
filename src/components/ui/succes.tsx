import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

/**
 * Section: Message Sent Popup
 * - Mengonversi style Figma menjadi section dengan kolom/grid yang kuat
 * - Menggunakan TailwindCSS + shadcn/ui Button
 * - Gambar "Frame 1618873597" diambil dari public/images (ubah src sesuai aset Anda)
 */
export default function MessageSentSection({
  title = 'Message Sent Successfully!',
  subtitle = 'Thank you for reaching out. I’ll get back to you as soon as possible',
  imageSrc = '/images/Frame1618873597.png', // letakkan file Anda di public/images
  onCta = () => {},
  ctaLabel = 'Back to Home',
}: {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  onCta?: () => void;
  ctaLabel?: string;
}) {
  return (
    <section className='relative w-full py-24 md:py-28'>
      {/* Grid kolom kuat untuk kestabilan layout */}
      <div className='container mx-auto grid grid-cols-1 gap-6 px-4 sm:grid-cols-12'>
        <div className='relative col-span-1 flex items-center justify-center sm:col-span-6 sm:col-start-4'>
          {/* Card/Pop Up */}
          <div
            className='relative flex h-[286px] w-[479px] max-w-full flex-col items-center gap-6 rounded-2xl border border-[#252B37] bg-black/100 px-8 pt-20 pb-8'
            role='dialog'
            aria-labelledby='msg-title'
            aria-describedby='msg-desc'
          >
            {/* Decorative/Illustration: Frame 1618873597 dari public/images */}
            <Image
              src={imageSrc}
              alt='Mail illustration'
              className='pointer-events-none absolute -top-40 left-1/2 h-[136px] w-[147.61px] -translate-x-1/2 select-none'
              aria-hidden
            />

            {/* Frame 1618873163 (copy deck) */}
            <div className='isolate flex w-full flex-col items-center gap-2'>
              <h2
                id='msg-title'
                className='w-full text-center text-[20px] leading-[34px] font-bold text-[#FDFDFD]'
              >
                {title}
              </h2>
              <p
                id='msg-desc'
                className='w-full text-center text-[16px] leading-[30px] text-[#A4A7AE]'
              >
                {subtitle}
              </p>
            </div>

            {/* CTA Button */}
            <Button
              onClick={onCta}
              className='mt-2 h-12 w-[361px] rounded-full bg-[#91FF02] text-sm leading-7 font-bold text-[#0A0D12] shadow-[0_4px_40px_rgba(145,255,2,0.4)] hover:opacity-90'
            >
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
CATATAN IMPLEMENTASI STYLE → TAILWIND
- Card (Pop Up):
  background: #000000 → bg-black
  border: 1px solid #252B37 → border border-[#252B37]
  border-radius: 16px → rounded-2xl
  padding: 80px 32px 32px → pt-20 px-8 pb-8
  gap: 24px → gap-6
  absolute positioning pada card diganti dengan grid center agar lebih responsif.

- Title:
  font-size 20px, line-height 34px → text-[20px] leading-[34px]
  color #FDFDFD

- Subtitle:
  font-size 16px, line-height 30px → text-[16px] leading-[30px]
  color #A4A7AE

- Illustration (Frame 1618873597):
  posisi absolute di atas card → class "absolute -top-40 left-1/2 -translate-x-1/2"
  ambil file dari public/images via prop imageSrc (default /images/Frame1618873597.png)

- Button:
  width 361px, height 48px, pill radius 9999 → w-[361px] h-12 rounded-full
  background #91FF02 + green shadow → bg-[#91FF02] shadow-[0_4px_40px_rgba(145,255,2,0.4)]
  text-sm bold, color #0A0D12

- Grid kolom kuat:
  container → grid 12 kolom agar section stabil di berbagai viewport.
  komponen card ditempatkan di tengah (sm:col-start-4 sm:col-span-6) untuk komposisi yang kokoh.
*/
