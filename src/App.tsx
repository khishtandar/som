import React, { useState, useEffect, useRef } from 'react';
import { Menu, BookOpen, Users, Mail, Phone, Clock, MapPin, ChevronRight, Facebook, Instagram, Youtube, X, Piano } from 'lucide-react';
import ImageSlider from './components/ImageSlider';
import ConsultationSection from './components/ConsultationSection';
import YearlyGallery from './components/YearlyGallery';
import ContactForm from './components/ContactForm';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollContainer = testimonialsRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
      setScrollPosition(scrollContainer.scrollLeft);
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu after clicking
  };

  const recitalPhotos = {
    2025: [
      {
        url: "/2025-1.jpg",
        caption: "Recital 2024"
      },
      {
        url: "/2025-2.jpg",
        caption: "Recital 2024"
      },
      {
        url: "/2025-3.jpg",
        caption: "Recital 2024"
      },
      {
        url: "/2025-4.jpg",
        caption: "Recital 2024"
      },
      {
        url: "/2025-5.jpg",
        caption: "Recital 2024"
      },
      {
        url: "/2025-6.jpg",
        caption: "Recital 2024"
      },
      {
        url: "/2025-7.jpg",
        caption: "Recital 2024"
      },
      {
        url: "/2025-8.jpg",
        caption: "Recital 2024"
      },
      {
        url: "/2025-9.jpg",
        caption: "Recital 2024"
      },
      {
        url: "/2025-10.jpg",
        caption: "Recital 2024"
      },
      {
        url: "/2025-11.jpg",
        caption: "Recital 2024"
      },
      {
        url: "/2025-12.jpg",
        caption: "Recital 2024"
      },
      {
        url: "/2025-13.jpg",
        caption: "Recital 2024"
      },
      {
        url: "/2025-14.jpg",
        caption: "Recital 2024"
      }
    ],
    2024: [
      {
        url: "/2024-1.jpg",
        caption: "Recital 2024"
      },
      {
        url: "/2024-2.jpg",
        caption: "Recital 2024"
      }
    ],
    2023: [
      {
        url: "/2023-1.jpg",
        caption: "Recital 2023"
      },
      {
        url: "/2023-2.jpg",
        caption: "Recital 2023"
      },
      {
        url: "/2023-3.jpg",
        caption: "Recital 2023"
      },
      {
        url: "/2023-4.jpg",
        caption: "Recital 2023"
      },
      {
        url: "/2023-5.jpg",
        caption: "Recital 2023"
      },
      {
        url: "/2023-6.jpg",
        caption: "Recital 2023"
      }
    ],
    2022: [
      {
        url: "/2022-1.jpg",
        caption: "Recital 2022"
      },
      {
        url: "/2022-2.jpg",
        caption: "Recital 2022"
      }
    ],
    2019: [
      {
        url: "/2019-1.jpg",
        caption: "Recital 2019"
      },
      {
        url: "/2019-2.jpg",
        caption: "Recital 2019"
      }
    ]
  };

  const testimonials = [
    {
      text: "My 12-year old daughter started learning clarinet with Sahar one year ago when we moved to Toronto. Sahar has inspired my daughter and has kept her interested. My daughter practices almost everyday at home and I am pleased with her progress. I am looking forward to seeing the students' performance this year! I would like to highly recommend Sahar as a music and clarinet teacher for you!",
      author: "Kennis C",
      role: "Parent"
    },
    {
      text: "I am so grateful to have found Sahar. My son (11yrs) has made leaps and bounds in his progress with the clarinet this year-not only his playing, but also in his understanding of musical theory. Sahar has a welcoming, open personality that makes it easy for kids to feel comfortable and open to learning. My son has told me how much he enjoys his lessons and the boost in his confidence has been priceless.",
      author: "Deseree W",
      role: "Parent"
    },
    {
      text: "I have been taking weekly saxophone lessons with Sahar for almost a year now and have to yet to find any flaws with her, Sahar truly goes above and beyond for her students. Her critiques are extremely helpful and her compliments are sincere. She is not only kind and patient but she also formats her lessons in such a productive way.",
      author: "Mikaeel S",
      role: "Saxophone Student"
    },
    {
      text: "My 12-year old son started taking recorder and clarinet lessons with Sahar when he was 8 years old. Sahar is an outstanding teacher who is skillful and patient in teaching my son how to play the instruments musically. She is very experienced and talented with the clarinet, and she tailors every lesson to my son's needs and growth.",
      author: "Nicholas C",
      role: "Parent"
    },
    {
      text: "Sahar is an excellent teacher. She has been my daughter's clarinet teacher for four years. She is very experienced and has lots of patience. She teaches with passion and she uses different ways to motivate my daughter to love music. She helped my daughter through various music competitions and exams. I am really glad to have Sahar as my daughter's teacher. Thank you so much Sahar!",
      author: "Tina Y",
      role: "Parent"
    },
    {
      text: "If you are looking for an excellent clarinet teacher - whether you are an adult or a young student, complete beginner or advanced player - Sahar Azar should be top of your list. It's one thing to play exceptionally well, to demonstrate artistic resonance, and technical prowess. It's quite another to impart this hard earned gift to others ... to teach them. Sahar is that rare combination.",
      author: "Galaxy C",
      role: "Adult Beginner"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sahar Azar Music Studio
              </h1>
              {/* Animated Instagram icon with encouragement */}
              <a
                href="https://www.instagram.com/saharazar_clarinet_sax_teacher"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group ml-4"
              >
                <Instagram className="w-6 h-6 text-gray-600 group-hover:text-pink-500 animate-bounce" />
                <span className="ml-2 text-sm text-pink-600 font-semibold hidden lg:inline animate-pulse">Follow me on Instagram!</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['hero', 'programs', 'about', 'gallery', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    {section === 'hero' ? 'Home' :
                     section === 'programs' ? 'Our Programs' :
                     section === 'about' ? 'About Sahar' :
                     section === 'gallery' ? 'Gallery' : 'Contact Us'}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Book A Free Trial Lesson
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-blue-600 focus:outline-none transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm border-t">
                {/* Animated Instagram icon with encouragement */}
                <div className="flex justify-center mb-2">
                  <a
                    href="https://www.instagram.com/saharazar_clarinet_sax_teacher"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group"
                  >
                    <Instagram className="w-6 h-6 text-gray-600 group-hover:text-pink-500 animate-bounce" />
                    <span className="ml-2 text-sm text-pink-600 font-semibold animate-pulse">Follow me on Instagram!</span>
                  </a>
                </div>
                {['hero', 'programs', 'about', 'gallery', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-300"
                  >
                    {section === 'hero' ? 'Home' :
                     section === 'programs' ? 'Our Programs' :
                     section === 'about' ? 'About Sahar' :
                     section === 'gallery' ? 'Gallery' : 'Contact Us'}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-center px-3 py-2 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book A Free Trial Lesson
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Add margin-top to account for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section with Image Slider */}
        <section id="hero" className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-multiply z-10"></div>
          <ImageSlider />
        </section>

        {/* Consultation Section */}
        <ConsultationSection />

        {/* Features */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <BookOpen className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Education</h3>
              <p className="text-gray-600">Expert instruction in performance, theory, and RCM examination preparation</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Users className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
              <p className="text-gray-600">Tailored instruction to meet your individual goals and learning style</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Piano className="w-12 h-12 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Performance Opportunities</h3>
              <p className="text-gray-600">Regular recitals and concert performances to build confidence</p>
            </div>
          </div>
        </section>

        {/* Our Programs */}
        <section id="programs" className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Programs</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Discover our comprehensive music education programs designed to nurture your musical journey</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1569791832138-fbdd9a500384?auto=format&fit=crop&w=800&q=80" 
                    alt="Clarinet Lessons"
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">Clarinet Studies</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 group">
                      <ChevronRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="group-hover:text-blue-600 transition-colors duration-300">Classical and contemporary repertoire</span>
                    </li>
                    <li className="flex items-center gap-2 group">
                      <ChevronRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="group-hover:text-blue-600 transition-colors duration-300">Technical exercises and etudes</span>
                    </li>
                    <li className="flex items-center gap-2 group">
                      <ChevronRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="group-hover:text-blue-600 transition-colors duration-300">RCM examination preparation</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=800&q=80" 
                    alt="Saxophone Lessons"
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">Saxophone Studies</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 group">
                      <ChevronRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="group-hover:text-blue-600 transition-colors duration-300">Jazz and classical training</span>
                    </li>
                    <li className="flex items-center gap-2 group">
                      <ChevronRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="group-hover:text-blue-600 transition-colors duration-300">Improvisation techniques</span>
                    </li>
                    <li className="flex items-center gap-2 group">
                      <ChevronRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="group-hover:text-blue-600 transition-colors duration-300">Performance preparation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?auto=format&fit=crop&w=800&q=80" 
                    alt="Online and In-Person Classes"
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">Flexible Learning Options</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 group">
                      <ChevronRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="group-hover:text-blue-600 transition-colors duration-300">Online lessons via Zoom/Skype</span>
                    </li>
                    <li className="flex items-center gap-2 group">
                      <ChevronRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="group-hover:text-blue-600 transition-colors duration-300">In-person studio sessions</span>
                    </li>
                    <li className="flex items-center gap-2 group">
                      <ChevronRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="group-hover:text-blue-600 transition-colors duration-300">Hybrid learning available</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className="relative">
                  <img 
                    src="/rcm-logo.jpg" 
                    alt="Royal Conservatory of Music"
                    className="w-full h-64 object-contain bg-white p-8"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">RCM Exam Preparation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 group">
                      <ChevronRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="group-hover:text-blue-600 transition-colors duration-300">Structured exam preparation</span>
                    </li>
                    <li className="flex items-center gap-2 group">
                      <ChevronRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="group-hover:text-blue-600 transition-colors duration-300">Mock examinations</span>
                    </li>
                    <li className="flex items-center gap-2 group">
                      <ChevronRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                      <span className="group-hover:text-blue-600 transition-colors duration-300">Performance technique coaching</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-6 md:px-12 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Sahar</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Dedicated to nurturing musical talent and fostering artistic excellence</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className="relative">
                  <img 
                    src="/sahar-profile.jpg" 
                    alt="Sahar Azar with clarinet"
                    className="w-full h-[500px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-blue-600">A Passionate Music Teacher</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="leading-relaxed hover:text-gray-900 transition-colors duration-300">
                    Sahar has been involved in music academically for over 17 years with over 10 years of experience as a music teacher. She entered the Tehran Music School starting in grade 6 and graduated in Clarinet Performance in grade 12.
                  </p>
                  <p className="leading-relaxed hover:text-gray-900 transition-colors duration-300">
                    In 2002 she participated in the Fajr Music Festival (Iran's National Music Competition) and won first place in Clarinet Performance. After completing her post-secondary education, majoring in Clarinet Performance, Sahar had the opportunity to perform with the Tehran Symphony Orchestra as Assistant Principal Clarinetist for two years.
                  </p>
                  <p className="leading-relaxed hover:text-gray-900 transition-colors duration-300">
                    She has been a freelance musician in Toronto since she moved to Canada and has performed in various local ensembles such as:
                  </p>
                  <ul className="list-none space-y-2 pl-4">
                    {[
                      "University of Toronto (UofT) Wind Symphony",
                      "UofT Wind Ensemble",
                      "UofT Clarinet Choir",
                      "Markham Symphony Orchestra"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 group">
                        <ChevronRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                        <span className="group-hover:text-blue-600 transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="leading-relaxed hover:text-gray-900 transition-colors duration-300">
                    Performance venues have included Victoria Chapel Theatre, MacMillan Theatre, Walter Hall, and Flato Markham Theatre.
                  </p>
                  <p className="leading-relaxed hover:text-gray-900 transition-colors duration-300">
                    Throughout the years, Sahar has participated in many masterclasses and workshops, and has worked with well-known teachers such as:
                  </p>
                  <ul className="list-none space-y-2 pl-4">
                    {[
                      "Prof. Jim Campbell",
                      "Richie Hawley",
                      "Yehuda Gilad",
                      "Peter Stoll",
                      "Susan Hoppener",
                      "Berlin Philharmonic Wind Quintet"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 group">
                        <ChevronRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                        <span className="group-hover:text-blue-600 transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="leading-relaxed hover:text-gray-900 transition-colors duration-300">
                    She has studied with Prof. David Bourque as her primary teacher since 2012.
                  </p>
                  <div className="mt-8">
                    <a 
                      href="https://www.rcmusic.com/teachers/s/sahar-azar" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      View RCM Sahar Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Testimonials</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">What our students say about their learning experience</p>
            <div className="relative">
              <div ref={testimonialsRef} className="overflow-x-auto pb-4 hide-scrollbar">
                <div className="flex gap-8 min-w-max px-4">
                  {/* Testimonial cards */}
                  {testimonials.map((testimonial, index) => (
                    <article key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 w-[400px]">
                      <div className="relative">
                        <div className="flex text-yellow-400 mb-4" aria-label="5 out of 5 stars rating">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <blockquote>
                          <p className="relative text-lg mb-6 leading-relaxed text-gray-600 hover:text-gray-900 transition-colors duration-300">
                            {testimonial.text}
                          </p>
                        </blockquote>
                        <footer className="relative flex items-center gap-4 pt-4 border-t border-gray-200">
                          <div className="flex-1">
                            <cite className="font-semibold text-blue-600 not-italic">{testimonial.author}</cite>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                        </footer>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Recital Gallery</h2>
            
            {Object.entries(recitalPhotos).reverse().map(([year, photos]) => (
              <YearlyGallery key={year} year={year} photos={photos} />
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />

        {/* Footer */}
        <footer className="bg-black text-white py-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-semibold">Sahar Azar Music Studio</span>
                </div>
                <p className="text-gray-400">Nurturing musical excellence through dedicated instruction</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Programs</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Clarinet Studies</li>
                  <li>Saxophone Studies</li>
                  <li>Music Theory</li>
                  <li>RCM Exam Preparation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Programs</a></li>
                  <li><a href="#" className="hover:text-white">Schedule</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/saharazar_clarinet_sax_teacher" className="text-gray-400 hover:text-white">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2024 Sahar Azar Music Studio. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;