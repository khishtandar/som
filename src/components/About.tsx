import { ArrowUpRight, Award, GraduationCap, Trophy } from 'lucide-react';
import ClarinetIcon from './ClarinetIcon';
import { ENSEMBLES, MENTORS, RCM_PROFILE_URL } from '../data/content';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const MILESTONES = [
  { icon: Trophy, title: '1st Place, Clarinet Performance', detail: 'Fajr Music Festival, 2002' },
  { icon: ClarinetIcon, title: 'Assistant Principal Clarinetist', detail: 'Tehran Symphony Orchestra, 2 years' },
  { icon: GraduationCap, title: 'Studying with Prof. David Bourque', detail: 'Primary teacher since 2012' },
];

const ChipList = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-brass-600">{title}</h4>
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-sm text-ink/80">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const About = () => (
  <section id="about" className="bg-cream px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="Meet your teacher"
        title="About Sahar"
        subtitle="Dedicated to nurturing musical talent and fostering artistic excellence"
      />

      <div className="grid items-start gap-14 lg:grid-cols-[5fr_7fr]">
        {/* Portrait */}
        <Reveal className="lg:sticky lg:top-28">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-2 translate-x-3 translate-y-3 rounded-[2rem] sm:-inset-3 sm:translate-x-5 sm:translate-y-5 border-2 border-brass-400/60" />
            <img
              src="/sahar-profile.jpg"
              alt="Sahar Azar with her clarinet"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl shadow-ink/20"
            />
            <a
              href={RCM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-ink px-5 py-4 text-cream shadow-xl transition hover:-translate-y-0.5"
            >
              <Award className="h-8 w-8 text-brass-300" />
              <span className="leading-tight">
                <span className="block text-sm font-semibold">RCM Verified Teacher</span>
                <span className="block text-xs text-cream/60">Royal Conservatory of Music</span>
              </span>
            </a>
          </div>
        </Reveal>

        {/* Bio */}
        <Reveal delay={120}>
          <h3 className="text-3xl font-semibold text-ink">A Passionate Music Teacher</h3>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/70">
            <p>
              Sahar has been involved in music academically for over 17 years with over 10 years of experience as a
              music teacher. She entered the Tehran Music School starting in grade 6 and graduated in Clarinet
              Performance in grade 12.
            </p>
            <p>
              In 2002 she participated in the Fajr Music Festival (Iran&apos;s National Music Competition) and won first
              place in Clarinet Performance. After completing her post-secondary education, majoring in Clarinet
              Performance, Sahar had the opportunity to perform with the Tehran Symphony Orchestra as Assistant
              Principal Clarinetist for two years.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {MILESTONES.map(({ icon: Icon, title, detail }) => (
              <div key={title} className="rounded-2xl bg-white p-5 ring-1 ring-ink/5">
                <Icon className="h-6 w-6 text-brass-500" />
                <p className="mt-3 font-semibold leading-snug text-ink">{title}</p>
                <p className="mt-1 text-sm text-ink/55">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            <div>
              <p className="text-lg leading-relaxed text-ink/70">
                She has been a freelance musician in Toronto since she moved to Canada and has performed in various
                local ensembles such as:
              </p>
              <div className="mt-4">
                <ChipList title="Ensembles" items={ENSEMBLES} />
              </div>
              <p className="mt-4 text-ink/60">
                Performance venues have included Victoria Chapel Theatre, MacMillan Theatre, Walter Hall, and Flato
                Markham Theatre.
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-ink/70">
                Throughout the years, Sahar has participated in many masterclasses and workshops, and has worked with
                well-known teachers such as:
              </p>
              <div className="mt-4">
                <ChipList title="Masterclasses & mentors" items={MENTORS} />
              </div>
              <p className="mt-4 text-ink/60">She has studied with Prof. David Bourque as her primary teacher since 2012.</p>
            </div>
          </div>

          <a
            href={RCM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-10 text-ink hover:bg-ink hover:text-cream"
          >
            View Sahar&apos;s RCM profile
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
