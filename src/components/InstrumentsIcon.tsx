import type { SVGProps } from 'react';

// Studio logo mark: a clarinet (left) and a saxophone (right), in the same 24x24 line style as the
// other icons. Each instrument is drawn upright in its own 24x24 space and placed with a transform.
const InstrumentsIcon = ({ strokeWidth = 1.4, ...props }: SVGProps<SVGSVGElement>) => (
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
    {/* clarinet */}
    <g transform="translate(4.9 12) rotate(-6) scale(.9) translate(-12 -12)">
      <path d="M11.15 1.1q.85-.35 1.7 0l.45 2.9h-2.6z" fill="currentColor" stroke="none" />
      <rect x="10.35" y="3.9" width="3.3" height="1.5" rx=".5" fill="currentColor" stroke="none" />
      <path d="M10.85 5.4V17.6M13.15 5.4V17.6" />
      <path d="M10.85 17.6c0 2-1.9 3.1-2.2 4.9h6.7c-.3-1.8-2.2-2.9-2.2-4.9" />
      <circle cx="12" cy="8" r=".7" fill="currentColor" stroke="none" />
      <circle cx="12" cy="10.8" r=".7" fill="currentColor" stroke="none" />
      <circle cx="12" cy="13.6" r=".7" fill="currentColor" stroke="none" />
    </g>
    {/* saxophone */}
    <g transform="translate(14.6 12.2) scale(.82) translate(-15 -12)">
      <path d="M9 2.4c2.2-.6 3.7.4 4 2.6" />
      <path d="M12.2 5.2h3l.4 11c0 1.3 1 2 1.9 2s1.5-.7 1.5-2V12.6" />
      <path d="M12.2 5.2l-.4 11.3c0 3.4 2.5 5.5 5.2 5.5s4.9-2 4.9-5.4V12.6" />
      <path d="M18 12.6l-1.1-2.4h7l-1.1 2.4" />
      <circle cx="14.6" cy="8.2" r=".75" fill="currentColor" stroke="none" />
      <circle cx="14.7" cy="11" r=".75" fill="currentColor" stroke="none" />
      <circle cx="14.8" cy="13.8" r=".75" fill="currentColor" stroke="none" />
    </g>
  </svg>
);

export default InstrumentsIcon;
