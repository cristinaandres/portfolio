import type { Project } from '../types.ts';

// Transcribed from curefab_1-3.png.
export const curefab: Project = {
  slug: 'curefab',
  title: 'Curefab',
  name: 'Curefab Technologies website',
  year: '2023–2024',
  sector: 'Medical technology, Germany',
  role: 'UX/UI designer, freelance',
  tags: ['Website redesign', 'UX/UI design'],
  color: '#22B78F',
  ink: '#0F2E25',
  summary:
    'Website redesign for Curefab Technologies, a German medtech company, keeping its brand identity present.',
  cover: {
    id: 'cover',
    slide: 'curefab_1.png',
    crop: [0.47, 0.08, 0.53, 0.9],
    alt: 'The redesigned Curefab Technologies website, Solutions page: a laboratory photo banner above grey tiles for research and product development, prototyping and feasibility studies, and physical measurement and simulations',
  },
  sections: [
    {
      kind: 'brief',
      heading: 'The project',
      body: [
        'Working on this project was one of the most enriching experiences for me. I learned a lot from the contact with companies and I was able to put into practice my knowledge about web design.',
        'I am very grateful to this company for trusting in my abilities even though I was just starting out.',
      ],
      figures: [],
      sources: ['curefab_1.png'],
    },
    {
      kind: 'identity',
      heading: 'Brand identity',
      body: [
        'One of the most important things for me when designing for a company is to make sure that their brand identity is present.',
        'In the case of Curefab GmbH, green is the most prominent color in their brand, although we also find grayscale colors and the basic colors black and white.',
        'On the other hand, the typography of the brand is Avenir, which is used with different sizes and thicknesses in order to create a hierarchy of texts.',
      ],
      figures: [
        {
          id: 'palette',
          slide: 'curefab_2.png',
          crop: [0.52, 0.11, 0.42, 0.34],
          alt: 'Curefab brand colours as swatches (green, light grey, dark grey, white, black) above the Avenir typeface in regular, bold and black weights',
          caption: 'Brand colours and typography.',
        },
        {
          id: 'home-tablet',
          slide: 'curefab_2.png',
          crop: [0.19, 0.5, 0.62, 0.5],
          alt: 'The redesigned home page on a tablet: logo and navigation, a laboratory photo banner, the Branchen section with icons for Medizintechnik, Forschung and Industrie, and a green band reading "Bring your ideas to life"',
        },
      ],
      sources: ['curefab_2.png'],
    },
    {
      kind: 'result',
      heading: 'The result',
      body: [
        'The result of this project was a more modern, user-friendly and adaptable website, always following the corporate image of the company.',
        'In addition the new website is much more complete now, it has new internal pages with more information about the company and presented in a more structured way.',
        'This design was later brought to life by Thomas Moser, a freelance website developer.',
      ],
      figures: [
        {
          id: 'responsive',
          slide: 'curefab_3.png',
          crop: [0.49, 0.29, 0.46, 0.65],
          alt: 'The redesigned home page on a tablet and a phone, the same sections adapted to each screen',
          caption: 'The home page on tablet and phone.',
        },
      ],
      sources: ['curefab_3.png'],
    },
  ],
};
