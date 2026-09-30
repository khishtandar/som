import { useState } from 'react';
import { CalendarDays, Expand, MapPin, Monitor, Sparkles } from 'lucide-react';
import { BOOKING_URL, LOCATION, STUDIO_PHOTOS } from '../data/content';
import Lightbox from './Lightbox';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const FACTS = [
  { icon: MapPin, text: LOCATION },
  { icon: Monitor, text: 'In person or online' },
  { icon: Sparkles, text: 'Free 30-minute trial' },
];

const Studio = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const photoButton = (index: number, className: string) => (
    <button
      type="button"
      onClick={() => setOpenIndex(index)}
      aria-label={`Open ${STUDIO_PHOTOS[index].alt}`}
      className={`group relative block w-full overflow-hidden rounded-3xl bg-ink-800 shadow-2xl shadow-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 ${className}`}
    >
      <img
        src={STUDIO_PHOTOS[index].url}
        alt={STUDIO_PHOTOS[index].alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink/60 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
        <Expand className="h-5 w-5" />
      </span>
    </button>
  );

  return (
    <section id="studio" className="relative overflow-hidden bg-ink px-6 py-24">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brass-400/15 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          dark
          eyebrow="Where lessons happen"
          title="The Studio"
          subtitle="Lessons take place in Sahar's studio in Aurora, Ontario, or online for students who prefer to learn from home."
        />

        {/* Widths are in the photos' aspect ratio (4:3 and 3:4) so both show at the same height on desktop */}
        <Reveal>
          <div className="grid gap-4 md:grid-cols-[16fr_9fr] md:gap-6">
            {photoButton(0, 'aspect-[4/3]')}
            {photoButton(1, 'aspect-[3/4] md:aspect-auto')}
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
            {FACTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-cream/85 ring-1 ring-white/10">
                <Icon className="h-4 w-4 text-brass-300" />
                {text}
              </li>
            ))}
          </ul>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary flex-shrink-0">
            <CalendarDays className="h-5 w-5" />
            Book a free trial lesson
          </a>
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          photos={STUDIO_PHOTOS}
          index={openIndex}
          title="The Studio"
          onChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
};

export default Studio;
