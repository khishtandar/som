import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Features, Stats } from './components/Highlights';
import Programs from './components/Programs';
import About from './components/About';
import Studio from './components/Studio';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import ConsultationSection from './components/ConsultationSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Page content (slides, programs, testimonials, FAQs, recital photo counts) lives in src/data/content.ts.
function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Gallery />
        <About />
        <Studio />
        <ContactForm />
        <Features />
        <Programs />
        <Testimonials />
        <Faq />
        <ConsultationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
