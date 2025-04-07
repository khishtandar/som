import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  url: string;
  title: string;
  description: string;
  position?: string;
}

const slides: Slide[] = [
  {
    url: "/rcm-verified2.jpg",
    title: "RCM Verified Teacher",
    description: "verified by the Royal Conservatory of Music, offering structured and recognized music education.",
    position: "center 50%"
  },
  {
    url: "/recital-group.jpg",
    title: "Excellence in Music Education",
    description: "Join our vibrant community of talented musicians and dedicated students",
    position: "center"
  },
  {
    url: "/recital-group-2.jpg",
    title: "Performance Opportunities",
    description: "Regular recitals and concerts in professional venues",
    position: "center 65%"
  },
  {
    url: "/recital-group-3.jpg",
    title: "Welcome Musicians of All Ages",
    description: "From beginners to advanced students, your musical journey starts here",
    position: "center 30%"
  },
  {
    url: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?auto=format&fit=crop&w=800&q=80",
    title: "Flexible Learning Options",
    description: "Both Online and In-Person Classes Available"
  },
  {
    url: "/recital-group-4.jpg",
    title: "17+ Years of Professional Excellence",
    description: "Professional Clarinetist & Saxophonist • RCM Exam Specialist • 10+ Years Teaching Experience",
    position: "center 40%"
  }
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative h-[600px] w-full group">
      <div 
        className="w-full h-full bg-center bg-cover duration-500"
        style={{ 
          backgroundImage: `url(${slides[currentIndex].url})`,
          backgroundPosition: slides[currentIndex].position
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{slides[currentIndex].title}</h1>
            <p className="text-xl md:text-2xl mb-4">{slides[currentIndex].description}</p>
            {currentIndex === 4 && (
              <ul className="text-lg md:text-xl space-y-2 mt-4">
                <li>• RCM Exam Preparation</li>
                <li>• Structured exam preparation</li>
                <li>• Mock examinations</li>
                <li>• Performance technique coaching</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 z-20 shadow-lg hover:shadow-xl"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 z-20 shadow-lg hover:shadow-xl"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider; 