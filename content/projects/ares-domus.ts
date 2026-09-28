import type { Project } from '../types.ts';

// Transcribed from Portfolio_cristina_page-0004 to 0006.
export const aresDomus: Project = {
  slug: 'ares-domus',
  title: 'Ares Domus',
  name: 'Ares Domus',
  year: '2022',
  sector: 'Luxury resort concept',
  role: 'Logo, branding and merchandise',
  tags: ['Logo design', 'Branding', 'Merchandise'],
  color: '#1D252D',
  ink: '#F3E9C6',
  summary:
    'An invented brand for a luxurious resort on Mars, from a brand study and a new logo to a brand book and merchandise mockups.',
  cover: {
    id: 'cover',
    slide: 'Portfolio_cristina_page-0004.jpg',
    crop: [0.6, 0.3, 0.32, 0.4],
    alt: 'Ares Domus business card with the gold vertical-bar logo on charcoal',
  },
  sections: [
    {
      kind: 'brief',
      heading: 'The brief',
      body: [
        'The project consisted of designing a new brand or redesigning an existing one. Starting with the creation of a new logo based on a brand study, until obtaining a brand book.',
      ],
      figures: [],
      sources: ['Portfolio_cristina_page-0004.jpg'],
    },
    {
      kind: 'identity',
      heading: 'Brand design',
      body: [
        'Ares Domus is an invented brand for a luxurious resort on Mars.',
        'The colours chosen for this brand make references to the colours of the planet and wealth.',
      ],
      figures: [
        {
          id: 'moodboard',
          slide: 'Portfolio_cristina_page-0005.jpg',
          crop: [0.049, 0.413, 0.411, 0.462],
          alt: 'Mood board: a space capsule above the Earth, astronauts floating over a desert, an orange interior with a palm tree, and a partly blue Mars',
        },
        {
          id: 'brand-book',
          slide: 'Portfolio_cristina_page-0005.jpg',
          crop: [0.62, 0.095, 0.29, 0.81],
          alt: 'Brand book page: the Ares Domus logo, five colour swatches with Pantone references, the Geometria and Addington typefaces, logo sizes and versions on white, charcoal and orange, and a pattern',
        },
      ],
      sources: ['Portfolio_cristina_page-0005.jpg'],
    },
    {
      kind: 'identity',
      heading: 'Merchandise',
      body: [
        'To give a better idea of how the brand would look, we decided to make mockups of some realistic products that could be used in a luxurious resort.',
      ],
      figures: [
        {
          id: 'mugs',
          slide: 'Portfolio_cristina_page-0006.jpg',
          crop: [0.352, 0.04, 0.648, 0.33],
          alt: 'Three pairs of mugs in teal, orange and charcoal, printed with the Ares Domus bars and wordmark',
        },
        {
          id: 'amenities',
          slide: 'Portfolio_cristina_page-0006.jpg',
          crop: [0.352, 0.372, 0.648, 0.255],
          alt: 'Branded business cards, cream and soap bottles, a towel, slippers, a comb and a razor',
        },
        {
          id: 'stationery',
          slide: 'Portfolio_cristina_page-0006.jpg',
          crop: [0.365, 0.68, 0.525, 0.265],
          alt: 'Letterhead and envelope, "Please do not disturb" and "Welcome!" door hangers, and a toothbrush in an orange sleeve',
        },
      ],
      sources: ['Portfolio_cristina_page-0006.jpg'],
    },
  ],
};
