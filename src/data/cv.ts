export interface CvRole {
  title: string;
  org: string;
  period: string;
  bullets: string[];
  now?: boolean;
  /** Slug der Stationsseite unter /projects */
  slug?: string;
}

// Quelle: Lebenslauf von Dac, ergänzt um die Rolle ab 10/2026. Keine privaten Kontaktdaten.
const de: CvRole[] = [
  {
    title: 'Head of Performance Marketing',
    org: 'rightmart Group',
    slug: 'rightmart',
    period: 'seit 10/2026',
    now: true,
    bullets: [
      'Gesamtverantwortung für Performance Marketing über alle Paid-Kanäle und Rechtsgebiete, mit festen Zielen für CPL, CPS und CAC',
      'Von niedrigem 7-stelligen Umsatz auf 60 Mio Jahresumsatz durch Performance Marketing',
      'Aufbau der Marke sportwetten-kanzlei.de inklusive Influencer Marketing in 4 Monaten: ca. 3 Mio Euro Spend, über 40 Mio Euro Streitwert',
      'Führung von 2 direkten und 5 indirekten Reports',
      'Server-Side-Tracking, Health Checks, GA4 für alle Domains der Group, Marketingdaten-Atlas als Guardrail',
      'Apps mit Claude und AI-Tools für CRO, SEO, Creative Strategy, Linkbuilding und Brand',
    ],
  },
  {
    title: 'Head of Creative & Brand',
    org: 'rightmart Group',
    slug: 'rightmart',
    period: '04/2026 bis 09/2026',
    bullets: [
      'Verantwortung für ein 8-stelliges Jahresbudget',
      'Leitung des Performance Marketing und Creative Teams',
      'Interdisziplinäre Strategieentwicklung und Projektleitung',
      'Steuerung externer Dienstleister, interne Workshops und Weiterbildungsprogramme',
    ],
  },
  {
    title: 'Teamleiter Social Media Marketing (Paid & Organic)',
    org: 'rightmart Group',
    slug: 'rightmart',
    period: '04/2024 bis 03/2026',
    bullets: [
      'Leitung und Aufbau eines 7-köpfigen Creative Teams',
      'Landingpage-Optimierung, interne SEA-Beratung, Influencer Marketing',
      'Entwicklung und Implementierung ganzheitlicher Trackingkonzepte',
      'Interdisziplinäre Projektleitung, Steuerung externer Dienstleister',
    ],
  },
  {
    title: 'Performance Marketing Manager',
    org: 'rightmart Group',
    slug: 'rightmart',
    period: '03/2023 bis 04/2024',
    bullets: [
      'Performance Marketing über DSP, Search, Social und Native, dazu Tracking und Reporting',
      'Aufbau neuer Satellitenmarken, Professionalisierung von Organic Social',
      'CRO: Landingpage-Erstellung und A/B-Test-Funnels',
    ],
  },
  {
    title: 'Account Manager',
    org: '42DIGITAL GmbH',
    slug: '42digital',
    period: '09/2021 bis 03/2023',
    bullets: [
      'Performance Marketing über DSP, Search, Social und Native für internationale Unternehmen',
      'Verwaltung von 6- bis 7-stelligen Monatsbudgets',
      'Projektmanagement, Consulting und Tracking',
    ],
  },
  {
    title: 'Freiberufler',
    org: 'Hildebrand & Vu GbR',
    slug: 'hildebrand-vu',
    period: '06/2020 bis 01/2025',
    bullets: ['Webdesign und Webentwicklung für KMUs', 'SEA, Paid Social und Consulting'],
  },
  {
    title: 'Gründer',
    org: 'Triagramm UG',
    slug: 'triagramm',
    period: '12/2018 bis 06/2020',
    bullets: ['Social-Media-Beratung (Paid und Organic) für KMUs', 'Entwicklung und Vertrieb eines Engagement-Bots für Instagram'],
  },
  {
    title: 'Product Owner',
    org: 'Vitapio GmbH',
    slug: 'vitapio',
    period: '02/2018 bis 05/2019',
    bullets: ['Product Ownership in agiler Softwareentwicklung', 'Begleitung und Sicherstellung des MVPs'],
  },
];

const en: CvRole[] = [
  {
    title: 'Head of Performance Marketing',
    org: 'rightmart Group',
    slug: 'rightmart',
    period: 'since 10/2026',
    now: true,
    bullets: [
      'Full ownership of performance marketing across all paid channels and legal areas, with fixed targets for CPL, CPS and CAC',
      'From low seven-figure revenue to 60 million a year through performance marketing',
      'Built the brand sportwetten-kanzlei.de including influencer marketing in 4 months: about 3 million euros of spend, over 40 million euros in dispute value',
      'Lead 2 direct and 5 indirect reports',
      'Server-side tracking, health checks, GA4 for every domain of the group, marketing data atlas as a guardrail',
      'Apps built with Claude and AI tools for CRO, SEO, creative strategy, link building and brand',
    ],
  },
  {
    title: 'Head of Creative & Brand',
    org: 'rightmart Group',
    slug: 'rightmart',
    period: '04/2026 to 09/2026',
    bullets: [
      'Accountable for an eight-figure annual budget',
      'Led the performance marketing and creative team',
      'Interdisciplinary strategy development and project leadership',
      'Steered external providers, internal workshops and training programs',
    ],
  },
  {
    title: 'Team Lead Social Media Marketing (Paid & Organic)',
    org: 'rightmart Group',
    slug: 'rightmart',
    period: '04/2024 to 03/2026',
    bullets: [
      'Led and built a creative team of 7',
      'Landing page optimization, internal SEA consulting, influencer marketing',
      'Developed and implemented end-to-end tracking concepts',
      'Interdisciplinary project leadership, steered external providers',
    ],
  },
  {
    title: 'Performance Marketing Manager',
    org: 'rightmart Group',
    slug: 'rightmart',
    period: '03/2023 to 04/2024',
    bullets: [
      'Performance marketing across DSP, search, social and native, plus tracking and reporting',
      'Built new satellite brands, professionalized organic social',
      'CRO: landing page creation and A/B test funnels',
    ],
  },
  {
    title: 'Account Manager',
    org: '42DIGITAL GmbH',
    slug: '42digital',
    period: '09/2021 to 03/2023',
    bullets: [
      'Performance marketing across DSP, search, social and native for international companies',
      'Managed six- to seven-figure monthly budgets',
      'Project management, consulting and tracking',
    ],
  },
  {
    title: 'Freelancer',
    org: 'Hildebrand & Vu GbR',
    slug: 'hildebrand-vu',
    period: '06/2020 to 01/2025',
    bullets: ['Web design and development for SMBs', 'SEA, paid social and consulting'],
  },
  {
    title: 'Founder',
    org: 'Triagramm UG',
    slug: 'triagramm',
    period: '12/2018 to 06/2020',
    bullets: ['Social media consulting (paid and organic) for SMBs', 'Built and sold an engagement bot for Instagram'],
  },
  {
    title: 'Product Owner',
    org: 'Vitapio GmbH',
    slug: 'vitapio',
    period: '02/2018 to 05/2019',
    bullets: ['Product ownership in agile software development', 'Guided and secured the MVP'],
  },
];

export const cvRoles = { de, en, vi: en } as const;
