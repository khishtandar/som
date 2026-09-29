import { useState } from 'react';
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { BOOKING_URL, LATEST_RECITAL_YEAR, LOCATION, SLIDES } from '../data/content';

const SLIDE_MS = 7000;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Slides advance when the active progress bar finishes filling, so hover-pause
  // and reduced-motion (no animation, no autoplay) come for free.
  const go = (step: number) => setCurrent((i) => (i + step + SLIDES.length) % SLIDES.length);
  const slide = SLIDES[current];

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-ink-950 h-[92svh] max-h-[960px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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

      <div className="mx-auto w-full max-w-6xl px-6 pt-20">
        <div className="max-w-2xl">
          <h1 className="eyebrow font-sans text-brass-300 animate-fade-up">
            <span className="h-px w-8 bg-current" />
            Clarinet &amp; Saxophone Lessons · {LOCATION}
          </h1>

          <div key={current} className="mt-6 min-h-[13rem] sm:min-h-[15rem]">
            <p className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white animate-fade-up sm:text-6xl lg:text-7xl">
              {slide.title}
            </p>
            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80 animate-fade-up sm:text-xl"
              style={{ animationDelay: '150ms' }}
            >
              {slide.description}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-4">
              <CalendarDays className="h-5 w-5" />
              Book a free 30-min trial
            </a>
            <a href="#programs" className="btn-ghost px-7 py-4 text-white hover:bg-white/10">
              Explore programs
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute inset-x-0 bottom-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
          <div className="flex items-center gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.url}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Show slide ${i + 1}: ${s.title}`}
                aria-current={i === current}
                className="group relative h-1 w-8 overflow-hidden rounded-full bg-white/25 sm:w-12"
              >
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
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="rounded-full border border-white/30 p-2.5 text-white transition hover:border-brass-300 hover:text-brass-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              className="rounded-full border border-white/30 p-2.5 text-white transition hover:border-brass-300 hover:text-brass-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* New-recital pill */}
      <a
        href="#gallery"
        className="absolute right-6 top-28 hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur transition hover:bg-white/20 md:inline-flex"
      >
        <Sparkles className="h-4 w-4 text-brass-300" />
        New: {LATEST_RECITAL_YEAR} recital photos
        <ArrowRight className="h-4 w-4" />
      </a>
    </section>
  );
};

export default Hero;
