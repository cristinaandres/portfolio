import type { Project } from '../types.ts';

// Transcribed from Portfolio_Page_Ciclogreen1-3.
export const ciclogreen: Project = {
  slug: 'ciclogreen',
  title: 'Ciclogreen',
  name: 'Ciclogreen, an indoor farming system',
  year: '2021',
  sector: 'Indoor farming',
  role: 'Product designer, team of five',
  tags: ['Product design', 'Design methodology'],
  color: '#3F5A3A',
  ink: '#FFFFFF',
  summary:
    'An indoor growing system reminiscent of a tree, designed by five designers following a design methodology within 60 days.',
  cover: {
    id: 'cover',
    slide: 'Portfolio_Page_Ciclogreen1.jpg',
    crop: [0.55, 0.03, 0.43, 0.97],
    alt: 'Render of Ciclogreen, a white tree-like column with planter trays on a wooden base',
  },
  sections: [
    {
      kind: 'brief',
      heading: 'The brief',
      body: [
        'Ciclogreen is an innovative indoor growing system. We wanted our product to evoke nature and that is why the shape is reminiscent of a tree.',
        'This is the outcome of the creativity of five designers with the mission to create an indoor growing system following a design methodology and performing all the relevant analysis (market, flows, forces, etc.) within 60 days.',
      ],
      figures: [],
      sources: ['Portfolio_Page_Ciclogreen1.jpg'],
    },
    {
      kind: 'sketches',
      heading: 'Design',
      body: [
        'After a thorough study of indoor growing systems, the priorities for our design were determined. Firstly, we needed to consider how the product would fit into the home environment, which meant considering both size and materials. The ability to adapt to different needs and ease of use were the other two priorities, which had to take into account, among other things, autonomy and cleanliness.',
        'With all these conditions in mind, we began to sketch different solutions until we arrived at the one shown below.',
      ],
      figures: [
        {
          id: 'sketches',
          slide: 'Portfolio_Page_Ciclogreen2.jpg',
          crop: [0.103, 0.445, 0.322, 0.455],
          alt: 'Annotated marker sketches in Spanish of the parts: central module, base, base door, water container, planter module, pot holders and LED light module',
        },
        {
          id: 'line-drawing',
          slide: 'Portfolio_Page_Ciclogreen2.jpg',
          crop: [0.493, 0, 0.424, 1],
          alt: 'White line drawing of Ciclogreen on black, with close-ups of a planter tray with grass, a light arm and the base',
        },
      ],
      sources: ['Portfolio_Page_Ciclogreen2.jpg'],
    },
    {
      kind: 'renders',
      heading: 'Render',
      body: [
        'Designed by:',
        {
          list: [
            'Cristina Andrés',
            'Irene Badía',
            'Remei Barber',
            'Daniel Albero',
            'Carmen Amorós',
          ],
        },
      ],
      figures: [
        {
          id: 'render',
          slide: 'Portfolio_Page_Ciclogreen3.jpg',
          crop: [0.4, 0.09, 0.3, 0.83],
          alt: 'Front render of Ciclogreen: a looped white column with two light arms and two transparent planter trays, on a round wooden base with a water tank',
        },
      ],
      sources: ['Portfolio_Page_Ciclogreen3.jpg'],
    },
  ],
};
