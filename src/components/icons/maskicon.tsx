// components/icons/MaskIcon.tsx
export default function MaskIcon({
  src,
  className,
  title,
}: {
  src: string;
  className?: string;
  title?: string;
}) {
  return (
    <span
      aria-hidden
      title={title}
      className={[
        'inline-block bg-current',
        '[mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]',
        '[-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]',
        className,
      ].join(' ')}
      style={{ maskImage: `url(${src})`, WebkitMaskImage: `url(${src})` }}
    />
  );
}
