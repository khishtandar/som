import { useCallback, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Photo } from '../data/content';

interface LightboxProps {
  photos: Photo[];
  index: number;
  title: string;
  onChange: (index: number) => void;
  onClose: () => void;
}

const Lightbox = ({ photos, index, title, onChange, onClose }: LightboxProps) => {
  const touchStartX = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const step = useCallback(
    (delta: number) => onChange((index + delta + photos.length) % photos.length),
    [index, photos.length, onChange]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [step, onClose]);

  // Lock page scroll while open and put focus on the close button.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  // Preload the neighbours so arrowing through feels instant.
  useEffect(() => {
    [index + 1, index - 1].forEach((i) => {
      const img = new Image();
      img.src = photos[(i + photos.length) % photos.length].url;
    });
  }, [index, photos]);

  const photo = photos[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photo viewer`}
      className="fixed inset-0 z-[60] flex flex-col bg-ink-950/95 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
        touchStartX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-6 py-5 text-cream">
        <p className="font-display text-lg">
          {title}
          <span className="ml-3 text-sm text-cream/50">
            {index + 1} / {photos.length}
          </span>
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="rounded-full p-2 text-cream/80 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-7 w-7" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-20">
        <img
          key={photo.url}
          src={photo.url}
          alt={photo.alt}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full rounded-lg object-contain shadow-2xl animate-fade-up"
        />
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            step(-1);
          }}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-brass-400 hover:text-ink sm:left-6"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            step(1);
          }}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-brass-400 hover:text-ink sm:right-6"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
