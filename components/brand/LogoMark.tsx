type LogoMarkProps = {
  idPrefix: string;
  size?: number;
  className?: string;
};

export function LogoMark({ idPrefix, size = 44, className }: LogoMarkProps) {
  const gold = `${idPrefix}-gold`;
  const sky = `${idPrefix}-sky`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      focusable="false"
    >
      <defs>
        <linearGradient id={gold} x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f3d27a" />
          <stop offset="0.55" stopColor="#d4a843" />
          <stop offset="1" stopColor="#a87914" />
        </linearGradient>
        <radialGradient id={sky} cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#2a2f78" />
          <stop offset="1" stopColor="#0b0f2c" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill={`url(#${sky})`} />
      <circle cx="32" cy="32" r="28.5" fill="none" stroke={`url(#${gold})`} strokeWidth="2" />
      <circle
        cx="32"
        cy="32"
        r="22.5"
        fill="none"
        stroke={`url(#${gold})`}
        strokeWidth="0.75"
        strokeDasharray="1.5 3.4"
      />
      <path
        d="M32 12.5l3.3 13.2L48.5 29l-13.2 3.3L32 45.5l-3.3-13.2L15.5 29l13.2-3.3z"
        fill={`url(#${gold})`}
        transform="translate(0 3)"
      />
      <path
        d="M41.5 17.5a8 8 0 1 0 5.2 10.4 6.4 6.4 0 1 1-5.2-10.4z"
        fill="#f6e7b8"
        opacity="0.9"
      />
      <circle cx="20" cy="45" r="1.3" fill="#f6e7b8" />
      <circle cx="46" cy="47" r="1" fill="#f6e7b8" />
      <circle cx="17" cy="21" r="0.9" fill="#f6e7b8" />
    </svg>
  );
}
