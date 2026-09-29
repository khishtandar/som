import type { SVGProps } from 'react';

// Lucide has no clarinet, so this is a hand-drawn one in the same 24x24 line style.
// Drawn upright (mouthpiece at the top, bell at the bottom), then tilted and scaled to fill the box.
const ClarinetIcon = ({ strokeWidth = 1.4, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <g transform="translate(13.3 10.95) rotate(40) scale(1.15) translate(-12 -12)">
      {/* mouthpiece */}
      <path d="M11.15 1.1q.85-.35 1.7 0l.45 2.9h-2.6z" fill="currentColor" stroke="none" />
      {/* barrel ring */}
      <rect x="10.35" y="3.9" width="3.3" height="1.5" rx=".5" fill="currentColor" stroke="none" />
      {/* body */}
      <path d="M10.85 5.4V17.6M13.15 5.4V17.6" />
      {/* bell */}
      <path d="M10.85 17.6c0 2-1.9 3.1-2.2 4.9h6.7c-.3-1.8-2.2-2.9-2.2-4.9" />
      {/* tone holes */}
      <circle cx="12" cy="8" r=".7" fill="currentColor" stroke="none" />
      <circle cx="12" cy="10.8" r=".7" fill="currentColor" stroke="none" />
      <circle cx="12" cy="13.6" r=".7" fill="currentColor" stroke="none" />
    </g>
  </svg>
);

export default ClarinetIcon;
