import { Check } from 'lucide-react';
import { PROGRAMS } from '../data/content';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const Programs = () => (
  <section id="programs" className="bg-white px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="What I teach"
        title="Our Programs"
        subtitle="Discover our comprehensive music education programs designed to nurture your musical journey"
      />

      <div className="grid gap-8 md:grid-cols-2">
        {PROGRAMS.map((program, i) => (
          <Reveal key={program.title} delay={(i % 2) * 120}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-cream ring-1 ring-ink/5 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink/10">
              <div className={`relative h-60 overflow-hidden ${program.isLogo ? 'bg-white' : ''}`}>
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className={`h-full w-full transition duration-700 group-hover:scale-105 ${
                    program.isLogo ? 'object-contain p-10' : 'object-cover'
                  }`}
                />
                {!program.isLogo && (
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                )}
                <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold tracking-wider text-ink backdrop-blur">
                  0{i + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-2xl font-semibold text-ink">{program.title}</h3>
                <ul className="mt-5 space-y-3">
                  {program.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-ink/75">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brass-200 text-brass-700">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Programs;
