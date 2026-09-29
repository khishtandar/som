import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';
import SectionHeading from './SectionHeading';

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();

const Testimonials = () => (
  <section id="testimonials" className="relative overflow-hidden bg-ink py-24">
    <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-brass-500/10 blur-3xl" />
    <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brass-300/10 blur-3xl" />

    <div className="relative px-6">
      <SectionHeading
        dark
        eyebrow="Kind words"
        title="Testimonials"
        subtitle="What our students and parents say about their learning experience"
      />
      <p className="-mt-8 mb-6 text-center text-sm text-cream/50 sm:hidden">Swipe to read more →</p>
    </div>

    {/* Desktop: the list is rendered twice so the marquee loops seamlessly (the copy is hidden from screen
        readers). Phones: index.css turns this into a swipeable carousel and hides the copy. */}
    <div className="marquee relative">
      <div className="marquee-track flex w-max animate-marquee gap-4 py-4 sm:gap-6">
        {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
          <figure
            key={i}
            aria-hidden={i >= TESTIMONIALS.length}
            className="flex w-[82vw] max-w-[340px] flex-shrink-0 flex-col rounded-3xl border border-white/10 bg-ink-800/80 p-6 sm:w-[420px] sm:max-w-none sm:p-8"
          >
            <div className="flex items-center justify-between">
              <Quote className="h-9 w-9 text-brass-400" />
              <div className="flex gap-0.5 text-brass-300" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="mt-6 flex-1 leading-relaxed text-cream/80">{t.text}</blockquote>
            <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brass-400 font-semibold text-ink">
                {initials(t.author)}
              </span>
              <span>
                <span className="block font-semibold text-cream">{t.author}</span>
                <span className="block text-sm text-cream/55">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
