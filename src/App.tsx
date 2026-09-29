import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Programs from './components/Programs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import ConsultationSection from './components/ConsultationSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Page content (slides, programs, testimonials, FAQs, recital photo counts) lives in src/data/content.ts.
function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Programs />
        <About />
        <Testimonials />
        <Gallery />
        <Faq />
        <ConsultationSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
