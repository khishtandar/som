import React from 'react';
import { Menu, Music, BookOpen, Users, Mail, Phone, Clock, MapPin, ChevronRight, Facebook, Instagram, Youtube } from 'lucide-react';
import ImageSlider from './components/ImageSlider';
import ConsultationSection from './components/ConsultationSection';
import YearlyGallery from './components/YearlyGallery';

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
      },
      {
        url: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=800&q=80",
        caption: "Fall Performance 2023"
      },
      {
        url: "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?auto=format&fit=crop&w=800&q=80",
        caption: "Holiday Recital 2023"
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
      },
      {
        url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
        caption: "Summer Festival 2022"
      },
      {
        url: "https://images.unsplash.com/photo-1621367507503-dd9b1e66a2c1?auto=format&fit=crop&w=800&q=80",
        caption: "Fall Concert 2022"
      },
      {
        url: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&w=800&q=80",
        caption: "Winter Gala 2022"
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
      },
      {
        url: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&w=800&q=80",
        caption: "Spring Showcase 2021"
      },
      {
        url: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80",
        caption: "Summer Recital 2021"
      },
      {
        url: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80",
        caption: "Fall Concert 2021"
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

      {/* Hero Section with Image Slider */}
      <ImageSlider />

      {/* Consultation Section */}
      <ConsultationSection />

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

      {/* Our Programs */}
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
                src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?auto=format&fit=crop&w=800&q=80" 
                alt="Online and In-Person Classes"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Flexible Learning Options</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>Online lessons via Zoom/Skype</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>In-person studio sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>Hybrid learning available</span>
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
          <h2 className="text-4xl font-bold mb-12 text-center">About Sahar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="/sahar-profile.jpg" 
                alt="Sahar Azar with clarinet"
                className="w-full h-[500px] object-cover object-center"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">A Passionate Music Teacher</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Sahar has been involved in music academically for over 17 years with over 10 years of experience as a music teacher. She entered the Tehran Music School starting in grade 6 and graduated in Clarinet Performance in grade 12.
                </p>
                <p>
                  In 2002 she participated in the Fajr Music Festival (Iran's National Music Competition) and won first place in Clarinet Performance. After completing her post-secondary education, majoring in Clarinet Performance, Sahar had the opportunity to perform with the Tehran Symphony Orchestra as Assistant Principal Clarinetist for two years.
                </p>
                <p>
                  She has been a freelance musician in Toronto since she moved to Canada and has performed in various local ensembles such as:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>University of Toronto (U of T) Wind Symphony</li>
                  <li>U of T Wind Ensemble</li>
                  <li>U of T Clarinet Choir</li>
                  <li>Markham Symphony Orchestra</li>
                </ul>
                <p>
                  Performance venues have included Victoria Chapel Theatre, MacMillan Theatre, Walter Hall, and Flato Markham Theatre.
                </p>
                <p>
                  Throughout the years, Sahar has participated in many masterclasses and workshops, and has worked with well-known teachers such as:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Prof. Jim Campbell</li>
                  <li>Richie Hawley</li>
                  <li>Yehuda Gilad</li>
                  <li>Peter Stoll</li>
                  <li>Susan Hoppener</li>
                  <li>Berlin Philharmonic Wind Quintet</li>
                </ul>
                <p>
                  She has studied with Prof. David Bourque as her primary teacher since 2012.
                </p>
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
      <section id="contact" className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Ready to start your musical journey? Contact us for lesson inquiries, scheduling, or any questions you may have.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Studio Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+1 (647) 774-6250</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">schoolofmusic.ca@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">Aurora, Ontario</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">Program of Interest</label>
                <select
                  id="program"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                >
                  <option value="">Select a program</option>
                  <option value="clarinet">Clarinet Studies</option>
                  <option value="saxophone">Saxophone Studies</option>
                  <option value="theory">Music Theory</option>
                  <option value="rcm">RCM Exam Preparation</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your musical background and goals"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
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