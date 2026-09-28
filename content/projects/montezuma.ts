import type { Project } from '../types.ts';

// Metadata only for now; the case study is transcribed in its own ticket.
export const montezuma: Project = {
  slug: 'montezuma',
  title: 'Montezuma',
  name: 'Montezuma',
  year: '2022',
  sector: 'Fashion start-up',
  role: 'Marketing and packaging, class competition',
  tags: ['Marketing', 'Packaging', 'Competition'],
  color: '#91A399',
  ink: '#1F1B1A',
  summary:
    'Marketing strategy and packaging for Montezuma, the future clothing brand of Dreamland, presented to her marketing class.',
  thumbnail: {
    id: 'thumbnail',
    slide: 'Portfolio_cristina_page-0009.jpg',
    crop: [0.57, 0.08, 0.41, 0.87],
    alt: 'Two kraft shipping boxes printed with the Montezuma mask mascot',
  },
  sections: [],
};
