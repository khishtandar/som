import { Phone, Mail } from 'lucide-react';

const ConsultationSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const openCalendly = () => {
    window.open('https://calendly.com/saharazar-musicstudio', '_blank');
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Musical Journey Today
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Book a free 15-minute consultation to discuss your musical goals or reach out through our contact form.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={openCalendly}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Book Free Consultation</span>
            </button>
            <button
              onClick={scrollToContact}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors border-2 border-blue-600 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection; 