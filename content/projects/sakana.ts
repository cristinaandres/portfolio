import type { Project } from '../types.ts';

// Transcribed from Portfolio_cristina_page-0018 to 0020 (slides headed "Swiss Watch").
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
  cover: {
    id: 'cover',
    slide: 'Portfolio_cristina_page-0018.jpg',
    crop: [0.58, 0.12, 0.4, 0.8],
    alt: 'Line drawing of two koi fish above the word Sakana',
  },
  sections: [
    {
      kind: 'brief',
      heading: 'The brief',
      body: [
        'This was definitely the project I enjoyed the most during my Erasmus in Switzerland. I was asked to design a wristwatch following the process of a Swiss watch designer while learning the techniques in his own country.',
        'The project was divided into two phases. I carried the first one out along with my classmate and friend, Latifa Qatrani. The second part was to do individually.',
      ],
      figures: [],
      sources: ['Portfolio_cristina_page-0018.jpg'],
    },
    {
      kind: 'result',
      heading: 'Product design',
      body: [
        'The result to obtain at the end of this project was an "affiche" of the clock through which the emotional background of the design could be understood. In addition, a technical sheet had to be drawn up with the specifications needed to build the watch.',
      ],
      figures: [
        {
          id: 'affiche',
          slide: 'Portfolio_cristina_page-0019.jpg',
          crop: [0.25, 0.115, 0.684, 0.745],
          alt: 'The Sakana affiche: a watch with a koi on its dial and a grey woven strap, over a teal seigaiha wave pattern, with the koi logo and "Andrés Cristina 09.02.2022"',
        },
      ],
      sources: ['Portfolio_cristina_page-0019.jpg'],
    },
    {
      kind: 'planimetry',
      heading: 'Technical information',
      body: [
        {
          list: [
            'Mouvement: RONDA normtech 6003.D, quartz analogique',
            'Ouverture: Ø 41.8 mm',
            'Hauteur: 7 mm',
            'Boîtier: acier poli',
            'Cadran: étampé',
            'Bracelet: nylon',
            'Glace: saphir anti-reflet',
          ],
        },
      ],
      figures: [
        {
          id: 'technical-sheet',
          slide: 'Portfolio_cristina_page-0020.jpg',
          crop: [0.27, 0.03, 0.66, 0.94],
          alt: 'Technical sheet of the Sakana watch: front and side views at scale 2:1, section A-A at 4:1, detail B at 8:1, a perspective view and the technical characteristics',
          caption: 'Technical sheet: Ø 41.8 mm case, 7 mm high.',
        },
      ],
      sources: ['Portfolio_cristina_page-0020.jpg'],
    },
  ],
};
