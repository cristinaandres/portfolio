import type { Project } from '../types.ts';

// Transcribed from Portfolio_Page_Blossom1-4. The manual is public/attached/Blossom_Manual_A4.pdf.
export const blossom: Project = {
  slug: 'blossom',
  title: 'Blossom',
  name: 'Blossom, a flower-shaped lamp',
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
  sections: [
    {
      kind: 'brief',
      heading: 'The brief',
      body: [
        'Blossom is a flower-shaped lamp with articulated petals that allow to graduate the light intensity. This design is the result of an advanced research on lamps and laser cutting design carried out by a group of five designers.',
        {
          quote:
            'The logo was designed by me a little later after the project was finalised. I created it because I thought that such a rare lamp needed an identity of its own.',
        },
      ],
      figures: [],
      sources: ['Portfolio_Page_Blossom1.jpg'],
    },
    {
      kind: 'sketches',
      heading: 'Design',
      body: [
        'Objective: Develop a lighting solution that can be built by using laser cutting.',
        'Our proposal:',
        {
          list: [
            'A table lamp in the shape of a flower.',
            'Petals with articulation to represent the open and closed flower.',
            'Mechanism based on the use of wooden rods to move the petals by levering.',
            'By rotating the base of the lamp the petals rise or lower gradually.',
            'Design that allows light to pass through the 5 inner petals (simple dot design).',
          ],
        },
      ],
      figures: [
        {
          id: 'sketches',
          slide: 'Portfolio_Page_Blossom2.jpg',
          crop: [0.51, 0.3, 0.19, 0.53],
          alt: 'Pencil sketches of the lamp, titled "Bocetos lámpara": the flower open and closed, seen from the side and from above, and a single petal',
        },
        {
          id: 'render',
          slide: 'Portfolio_Page_Blossom2.jpg',
          crop: [0.7, 0.3, 0.21, 0.53],
          alt: 'Render of the lamp in dusty pink, petals open around a small bulb, casting a petal-shaped shadow',
        },
      ],
      sources: ['Portfolio_Page_Blossom2.jpg'],
    },
    {
      kind: 'prototype',
      heading: 'Prototype',
      body: [
        'The lamp was developed as a group project by:',
        {
          list: [
            'Cristina Andrés',
            'Francisco Gómez',
            'Esther Killeen',
            'Noelia Montrós',
            'Aitana Sánchez',
          ],
        },
      ],
      figures: [
        {
          id: 'prototype',
          slide: 'Portfolio_Page_Blossom3.jpg',
          crop: [0.36, 0.18, 0.3, 0.6],
          alt: 'The laser-cut wooden prototype lit in the dark, light shining through the lattice-cut petals',
        },
      ],
      sources: ['Portfolio_Page_Blossom3.jpg'],
    },
    {
      kind: 'result',
      heading: 'Manual',
      body: [],
      figures: [
        {
          id: 'manual',
          slide: 'Portfolio_Page_Blossom4.jpg',
          crop: [0.1, 0.29, 0.8, 0.54],
          alt: 'The five pages of the assembly manual side by side: cover, numbered parts list, and exploded-view assembly steps 1 to 8',
        },
      ],
      sources: ['Portfolio_Page_Blossom4.jpg'],
    },
  ],
  downloads: [{ label: 'Assembly manual (PDF, 5 pages)', href: '/attached/Blossom_Manual_A4.pdf' }],
};
