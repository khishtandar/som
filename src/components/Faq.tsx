import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/content';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

// Native <details> keeps every answer in the HTML, so search engines and AI crawlers can read them.
const Faq = () => (
  <section id="faq" className="bg-cream px-6 pt-24">
    <div className="mx-auto max-w-3xl">
      <SectionHeading eyebrow="Good to know" title="Frequently Asked Questions" />
      <Reveal>
        <div className="divide-y divide-ink/10 rounded-3xl bg-white px-6 ring-1 ring-ink/5 sm:px-8">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <h3>{faq.question}</h3>
                <ChevronDown className="h-5 w-5 flex-shrink-0 text-brass-600 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 leading-relaxed text-ink/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Faq;
