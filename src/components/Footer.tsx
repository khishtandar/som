import { Instagram, Mail, Phone } from 'lucide-react';
import InstrumentsIcon from './InstrumentsIcon';
import { EMAIL, INSTAGRAM_URL, NAV_LINKS, PHONE_DISPLAY, PHONE_LINK, PROGRAMS } from '../data/content';

const Footer = () => (
  <footer className="bg-ink-950 px-6 pb-10 pt-16 text-cream">
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brass-400 text-ink">
              <InstrumentsIcon className="h-7 w-7" />
            </span>
            <span className="font-display text-xl font-semibold">Sahar Azar Music Studio</span>
          </div>
          <p className="mt-4 max-w-xs text-cream/55">Nurturing musical excellence through dedicated instruction</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-brass-300">Programs</h4>
          <ul className="mt-3 space-y-1 text-cream/60">
            {PROGRAMS.map((p) => (
              <li key={p.title}>
                <a href="#programs" className="inline-block py-2 transition hover:text-cream">
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-brass-300">Explore</h4>
          <ul className="mt-3 space-y-1 text-cream/60">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="inline-block py-2 transition hover:text-cream">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-brass-300">Connect</h4>
          <ul className="mt-3 space-y-1 text-cream/60">
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 py-2 transition hover:text-cream">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 py-2 transition hover:text-cream">
                <Mail className="h-4 w-4" /> Email
              </a>
            </li>
            <li>
              <a href={PHONE_LINK} className="flex items-center gap-2 py-2 transition hover:text-cream">
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-cream/40" suppressHydrationWarning>
        &copy; {new Date().getFullYear()} Sahar Azar Music Studio. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
