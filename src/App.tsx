import React from 'react';
import { Menu, Music, BookOpen, Users, Mail, Phone, Clock, MapPin, ChevronRight, Facebook, Instagram, Youtube } from 'lucide-react';

function App() {
  const recitalPhotos = {
    2023: [
      {
        url: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&w=800&q=80",
        caption: "Winter Recital 2023"
      },
      {
        url: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80",
        caption: "Spring Showcase 2023"
      },
      {
        url: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
        caption: "Summer Concert 2023"
      }
    ],
    2022: [
      {
        url: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=800&q=80",
        caption: "Holiday Performance 2022"
      },
      {
        url: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&w=800&q=80",
        caption: "Spring Recital 2022"
      }
    ],
    2021: [
      {
        url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
        caption: "Virtual Concert 2021"
      },
      {
        url: "https://images.unsplash.com/photo-1621367507503-dd9b1e66a2c1?auto=format&fit=crop&w=800&q=80",
        caption: "Outdoor Performance 2021"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 md:px-12 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <Music className="w-8 h-8" />
          <span className="text-xl font-semibold">Sahar Azar Music Studio</span>
        </div>
        <Menu className="md:hidden" />
        <div className="hidden md:flex space-x-8">
          <a href="#courses" className="text-gray-600 hover:text-black">Programs</a>
          <a href="#instructors" className="text-gray-600 hover:text-black">About</a>
          <a href="#gallery" className="text-gray-600 hover:text-black">Gallery</a>
          <a href="#testimonials" className="text-gray-600 hover:text-black">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-black">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <img 
          src="https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&q=80&w=2000"
          alt="Music Performance"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Excellence in Music Education</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Specialized instruction in clarinet, saxophone, music theory, and RCM exam preparation
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold">
              Begin Your Musical Journey
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <BookOpen className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Comprehensive Education</h3>
            <p className="text-gray-600">Expert instruction in performance, theory, and RCM examination preparation</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <Users className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
            <p className="text-gray-600">Tailored instruction to meet your individual goals and learning style</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <Music className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Performance Opportunities</h3>
            <p className="text-gray-600">Regular recitals and concert performances to build confidence</p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1569791832138-fbdd9a500384?auto=format&fit=crop&w=800&q=80" 
                alt="Clarinet Lessons"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Clarinet Studies</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>Classical and contemporary repertoire</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>Technical exercises and etudes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>RCM examination preparation</span>
                  </li>
                </ul>
                <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=800&q=80" 
                alt="Saxophone Lessons"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Saxophone Studies</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>Jazz and classical training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>Improvisation techniques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>Performance preparation</span>
                  </li>
                </ul>
                <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=800&q=80" 
                alt="Music Theory"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Music Theory</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>Comprehensive theory instruction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>Ear training and sight reading</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>History and musical analysis</span>
                  </li>
                </ul>
                <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&w=800&q=80" 
                alt="RCM Exam Preparation"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">RCM Exam Preparation</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>Structured exam preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>Mock examinations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>Performance technique coaching</span>
                  </li>
                </ul>
                <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="instructors" className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Sahar Azar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" 
                alt="Sahar Azar"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Professional Musician & Educator</h3>
              <p className="text-gray-600">
                With over 15 years of teaching experience, Sahar Azar has established herself as a distinguished music educator specializing in woodwind instruments and music theory. Her comprehensive approach combines technical mastery with musical expression, preparing students for both performances and RCM examinations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Certified RCM Examiner</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Advanced Degrees in Music Performance</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                  <span>Award-winning Performer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Recital Gallery</h2>
          
          {Object.entries(recitalPhotos).reverse().map(([year, photos]) => (
            <div key={year} className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">{year} Performances</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {photos.map((photo, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <p className="text-center text-gray-700">{photo.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Student Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="text-lg mb-4">"Ms. Azar's guidance in preparing for my RCM examinations was invaluable. Her attention to detail and patient approach helped me achieve distinction in both performance and theory."</p>
              <footer className="font-semibold">- Emily Chen, Grade 8 RCM</footer>
            </blockquote>
            <blockquote className="bg-white p-8 rounded-2xl shadow-sm">
              <p className="text-lg mb-4">"The comprehensive music education I received at Sahar Azar Music Studio has been transformative. From theory to performance, every aspect is covered with expertise."</p>
              <footer className="font-semibold">- Michael Thompson, Advanced Certificate</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Studio Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <span>info@saharazarmusic.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <span>123 Music Avenue, Studio 4B</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <span>Lessons available Monday-Saturday</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Program of Interest</label>
                <select
                  id="program"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option>Clarinet Studies</option>
                  <option>Saxophone Studies</option>
                  <option>Music Theory</option>
                  <option>RCM Exam Preparation</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-6 h-6" />
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
                <a href="#" className="text-gray-400 hover:text-white">
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
  );
}

export default App;