import type { Project } from '../types.ts';

// Metadata only for now; the case study is transcribed in its own ticket.
export const sakana: Project = {
  slug: 'sakana',
  title: 'Sakana',
  name: 'Sakana, a Swiss watch',
  year: '2022',
  sector: 'Watchmaking, HE-Arc',
  role: 'Product and graphic design, technical drawing',
  tags: ['Product design', 'Graphic design', 'Planimetry'],
  color: '#597177',
  ink: '#FFFFFF',
  summary:
    'A wristwatch designed following the process of a Swiss watch designer, during her Erasmus at HE-Arc in Switzerland.',
  thumbnail: {
    id: 'thumbnail',
    slide: 'Portfolio_cristina_page-0018.jpg',
    crop: [0.58, 0.12, 0.4, 0.8],
    alt: 'Line drawing of two koi fish above the word Sakana',
  },
  sections: [],
};
