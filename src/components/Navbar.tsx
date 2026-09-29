import { useEffect, useState } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import InstrumentsIcon from './InstrumentsIcon';
import { BOOKING_URL, INSTAGRAM_URL, NAV_LINKS } from '../data/content';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Over the hero the bar is transparent with light text; once scrolled (or the menu is open) it turns solid.
  const solid = isScrolled || isMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-cream/90 shadow-[0_1px_0_rgba(23,22,44,0.08)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="group flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              solid ? 'bg-ink text-brass-300' : 'bg-white/15 text-brass-200 ring-1 ring-white/30'
            }`}
          >
            <InstrumentsIcon className="h-7 w-7" />
          </span>
          <span className="leading-tight">
            <span className={`block font-display text-lg font-semibold ${solid ? 'text-ink' : 'text-white'}`}>
              Sahar Azar
            </span>
            <span
              className={`block text-[11px] font-medium uppercase tracking-[0.22em] ${
                solid ? 'text-brass-600' : 'text-brass-200'
              }`}
            >
              Music Studio
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brass-400 after:transition-transform hover:after:scale-x-100 ${
                solid ? 'text-ink/75 hover:text-ink' : 'text-white/85 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Sahar on Instagram"
            className="instagram-btn px-4 py-2.5 text-sm"
          >
            <Instagram className="h-5 w-5" />
            <span className="xl:hidden">Follow</span>
            <span className="hidden xl:inline">Follow on Instagram</span>
          </a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2.5 text-sm">
            Book a free trial
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Sahar on Instagram"
            className="instagram-btn px-3.5 py-2 text-sm"
          >
            <Instagram className="h-5 w-5" />
            Follow
          </a>
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className={`rounded-full p-2 transition-colors ${solid ? 'text-ink' : 'text-white'}`}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-ink/10 bg-cream/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 font-medium text-ink/80 transition-colors hover:bg-cream-100 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-btn mt-2 py-3"
            >
              <Instagram className="h-5 w-5" />
              Follow Sahar on Instagram
            </a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2">
              Book a free trial lesson
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
