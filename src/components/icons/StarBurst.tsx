export default function StarBurst32(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      {...props}
    >
      <g clipPath='url(#clip0_23763_265)'>
        <path
          d='M16.017 0L18.4001 8.66546L25.4215 3.05573L22.2561 11.467L31.2338 11.0557L23.729 16L31.2338 20.9443L22.2561 20.533L25.4215 28.9443L18.4001 23.3346L16.017 32L13.6338 23.3346L6.61239 28.9443L9.77781 20.533L0.800049 20.9443L8.30496 16L0.800049 11.0557L9.77781 11.467L6.61239 3.05573L13.6338 8.66546L16.017 0Z'
          /* gunakan currentColor agar bisa diatur via class 'text-[#91FF02]' */
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_23763_265'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}
