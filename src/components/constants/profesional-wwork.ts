// data/professionalWork.ts

export type CardSide = 'left' | 'right';

export type ProfessionalCard = {
  id: number; // 1..8
  period: string; // "2020 - 2022"
  role: string; // "Frontend Developer"
  description: string; // long description
  brandIcon: string; // path to /icons/*.svg (public)
  brandAlt?: string; // a11y label
  cardSide: CardSide; // odd -> right, even -> left
  iconSideOfPeriod: 'right'; // keep icon on the right of the period text
};

export const EXPERIENCE_HEADER = {
  kicker: 'EXPERIENCE',
  title: 'PROFESIONAL WORK',
} as const;

const baseDescription =
  'Builds responsive and high-performance web applications with clean, maintainable code. ' +
  'Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. ' +
  'Focused on optimizing performance, accessibility, and seamless user experiences.';

export const professionalWork: ProfessionalCard[] = [
  {
    id: 1,
    period: '2020 - 2022',
    role: 'Frontend Developer',
    description: baseDescription,
    brandIcon: '/icons/upwork.svg',
    brandAlt: 'Upwork',
    cardSide: 'right',
    iconSideOfPeriod: 'right',
  },
  {
    id: 2,
    period: '2020 - 2022',
    role: 'Frontend Developer',
    description: baseDescription,
    brandIcon: '/icons/trello.svg',
    brandAlt: 'Trello',
    cardSide: 'left',
    iconSideOfPeriod: 'right',
  },
  {
    id: 3,
    period: '2020 - 2022',
    role: 'Frontend Developer',
    description: baseDescription,
    brandIcon: '/icons/zoom.svg',
    brandAlt: 'Zoom',
    cardSide: 'right',
    iconSideOfPeriod: 'right',
  },
  {
    id: 4,
    period: '2020 - 2022',
    role: 'Frontend Developer',
    description: baseDescription,
    brandIcon: '/icons/zapier.svg', // mengikuti nama file yang kamu sebutkan
    brandAlt: 'Zapier',
    cardSide: 'left',
    iconSideOfPeriod: 'right',
  },
  {
    id: 5,
    period: '2020 - 2022',
    role: 'Frontend Developer',
    description: baseDescription,
    brandIcon: '/icons/paypal.svg',
    brandAlt: 'PayPal',
    cardSide: 'right',
    iconSideOfPeriod: 'right',
  },
  {
    id: 6,
    period: '2020 - 2022',
    role: 'Frontend Developer',
    description: baseDescription,
    brandIcon: '/icons/netfilx.svg', // mengikuti ejaan file yang kamu sebutkan
    brandAlt: 'Netflix',
    cardSide: 'left',
    iconSideOfPeriod: 'right',
  },
  {
    id: 7,
    period: '2020 - 2022',
    role: 'Frontend Developer',
    description: baseDescription,
    brandIcon: '/icons/youtube.svg',
    brandAlt: 'YouTube',
    cardSide: 'right',
    iconSideOfPeriod: 'right',
  },
  {
    id: 8,
    period: '2020 - 2022',
    role: 'Frontend Developer',
    description: baseDescription,
    brandIcon: '/icons/amazon.svg',
    brandAlt: 'Amazon',
    cardSide: 'left',
    iconSideOfPeriod: 'right',
  },
];
