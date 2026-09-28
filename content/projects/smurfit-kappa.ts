import type { Project } from '../types.ts';

// Transcribed from Portfolio_cristina_page-0014 to 0017 (numbered "4" in her portfolio).
// Slide 15 was headed "Ares Domus / Packagin Design" by mistake.
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
    alt: 'The Pipas bulk dispenser, a tall sage and cream cardboard column for 5 kg of sunflower seeds with a sliding dispensing lever',
  },
  sections: [
    {
      kind: 'brief',
      heading: 'The brief',
      body: [
        'Last year, I was lucky enough to be able to collaborate in a class with Smurfit Kappa, one of the most powerful packaging companies. With my group we worked for 4 months to design the solution for one of the 4 challenges they presented.',
        'Design of a packaging for bulk solid product for retailers.',
        'Requirements:',
        {
          list: [
            'Bulk product drop avoidance / quantity drop control.',
            'Opening and closing system.',
            'Maintain product hygiene or obsolescence.',
            'Approximate weight: 5 kg.',
            'Example products: cereals, dried fruits, jelly beans, chocolates (product of choice).',
            'Proposed graphic design.',
          ],
        },
      ],
      figures: [],
      sources: ['Portfolio_cristina_page-0014.jpg', 'Portfolio_cristina_page-0015.jpg'],
    },
    {
      kind: 'packaging',
      heading: 'Packaging design',
      body: [],
      figures: [
        {
          id: 'die-line',
          slide: 'Portfolio_cristina_page-0015.jpg',
          crop: [0.38, 0.1, 0.29, 0.84],
          alt: 'Dimensioned die-cut template of the dispenser, 1011 high by 620 wide, with a slot for the dispensing lever',
          caption: 'Packaging design.',
        },
        {
          id: 'top-view',
          slide: 'Portfolio_cristina_page-0015.jpg',
          crop: [0.26, 0.55, 0.13, 0.39],
          alt: 'Dimensioned top view of the dispenser, 207 by 177',
        },
        {
          id: 'dispenser',
          slide: 'Portfolio_cristina_page-0015.jpg',
          crop: [0.68, 0.11, 0.32, 0.79],
          alt: 'Line drawings of the dispenser system: the column, how the top opens, and a sliding drawer with springs (muelles), lid (tapa) and handle (mango) that releases the product',
          caption: 'Dispenser system.',
        },
      ],
      sources: ['Portfolio_cristina_page-0015.jpg'],
    },
    {
      kind: 'identity',
      heading: 'Graphic design',
      body: [
        'Once we had designed the shape of the packaging and its dispenser system, we moved on to the graphic design. Our proposal consisted of a somewhat nostalgic retro design reminiscent of the time when only bulk sales existed.',
      ],
      figures: [
        {
          id: 'moodboard',
          slide: 'Portfolio_cristina_page-0016.jpg',
          crop: [0.05, 0.38, 0.39, 0.55],
          alt: 'Moodboard of retro packaging and serif typefaces with the keywords Natural, Artesanal and Ecológico, and the line (in Spanish) "a design that takes you back to when there were only bulk sales and local products"',
        },
        {
          id: 'graphic-die-line',
          slide: 'Portfolio_cristina_page-0016.jpg',
          crop: [0.56, 0.1, 0.44, 0.9],
          alt: 'The printed die-cut template for pistachios, "Producto local, 100% natural, 5 kg", beside smaller versions for other nuts',
        },
      ],
      sources: ['Portfolio_cristina_page-0016.jpg'],
    },
    {
      kind: 'result',
      heading: 'Final work',
      body: [],
      figures: [
        {
          id: 'final',
          slide: 'Portfolio_cristina_page-0017.jpg',
          crop: [0.07, 0.1, 0.8, 0.87],
          alt: 'Three renders of the finished Pipas dispenser from different angles, showing the front, the nutrition table, the Castilla-La Mancha origin panel and the sliding lever',
        },
      ],
      sources: ['Portfolio_cristina_page-0017.jpg'],
    },
  ],
};
