import type { Project } from '../types.ts';

// Metadata only for now; the case study is transcribed in its own ticket.
export const ciclogreen: Project = {
  slug: 'ciclogreen',
  title: 'Ciclogreen',
  name: 'Ciclogreen',
  year: '2021',
  sector: 'Indoor farming',
  role: 'Product designer, team of five',
  tags: ['Product design', 'Design methodology'],
  color: '#3F5A3A',
  ink: '#FFFFFF',
  summary:
    'An indoor growing system reminiscent of a tree, designed by five designers following a design methodology within 60 days.',
  thumbnail: {
    id: 'thumbnail',
    slide: 'Portfolio_Page_Ciclogreen1.jpg',
    crop: [0.55, 0.03, 0.43, 0.97],
    alt: 'Render of Ciclogreen, a white tree-like column with planter trays on a wooden base',
  },
  sections: [],
};
