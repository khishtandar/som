import { CalendarDays, Mail } from 'lucide-react';
import { BOOKING_URL } from '../data/content';
import Reveal from './Reveal';

const ConsultationSection = () => (
  <section className="bg-cream px-6 py-24">
    <Reveal>
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 text-center shadow-2xl shadow-ink/20 sm:px-16">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brass-400/20 blur-3xl" />
        <div className="relative">
          <span className="eyebrow text-brass-300">Your first lesson is on us</span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-cream sm:text-5xl">
            Start Your Musical Journey Today
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream/70">
            Book a free 30-minute trial lesson or reach out through our contact form.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4">
              <CalendarDays className="h-5 w-5" />
              Book a free trial lesson
            </a>
            <a href="#contact" className="btn-ghost px-8 py-4 text-cream hover:bg-white/10">
              <Mail className="h-5 w-5" />
              Contact me
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);

export default ConsultationSection;
