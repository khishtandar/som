import { useState } from 'react';
import { ChevronDown, Images, Instagram } from 'lucide-react';
import { INSTAGRAM_URL, RECITALS } from '../data/content';
import Lightbox from './Lightbox';
import SectionHeading from './SectionHeading';

const PREVIEW_COUNT = 8;

const Gallery = () => {
  const [year, setYear] = useState(RECITALS[0].year);
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const recital = RECITALS.find((r) => r.year === year) ?? RECITALS[0];
  const visible = expanded ? recital.photos : recital.photos.slice(0, PREVIEW_COUNT);

  const selectYear = (y: number) => {
    setYear(y);
    setExpanded(false);
  };

  return (
    <section id="gallery" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="On stage"
          title="Recital Gallery"
          subtitle="Moments from our student recitals over the years"
        />

        {/* Year tabs */}
        <div role="tablist" aria-label="Recital year" className="mb-10 flex flex-wrap justify-center gap-2">
          {RECITALS.map((r) => (
            <button
              key={r.year}
              type="button"
              role="tab"
              aria-selected={r.year === year}
              onClick={() => selectYear(r.year)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                r.year === year
                  ? 'bg-ink text-cream shadow-lg shadow-ink/20'
                  : 'bg-cream text-ink/70 hover:bg-cream-100 hover:text-ink'
              }`}
            >
              {r.year}
              <span className={`ml-2 text-xs ${r.year === year ? 'text-brass-300' : 'text-ink/40'}`}>
                {r.photos.length}
              </span>
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div key={year} className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {visible.map((photo, i) => (
            <button
              key={photo.url}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl bg-cream-100 animate-fade-up focus:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
              style={{ animationDelay: `${Math.min(i, 12) * 40}ms` }}
              aria-label={`Open ${photo.alt}`}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="w-full transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/20" />
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          {!expanded && recital.photos.length > PREVIEW_COUNT && (
            <button type="button" onClick={() => setExpanded(true)} className="btn-ghost text-ink hover:bg-ink hover:text-cream">
              Show all {recital.photos.length} photos
              <ChevronDown className="h-5 w-5" />
            </button>
          )}
          <button type="button" onClick={() => setOpenIndex(0)} className="btn-primary">
            <Images className="h-5 w-5" />
            View {year} slideshow
          </button>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-cream px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-2xl font-semibold text-ink">See more on Instagram</p>
            <p className="mt-1 text-ink/65">Lesson moments, student performances and recital news, as they happen.</p>
          </div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="instagram-btn flex-shrink-0 px-6 py-3.5">
            <Instagram className="h-5 w-5" />
            <span className="sm:hidden">Follow on Instagram</span>
            <span className="hidden sm:inline">Follow @saharazar_clarinet_sax_teacher</span>
          </a>
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          photos={recital.photos}
          index={openIndex}
          title={`Recital ${year}`}
          onChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
};

export default Gallery;
