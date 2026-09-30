export const BOOKING_URL = 'https://calendly.com/saharazar-musicstudio';
export const INSTAGRAM_URL = 'https://www.instagram.com/saharazar_clarinet_sax_teacher';
export const RCM_PROFILE_URL = 'https://www.rcmusic.com/teachers/s/sahar-azar';
export const PHONE_DISPLAY = '+1 (647) 774-6250';
export const PHONE_LINK = 'tel:+16477746250';
export const EMAIL = 'sahar.musicstudio@gmail.com';
// wa.me needs the number in international format with no "+", spaces or dashes.
export const WHATSAPP_URL = `https://wa.me/16477746250?text=${encodeURIComponent(
  "Hi Sahar, I'm interested in music lessons."
)}`;
export const LOCATION = 'Aurora, Ontario';

// In page order, except Contact stays last where people expect it.
export const NAV_LINKS = [
  { id: 'gallery', label: 'Gallery' },
  { id: 'about', label: 'About Sahar' },
  { id: 'programs', label: 'Programs' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export interface Slide {
  url: string;
  title: string;
  description: string;
  position?: string;
}

export const SLIDES: Slide[] = [
  {
    url: '/recital-group.jpg',
    title: 'Excellence in Music Education',
    description: 'Join our vibrant community of talented musicians and dedicated students',
    position: 'center',
  },
  {
    url: '/studio-1.jpg',
    title: 'Welcome to the Studio',
    description: "Private lessons in Sahar's studio in Aurora, Ontario",
    position: 'center 60%',
  },
  {
    url: '/recital-group-2.jpg',
    title: 'Performance Opportunities',
    description: 'Regular recitals and concerts in professional venues',
    position: 'center 65%',
  },
  {
    url: '/recital-group-3.jpg',
    title: 'Welcome Musicians of All Ages',
    description: 'From beginners to advanced students, your musical journey starts here',
    position: 'center 30%',
  },
  {
    url: 'https://images.unsplash.com/photo-1584697964358-3e14ca57658b?auto=format&fit=crop&w=1600&q=80',
    title: 'Flexible Learning Options',
    description: 'Both online and in-person classes available',
  },
  {
    url: '/recital-group-4.jpg',
    title: '17+ Years of Professional Excellence',
    description: 'Professional Clarinetist & Saxophonist • RCM Exam Specialist • 10+ Years Teaching Experience',
    position: 'center 40%',
  },
  {
    url: '/rcm-verified2.jpg',
    title: 'RCM Verified Teacher',
    description: 'Verified by the Royal Conservatory of Music, offering structured and recognized music education',
    position: 'center 50%',
  },
];

export const PROGRAMS = [
  {
    title: 'Clarinet Studies',
    image: 'https://images.unsplash.com/photo-1569791832138-fbdd9a500384?auto=format&fit=crop&w=900&q=80',
    points: ['Classical and contemporary repertoire', 'Technical exercises and etudes', 'RCM examination preparation'],
  },
  {
    title: 'Saxophone Studies',
    image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&w=900&q=80',
    points: ['Jazz and classical training', 'Improvisation techniques', 'Performance preparation'],
  },
  {
    title: 'Flexible Learning Options',
    image: 'https://images.unsplash.com/photo-1584697964358-3e14ca57658b?auto=format&fit=crop&w=900&q=80',
    points: ['Online lessons via Zoom/Skype', 'In-person studio sessions', 'Hybrid learning available'],
  },
  {
    title: 'RCM Exam Preparation',
    image: '/rcm-logo.jpg',
    isLogo: true,
    points: ['Structured exam preparation', 'Mock examinations', 'Performance technique coaching'],
  },
];

// Photos of Sahar's teaching studio (shown in the Studio section)
export const STUDIO_PHOTOS: Photo[] = [
  { url: '/studio-1.jpg', alt: "Sahar's music studio in Aurora: upright piano, saxophones on stands and a seating area" },
  { url: '/studio-2.jpg', alt: "Sahar's music studio in Aurora: lesson chairs, music stand, keyboard and sheet music shelves" },
];

export const ENSEMBLES = [
  'University of Toronto (UofT) Wind Symphony',
  'UofT Wind Ensemble',
  'UofT Clarinet Choir',
  'Markham Symphony Orchestra',
];

export const MENTORS = [
  'Prof. Jim Campbell',
  'Richie Hawley',
  'Yehuda Gilad',
  'Peter Stoll',
  'Susan Hoppener',
  'Berlin Philharmonic Wind Quintet',
];

export const TESTIMONIALS = [
  {
    text: 'My 12-year old daughter started learning clarinet with Sahar one year ago when we moved to Toronto. Sahar has inspired my daughter and has kept her interested. My daughter practices almost everyday at home and I am pleased with her progress. I am looking forward to seeing the students\' performance this year! I would like to highly recommend Sahar as a music and clarinet teacher for you!',
    author: 'Kennis C',
    role: 'Parent',
  },
  {
    text: 'I am so grateful to have found Sahar. My son (11yrs) has made leaps and bounds in his progress with the clarinet this year-not only his playing, but also in his understanding of musical theory. Sahar has a welcoming, open personality that makes it easy for kids to feel comfortable and open to learning. My son has told me how much he enjoys his lessons and the boost in his confidence has been priceless.',
    author: 'Deseree W',
    role: 'Parent',
  },
  {
    text: 'I have been taking weekly saxophone lessons with Sahar for almost a year now and have to yet to find any flaws with her, Sahar truly goes above and beyond for her students. Her critiques are extremely helpful and her compliments are sincere. She is not only kind and patient but she also formats her lessons in such a productive way.',
    author: 'Mikaeel S',
    role: 'Saxophone Student',
  },
  {
    text: 'My 12-year old son started taking recorder and clarinet lessons with Sahar when he was 8 years old. Sahar is an outstanding teacher who is skillful and patient in teaching my son how to play the instruments musically. She is very experienced and talented with the clarinet, and she tailors every lesson to my son\'s needs and growth.',
    author: 'Nicholas C',
    role: 'Parent',
  },
  {
    text: 'Sahar is an excellent teacher. She has been my daughter\'s clarinet teacher for four years. She is very experienced and has lots of patience. She teaches with passion and she uses different ways to motivate my daughter to love music. She helped my daughter through various music competitions and exams. I am really glad to have Sahar as my daughter\'s teacher. Thank you so much Sahar!',
    author: 'Tina Y',
    role: 'Parent',
  },
  {
    text: 'If you are looking for an excellent clarinet teacher - whether you are an adult or a young student, complete beginner or advanced player - Sahar Azar should be top of your list. It\'s one thing to play exceptionally well, to demonstrate artistic resonance, and technical prowess. It\'s quite another to impart this hard earned gift to others ... to teach them. Sahar is that rare combination.',
    author: 'Galaxy C',
    role: 'Adult Beginner',
  },
];

// Shown on the page and mirrored as FAQPage structured data in index.html; keep the two in sync.
export const FAQS = [
  {
    question: 'What lessons does Sahar Azar Music Studio offer?',
    answer:
      'Private clarinet and saxophone lessons covering classical and contemporary repertoire, jazz, improvisation, technique, music theory and performance preparation, plus structured Royal Conservatory of Music (RCM) exam preparation.',
  },
  {
    question: 'Where are the lessons held?',
    answer:
      'The studio is in Aurora, Ontario, and welcomes students from Aurora, Newmarket and Richmond Hill. Lessons are available in person at the studio, online via Zoom or Skype, or as a hybrid of both.',
  },
  {
    question: 'Who can take lessons?',
    answer:
      'Students of all ages and levels, from young beginners and adult beginners to advanced players preparing for exams, competitions and performances.',
  },
  {
    question: 'Is there a free trial lesson?',
    answer: 'Yes. You can book a free 30-minute trial lesson online through Calendly or by using the contact form.',
  },
  {
    question: 'Do you prepare students for RCM exams?',
    answer:
      'Yes. Sahar is an RCM verified teacher and offers structured exam preparation, mock examinations and performance technique coaching.',
  },
  {
    question: 'What is Sahar Azar’s background?',
    answer:
      'Sahar has over 17 years of academic music training and more than 10 years of teaching experience. She won first place in Clarinet Performance at the 2002 Fajr Music Festival, was Assistant Principal Clarinetist with the Tehran Symphony Orchestra, and performs with ensembles such as the Markham Symphony Orchestra.',
  },
];

// Recital photos live in /public as "<year>-<n>.jpg".
// To add a new recital: copy the photos into /public and add one line here
// with the year and how many photos there are.
export const RECITAL_PHOTO_COUNTS: Record<number, number> = {
  2026: 24,
  2025: 14,
  2024: 11,
  2023: 22,
  2022: 23,
  2019: 10,
};

export interface Photo {
  url: string;
  alt: string;
}

export const RECITALS = Object.entries(RECITAL_PHOTO_COUNTS)
  .map(([year, count]) => ({
    year: Number(year),
    photos: Array.from({ length: count }, (_, i): Photo => ({
      url: `/${year}-${i + 1}.jpg`,
      alt: `Recital ${year}, photo ${i + 1}`,
    })),
  }))
  .sort((a, b) => b.year - a.year);

export const LATEST_RECITAL_YEAR = RECITALS[0].year;
