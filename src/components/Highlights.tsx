import { BookOpen, Piano, Users } from 'lucide-react';
import Reveal from './Reveal';

const STATS = [
  { value: '17+', label: 'Years in music' },
  { value: '10+', label: 'Years teaching' },
  { value: 'RCM', label: 'Verified teacher' },
  { value: 'Online', label: '& in-person lessons' },
];

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Comprehensive Education',
    text: 'Expert instruction in performance, theory, and RCM examination preparation',
  },
  {
    icon: Users,
    title: 'Personalized Approach',
    text: 'Tailored instruction to meet your individual goals and learning style',
  },
  {
    icon: Piano,
    title: 'Performance Opportunities',
    text: 'Regular recitals and concert performances to build confidence',
  },
];

const Highlights = () => (
  <section className="relative bg-cream px-6 pb-24">
    {/* Stats card overlapping the hero */}
    <div className="relative z-10 mx-auto -mt-14 max-w-5xl">
      <div className="grid grid-cols-2 divide-ink/10 overflow-hidden rounded-3xl bg-white shadow-xl shadow-ink/5 ring-1 ring-ink/5 md:grid-cols-4 md:divide-x">
        {STATS.map((stat) => (
          <div key={stat.label} className="px-6 py-7 text-center">
            <p className="font-display text-3xl font-semibold text-ink sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-ink/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-3">
      {FEATURES.map(({ icon: Icon, title, text }, i) => (
        <Reveal key={title} delay={i * 120}>
          <div className="group h-full rounded-3xl border border-ink/5 bg-white/60 p-8 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-ink/5">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-brass-300 transition group-hover:bg-brass-400 group-hover:text-ink">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-6 text-xl font-semibold text-ink">{title}</h3>
            <p className="mt-2 leading-relaxed text-ink/65">{text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Highlights;
