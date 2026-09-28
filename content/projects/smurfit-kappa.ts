import type { Project } from '../types.ts';

// Metadata only for now; the case study is transcribed in its own ticket.
export const smurfitKappa: Project = {
  slug: 'smurfit-kappa',
  title: 'Smurfit Kappa',
  name: 'Smurfit Kappa',
  year: '2022',
  sector: 'Packaging',
  role: 'Packaging and graphic design, group competition',
  tags: ['Packaging', 'Graphic design', 'Competition'],
  color: '#E8DCC4',
  ink: '#1F1B1A',
  summary:
    "Four months with her group answering one of Smurfit Kappa's four challenges: the Pipas bulk dispenser.",
  cover: {
    id: 'cover',
    slide: 'Portfolio_cristina_page-0014.jpg',
    crop: [0.62, 0.12, 0.3, 0.84],
    alt: 'The Pipas bulk dispenser, a tall printed cardboard column holding 5 kg',
  },
  sections: [],
};
