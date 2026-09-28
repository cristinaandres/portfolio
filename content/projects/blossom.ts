import type { Project } from '../types.ts';

// Metadata only for now; the case study is transcribed in its own ticket.
export const blossom: Project = {
  slug: 'blossom',
  title: 'Blossom',
  name: 'Blossom',
  year: '2020',
  sector: 'Lighting',
  role: 'Product designer, team of five',
  tags: ['Product design', 'Prototyping'],
  color: '#D9ABBA',
  ink: '#3A2A33',
  summary:
    'A flower-shaped lamp with articulated petals that graduate the light, designed for laser cutting by a group of five.',
  cover: {
    id: 'cover',
    slide: 'Portfolio_Page_Blossom1.jpg',
    crop: [0.5, 0.08, 0.45, 0.86],
    alt: 'Line drawing of the Blossom lamp with its petals open',
  },
  sections: [],
};
