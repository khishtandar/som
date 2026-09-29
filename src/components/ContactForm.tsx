import { useState, useEffect, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { CalendarDays, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';
import { BOOKING_URL, EMAIL, INSTAGRAM_URL, LOCATION, PHONE_DISPLAY, PHONE_LINK } from '../data/content';
import SectionHeading from './SectionHeading';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    captchaAnswer: ''
  });
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: 0 });
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  // Generate new captcha numbers
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setCaptcha({
      num1,
      num2,
      answer: num1 + num2
    });
  };

  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha();
    // Initialize EmailJS
    emailjs.init("7C92922rjYPt5EMGu");
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Verify captcha
    if (Number(formData.captchaAnswer) !== captcha.answer) {
      setStatus('Incorrect captcha answer. Please try again.');
      generateCaptcha();
      setFormData({ ...formData, captchaAnswer: '' });
      return;
    }

    setIsSending(true);
    try {
      await emailjs.send(
        "service_ckxcexd",
        "template_xlv4g9p",
        {
          to_email: "sahar.musicstudio@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }
      );

      setStatus('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        captchaAnswer: ''
      });
      generateCaptcha();
    } catch {
      setStatus('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const contactItems = [
    { icon: Phone, label: 'Phone', value: PHONE_DISPLAY, href: PHONE_LINK },
    { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: 'Location', value: LOCATION },
  ];

  return (
    <section id="contact" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Say hello"
          title="Get in Touch"
          subtitle="Ready to start your musical journey? Contact us for lesson inquiries, scheduling, or any questions you may have."
        />

        <div className="grid overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/10 ring-1 ring-ink/5 lg:grid-cols-[2fr_3fr]">
          {/* Studio Information */}
          <div className="relative order-2 overflow-hidden bg-ink p-8 text-cream sm:p-10 lg:order-1">
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brass-400/15 blur-3xl" />
            <h3 className="relative text-2xl font-semibold">Studio Information</h3>
            <p className="relative mt-2 text-cream/60">
              Lessons for all ages and levels, online or in person. Welcoming students from Aurora, Newmarket and
              Richmond Hill.
            </p>

            <ul className="relative mt-10 space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-brass-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.18em] text-cream/50">{label}</span>
                    {href ? (
                      <a href={href} className="block break-all py-2 font-medium text-cream hover:text-brass-200">
                        {value}
                      </a>
                    ) : (
                      <span className="block font-medium">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="relative mt-12 flex flex-wrap gap-3 border-t border-white/10 pt-8">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2.5 text-sm">
                <CalendarDays className="h-4 w-4" />
                Book on Calendly
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost px-5 py-2.5 text-sm text-cream hover:bg-white/10"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="order-1 space-y-5 bg-white p-8 sm:p-10 lg:order-2">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink/80">
                  Name <span className="text-brass-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  autoComplete="name"
                  className="field"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink/80">
                  Phone <span className="text-brass-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  autoComplete="tel"
                  pattern="[0-9-+\s.]{10,15}"
                  placeholder="e.g., 647-774-6250"
                  title="Phone number must be between 10 and 15 digits"
                  className="field"
                  value={formData.phone}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, '');
                    if (digits.length <= 15 || e.target.value.length < formData.phone.length) {
                      setFormData({ ...formData, phone: e.target.value });
                    }
                  }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink/80">
                Email <span className="text-brass-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                autoComplete="email"
                className="field"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink/80">
                Message <span className="text-brass-600">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell me about the student, their instrument and experience..."
                className="field resize-y"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="captcha" className="mb-2 block text-sm font-medium text-ink/80">
                Quick check: what is {captcha.num1} + {captcha.num2}? <span className="text-brass-600">*</span>
              </label>
              <input
                type="number"
                id="captcha"
                required
                className="field sm:max-w-[10rem]"
                value={formData.captchaAnswer}
                onChange={(e) => setFormData({ ...formData, captchaAnswer: e.target.value })}
              />
            </div>
            {status && (
              <div
                role="status"
                className={`rounded-xl p-3 text-center text-sm font-medium ${
                  status.includes('success') ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-700'
                }`}
              >
                {status}
              </div>
            )}
            <button type="submit" disabled={isSending} className="btn-primary w-full py-4 disabled:cursor-wait disabled:opacity-70">
              <Send className="h-5 w-5" />
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
