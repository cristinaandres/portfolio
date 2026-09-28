import type { Project } from '../types.ts';

// Metadata only for now; the case study is transcribed in its own ticket.
export const aqualung: Project = {
  slug: 'aqualung',
  title: 'Aqualung',
  name: 'Aqualung Group',
  year: '2025',
  sector: 'Diving equipment',
  role: 'Sole UI designer, internship',
  tags: ['Website design', 'App design'],
  color: '#002260',
  ink: '#FFFFFF',
  summary:
    'Sole UI designer for Aquasense, a CES 2025 Best of Innovation project: the full interface of its mobile app and dive computer.',
  cover: {
    id: 'cover',
    slide: 'aqualung1.png',
    crop: [0.5, 0.18, 0.5, 0.72],
    alt: 'A dive computer, a wrist unit and a phone showing the Aquasense app',
  },
  sections: [],
};
