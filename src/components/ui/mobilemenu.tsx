// 'use client';
// import { useEffect, useRef } from 'react';
// import Image from 'next/image';

// type Item = { href: string; label: string };

// export default function MobileMenu({
//   id,
//   open,
//   onClose,
//   title,
//   items,
// }: {
//   id?: string;
//   open: boolean;
//   onClose: () => void;
//   title: string;
//   items: Item[];
// }) {
//   const closeBtnRef = useRef<HTMLButtonElement>(null);

//   useEffect(() => {
//     if (!open) return;
//     const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
//     const prev = document.body.style.overflow;
//     document.addEventListener('keydown', onKey);
//     document.body.style.overflow = 'hidden';
//     closeBtnRef.current?.focus();
//     return () => {
//       document.removeEventListener('keydown', onKey);
//       document.body.style.overflow = prev;
//     };
//   }, [open, onClose]);

//   if (!open) return null;

//   return (
//     <div id={id} className='pointer-events-auto fixed inset-0 z-[60] md:hidden'>
//       {/* overlay */}
//       <button
//         aria-label='Close menu by overlay'
//         onClick={onClose}
//         className='absolute inset-0 z-40 px-4'
//       />

//       {/* card */}
//       <div
//         role='dialog'
//         aria-modal='true'
//         aria-label={`${title} menu`}
//         className='w- border- bg-primary-300 absolute inset-x-4 top-5 z-50 mx-auto h-[812px]'
//       >
//         <div className='mx-auto flex h-[34px] w-full items-center justify-between'>
//           <div className='text-[20px] leading-[34px] font-bold text-white'>
//             {title}
//           </div>
//           <button
//             ref={closeBtnRef}
//             onClick={onClose}
//             aria-label='Close menu'
//             className='grid h-8 w-8 place-items-center rounded-full text-white'
//           >
//             <Image src='/icons/xclose.svg' alt='mouse' width={24} height={24} />
//           </button>
//         </div>

//         <nav className='mx-auto mt-4 flex w-full flex-col'>
//           {items.map((it) => (
//             <a
//               key={it.href}
//               href={it.href}
//               onClick={onClose}
//               className='flex h-[46px] items-center py-2 text-[16px] leading-[30px] font-medium tracking-[-0.03em] text-white ring-pink-400/40 outline-none focus:ring'
//             >
//               {it.label}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useEffect, useRef } from 'react';
// import Image from 'next/image';

// type Item = { href: string; label: string };

// export default function MobileMenu({
//   id,
//   open,
//   onClose,
//   title,
//   items,
// }: {
//   id?: string;
//   open: boolean;
//   onClose: () => void;
//   title: string;
//   items: Item[];
// }) {
//   const closeBtnRef = useRef<HTMLButtonElement>(null);
//   const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

//   useEffect(() => {
//     if (!open) return;
//     const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
//     const prev = document.body.style.overflow;
//     document.addEventListener('keydown', onKey);
//     document.body.style.overflow = 'hidden';
//     // fokus ke tombol close dulu (sesuai kode awal), lalu ke link pertama kalau perlu
//     closeBtnRef.current?.focus();
//     return () => {
//       document.removeEventListener('keydown', onKey);
//       document.body.style.overflow = prev;
//     };
//   }, [open, onClose]);

//   // smooth scroll + tutup
//   const handleItemClick = (
//     e: React.MouseEvent<HTMLAnchorElement>,
//     href: string
//   ) => {
//     if (href.startsWith('#')) {
//       e.preventDefault();
//       const el = document.querySelector(href);
//       if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//     onClose();
//   };

//   if (!open) return null;

//   return (
//     <div id={id} className='pointer-events-auto fixed inset-0 z-[60] md:hidden'>
//       {/* overlay */}
//       <button
//         aria-label='Close menu by overlay'
//         onClick={onClose}
//         className='absolute inset-0 z-40'
//       />

//       {/* PANEL / CARD — mengikuti 393x852 (maks) */}
//       <div
//         role='dialog'
//         aria-modal='true'
//         aria-label={`${title} menu`}
//         className='absolute inset-x-0 top-0 z-50 mx-auto max-h-[852px] w-full border border-[#252B37]/0 bg-black'
//       >
//         {/* Header / Mobile */}
//         <div
//           className='box-border flex w-full flex-row items-center justify-between border-b border-[#252B37] px-4'
//           /* spek: padding: 64px 16px; height: 80px */
//           style={{ paddingTop: 64, paddingBottom: 64, height: 80 }}
//         >
//           {/* Frame 1618873594 */}
//           <div className='flex flex-row items-center gap-[9px]'>
//             {/* Line 5 (24px) */}
//             <span className='block w-6 border-t border-white' />
//             {/* Title hijau */}
//             <span
//               className='text-[16px] leading-[30px] font-bold'
//               style={{
//                 color: '#91FF02',
//                 fontFamily: 'Red Hat Display, sans-serif',
//               }}
//             >
//               {title}
//             </span>
//           </div>

