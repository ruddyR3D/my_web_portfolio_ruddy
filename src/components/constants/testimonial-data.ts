// constants/testimonial-data.ts
export type Testimonial = {
  name: string;
  role: string;
  companyLogo: string; // path dari /public/icons/*.svg
  rating: number; // 1..5
  feedback: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Thom Haye',
    role: 'Project Manager',
    companyLogo: '/icons/icon-upwork.svg',
    rating: 5,
    feedback:
      'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
  },
  {
    name: 'Emily Carter',
    role: 'Head of Product',
    companyLogo: '/icons/icon-zapier.svg',
    rating: 5,
    feedback:
      'An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!',
  },
  {
    name: 'Sarah Lee',
    role: 'Engineering Manager',
    companyLogo: '/icons/icon-trello.svg',
    rating: 5,
    feedback:
      'An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!',
  },
  {
    name: 'Michael Brown',
    role: 'Lead Developer',
    companyLogo: '/icons/icon-zoom.svg',
    rating: 5,
    feedback:
      'A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!',
  },
  {
    name: 'Alyssa Hart',
    role: 'Product Manager',
    companyLogo: '/icons/icon-trello.svg',
    rating: 5,
    feedback:
      'Super reliable and fast. Great communication and code quality; shipped our dashboard ahead of schedule.',
  },
  {
    name: 'Samir Patel',
    role: 'Engineering Lead',
    companyLogo: '/icons/icon-zoom.svg',
    rating: 5,
    feedback:
      'Pixel-perfect implementation from Figma with excellent accessibility and performance.',
  },
  {
    name: 'Julia Ortega',
    role: 'Head of Ops',
    companyLogo: '/icons/icon-zapier.svg',
    rating: 5,
    feedback:
      'Great collaborator—anticipates edge cases and keeps the UX smooth across devices.',
  },
  {
    name: 'Daniel Cho',
    role: 'CTO',
    companyLogo: '/icons/icon-paypal.svg',
    rating: 5,
    feedback:
      'Clean, maintainable code and thorough PRs. Would absolutely work together again.',
  },
  {
    name: 'Maya Rahman',
    role: 'Design Lead',
    companyLogo: '/icons/icon-youtube.svg',
    rating: 5,
    feedback:
      'Great eye for detail. Turned complex interactions into simple, delightful flows.',
  },
];
