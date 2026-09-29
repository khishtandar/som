import { useRef, useState } from 'react';
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Mail, Sparkles } from 'lucide-react';
import { BOOKING_URL, LATEST_RECITAL_YEAR, LOCATION, SLIDES } from '../data/content';

const SLIDE_MS = 7000;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Slides advance when the active progress bar finishes filling, so hover-pause
  // and reduced-motion (no animation, no autoplay) come for free.
  const go = (step: number) => setCurrent((i) => (i + step + SLIDES.length) % SLIDES.length);
  const slide = SLIDES[current];

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[92svh] flex-col overflow-hidden bg-ink-950 sm:h-[92svh] sm:min-h-[640px] sm:max-h-[960px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchStartX.current = null;
      }}
    >
      {/* Crossfading background photos */}
      {SLIDES.map((s, i) => (
        <div
          key={s.url}
          aria-hidden="true"
          className={`absolute inset-0 -z-20 transition-opacity duration-[1400ms] ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={s.url}
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            className={`h-full w-full object-cover ${i === current ? 'animate-kenburns' : ''}`}
            style={{ objectPosition: s.position ?? 'center' }}
          />
        </div>
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/95 via-ink-950/70 to-ink-950/20" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-ink-950/80 to-transparent" />

      <div className="mx-auto flex w-full max-w-6xl flex-1 items-center px-6 pb-8 pt-28 sm:pt-20">
        <div className="max-w-2xl">
          <h1 className="eyebrow font-sans text-brass-300 animate-fade-up">
            <span className="h-px w-8 bg-current" />
            Clarinet &amp; Saxophone Lessons · {LOCATION}
          </h1>

          {/* Fixed min-height so the buttons don't jump when a slide's text is longer */}
          <div key={current} className="mt-5 min-h-[14.5rem] sm:mt-6 sm:min-h-[15rem]">
            <p className="font-display text-[2rem] font-semibold leading-[1.08] tracking-tight text-white animate-fade-up sm:text-6xl lg:text-7xl">
              {slide.title}
            </p>
            <p
              className="mt-4 max-w-xl text-base leading-relaxed text-cream/80 animate-fade-up sm:mt-6 sm:text-xl"
              style={{ animationDelay: '150ms' }}
            >
              {slide.description}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-4">
              <CalendarDays className="h-5 w-5" />
              Book a free 30-min trial
            </a>
            <a href="#contact" className="btn-ghost px-7 py-4 text-white hover:bg-white/10">
              <Mail className="h-5 w-5" />
              Contact me
            </a>
          </div>
        </div>
      </div>

      {/* Slide controls: in normal flow (not overlaid) so they never cover the buttons on short phones.
          The bottom padding leaves room for the stats card that overlaps the hero. */}
      <div className="pb-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6">
          <div className="flex items-center">
            {SLIDES.map((s, i) => (
              <button
                key={s.url}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Show slide ${i + 1}: ${s.title}`}
                aria-current={i === current}
                className="flex h-11 w-8 items-center px-1 sm:w-14"
              >
                <span className="relative h-1 w-full overflow-hidden rounded-full bg-white/25">
                  {i === current ? (
                    <span
                      key={`active-${current}`}
                      className="hero-progress absolute inset-y-0 left-0 rounded-full bg-brass-300"
                      style={{ animationDuration: `${SLIDE_MS}ms`, animationPlayState: paused ? 'paused' : 'running' }}
                      onAnimationEnd={() => go(1)}
                    />
                  ) : (
                    <span
                      className={`absolute inset-y-0 left-0 rounded-full bg-brass-300/60 ${i < current ? 'w-full' : 'w-0'}`}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
          {/* Phones use swipe + the dots instead */}
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="rounded-full border border-white/30 p-3 text-white transition hover:border-brass-300 hover:text-brass-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              className="rounded-full border border-white/30 p-3 text-white transition hover:border-brass-300 hover:text-brass-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* New-recital pill */}
      <a
        href="#gallery"
        className="absolute right-6 top-28 hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur transition hover:bg-white/20 md:inline-flex"
      >
        <Sparkles className="h-4 w-4 text-brass-300" />
        New: {LATEST_RECITAL_YEAR} recital photos
        <ArrowRight className="h-4 w-4" />
      </a>
    </section>
  );
};

export default Hero;