//           {/* Close 24x24 dengan border 2px & icon di tengah */}
//           <button
//             ref={closeBtnRef}
//             onClick={onClose}
//             aria-label='Close menu'
//             className='relative inline-flex h-6 w-6 items-center justify-center'
//           >
//             <Image src='/icons/xclose.svg' alt='Close' width={24} height={24} />
//           </button>
//         </div>

//         {/* Body */}
//         <div className='relative'>
//           {/* Frame 1618873596 — kolom kiri 75x356, top:96px, left:16px, gap:16 */}
//           <div
//             className='absolute top-24 left-4 flex flex-col items-start justify-center gap-4'
//             style={{ width: 75, height: 356 }}
//           >
//             {items.map((it, i) => (
//               <a
//                 key={it.href}
//                 ref={i === 0 ? firstLinkRef : undefined}
//                 href={it.href}
//                 onClick={(e) => handleItemClick(e, it.href)}
//                 className='hover:text-primary-200 inline-flex h-[46px] min-w-[44px] items-center justify-center px-2 text-[16px] leading-[30px] font-normal text-white outline-none focus:ring focus:ring-pink-400/40'
//               >
//                 {it.label}
//               </a>
//             ))}
//           </div>

//           {/* spacer agar konten di bawah header terisi penuh */}
//           <div className='h-[calc(100vh-80px)] w-full' />
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';
import { useEffect, useRef, MouseEvent } from 'react';

type Item = { href: string; label: string };

export default function MobileMenuDialog({
  id,
  open,
  onClose,
  title,
  items,
}: {
  id?: string;
  open: boolean;
  onClose: () => void;
  title: string;
  items: Item[];
}) {
  const dlgRef = useRef<HTMLDialogElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // sinkronkan state -> dialog.showModal()/close()
  useEffect(() => {
    const dlg = dlgRef.current;
    if (!dlg) return;

    const onCancel = (e: Event) => {
      e.preventDefault(); // kontrol via state
      onClose();
    };
    const onCloseEvt = () => {
      previouslyFocused.current?.focus?.();
    };

    dlg.addEventListener('cancel', onCancel);
    dlg.addEventListener('close', onCloseEvt);

    if (open) {
      previouslyFocused.current =
        (document.activeElement as HTMLElement) ?? null;
      if (!dlg.open) dlg.showModal();

      // element foccussable pertama
      const focusFirst = () => {
        const firstFocusable = dlg.querySelector<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      };
      // small delay for node ready
      setTimeout(focusFirst, 0);
    } else {
      if (dlg.open) dlg.close();
    }

    return () => {
      dlg.removeEventListener('cancel', onCancel);
      dlg.removeEventListener('close', onCloseEvt);
    };
  }, [open, onClose]);

  // close automatic view >= 1024px `
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 800px)');

    // sinc for first time
    if (mql.matches && open) onClose();

    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches && open) onClose();
    };

    // modern browser
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    }

    // fallback (method deprecated )
    if (typeof mql.addListener === 'function') {
      mql.addListener(onChange);
      return () => mql.removeListener(onChange);
    }

    return;
  }, [open, onClose]);

  // click backdrop
  const onDialogClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === dlgRef.current) onClose();
  };

  return (
    <dialog
      id={id}
      ref={dlgRef}
      onClick={onDialogClick}
      aria-labelledby='mobilemenu-title'
      className='m-0 h-dvh w-full max-w-none bg-transparent p-0 text-white open:animate-[fadeIn_200ms_ease-out]'
    >
      {/* wrapper right panel */}
      <div className='flex h-full w-full justify-end'>
        {/* Panel (max 393px) */}
        <aside
          role='document'
          className='h-full w-full translate-x-0 border-l border-[#252B37] bg-black transition-transform duration-300 will-change-transform data-[state=closed]:translate-x-full'
          data-state={open ? 'open' : 'closed'}
        >
          {/* Header */}
          <header className='box-border flex h-20 w-full items-center justify-between border-b border-[#252B37] px-4'>
            <div className='flex items-center gap-2'>
              <span className='h-px w-6 bg-white/90' />
              <h2
                id='mobilemenu-title'
                className='text-[16px] leading-[30px] font-bold'
                style={{ color: '#91FF02' }}
              >
                {title}
              </h2>
            </div>

            <button
              onClick={onClose}
              aria-label='Close'
              className='relative inline-flex h-6 w-6 items-center justify-center p-0'
            >
              {/* icon X */}
              <span className='absolute top-1/2 left-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white' />
              <span className='absolute top-1/2 left-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white' />
            </button>
          </header>

          {/* Menu */}
          <nav className='px-4 py-6'>
            <ul className='flex flex-col gap-4'>
              {items.map((it) => (
                <li key={it.label}>
                  <a
                    href={it.href}
                    onClick={onClose}
                    className={[
                      'flex h-11 items-center px-0 text-[16px] leading-[30px]',
                      'text-white/90 transition-colors',
                      'hover:text-[#91FF02] hover:underline hover:decoration-[#91FF02] hover:underline-offset-4',
                      'focus:outline-none focus-visible:ring-0',
                    ].join(' ')}
                  >
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </dialog>
  );
}
