import { useState, useEffect, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin } from 'lucide-react';

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

    try {
      await emailjs.send(
        "service_ckxcexd",
        "template_xlv4g9p",
        {
          to_email: "saharazar.musicstudio@gmail.com",
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
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center">Get in Touch</h2>
          <p className="text-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base px-4">
            Ready to start your musical journey? Contact us for lesson inquiries, scheduling, or any questions you may have.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            {/* Studio Information */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg order-2 lg:order-1">
              <h3 className="text-xl md:text-2xl font-semibold mb-6">Studio Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base">Phone</p>
                    <p className="text-gray-600 text-sm md:text-base">+1 (647) 774-6250</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base">Email</p>
                    <p className="text-gray-600 text-sm md:text-base break-all">saharazar.musicstudio@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base">Location</p>
                    <p className="text-gray-600 text-sm md:text-base">Aurora, Ontario</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1.5 md:mb-2 text-sm md:text-base">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1.5 md:mb-2 text-sm md:text-base">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1.5 md:mb-2 text-sm md:text-base">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    pattern="[0-9-+\s.]{10,15}"
                    placeholder="e.g., 647-774-6250"
                    title="Phone number must be between 10 and 15 digits"
                    className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                    value={formData.phone}
                    onChange={(e) => {
                      const digits = e.target.value.replace(/\D/g, '');
                      if (digits.length <= 15 || e.target.value.length < formData.phone.length) {
                        setFormData({ ...formData, phone: e.target.value });
                      }
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1.5 md:mb-2 text-sm md:text-base">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1.5 md:mb-2 text-sm md:text-base">
                    Verify: What is {captcha.num1} + {captcha.num2}? <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                    value={formData.captchaAnswer}
                    onChange={(e) => setFormData({ ...formData, captchaAnswer: e.target.value })}
                  />
                </div>
                {status && (
                  <div className={`text-center p-2 md:p-3 rounded text-sm md:text-base ${status.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {status}
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2.5 md:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base mt-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 