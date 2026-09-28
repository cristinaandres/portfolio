import type { Project } from '../types.ts';

// Transcribed from Portfolio_Page_Yokohama1-5. Slides 2–5 were headed "SmartWatch" by mistake.
export const punt: Project = {
  slug: 'punt',
  title: 'Punt',
  name: 'Yokohama sideboard for Punt',
  year: '2022–2023',
  sector: 'Furniture',
  role: 'Product designer, group project',
  tags: ['Product design', 'Prototyping'],
  tools: ['SolidWorks', 'Lumion'],
  color: '#B89B7A',
  ink: '#1F1B1A',
  summary:
    'A self-briefed sideboard proposal for the furniture company Punt, from forty sketches to planimetry, prototypes and renders.',
  thumbnail: {
    id: 'thumbnail',
    slide: 'Portfolio_Page_Yokohama1.jpg',
    crop: [0.505, 0, 0.495, 1],
    alt: 'Render of the Yokohama sideboard, a dark wooden cabinet with vertical slats, a lamp and dried grasses',
  },
  sections: [
    {
      kind: 'brief',
      heading: 'The brief',
      body: [
        'The aim of this project was to develop a proposal in the field of Contract and Home Furnishings. The project was conceived as a self-commissioning within a promotional strategy (self-imposed briefing).',
        'We had to design and professionally present a viable concept that could be presented to a real and specific company (chosen by the group) with the intention of getting the design produced by the company.',
      ],
      figures: [
        {
          id: 'hero',
          slide: 'Portfolio_Page_Yokohama1.jpg',
          crop: [0.505, 0, 0.495, 1],
          alt: 'Render of the Yokohama sideboard in a room: dark wood with vertical slats, a white top, a mushroom lamp and dried grasses in a woven vase',
        },
      ],
      sources: ['Portfolio_Page_Yokohama1.jpg'],
    },
    {
      kind: 'sketches',
      heading: 'Sketches',
      body: [
        'This is a selection of drawings from the first phase of this project, of the forty or so sketches required.',
      ],
      figures: [
        {
          id: 'sketches',
          slide: 'Portfolio_Page_Yokohama2.jpg',
          crop: [0, 0.2, 1, 0.61],
          alt: 'Pencil and coloured sketches of sideboard and shelving concepts, around a coloured drawing of the selected design in an entrance hall',
          caption: 'Concept sketches around the selected design.',
        },
      ],
      sources: ['Portfolio_Page_Yokohama2.jpg'],
    },
    {
      kind: 'planimetry',
      heading: 'Planimetry',
      body: [],
      figures: [
        {
          id: 'planimetry',
          slide: 'Portfolio_Page_Yokohama3.jpg',
          crop: [0.09, 0.13, 0.475, 0.675],
          alt: 'SolidWorks drawing sheet "Aparador Punt 1": plan, elevation, left profile, section B-B and details, dimensioned in centimetres',
          caption: 'Aparador Punt 1: 190 × 76.5 cm, scale 1:10.',
        },
        {
          id: 'parts-1',
          slide: 'Portfolio_Page_Yokohama3.jpg',
          crop: [0.563, 0, 0.33, 0.458],
          alt: 'SolidWorks parts sheet "Despiece 1": back and side edges, top surface, reinforcement and legs, dimensioned',
          caption: 'Despiece 1 (parts).',
        },
        {
          id: 'parts-2',
          slide: 'Portfolio_Page_Yokohama3.jpg',
          crop: [0.563, 0.473, 0.33, 0.465],
          alt: 'SolidWorks parts sheet "Despiece 2": front, back, top and bottom panels, decorative slats and sides, dimensioned',
          caption: 'Despiece 2 (parts).',
        },
      ],
      sources: ['Portfolio_Page_Yokohama3.jpg'],
    },
    {
      kind: 'prototype',
      heading: 'Prototypes',
      body: [],
      figures: [
        {
          id: 'scale-model',
          slide: 'Portfolio_Page_Yokohama4.jpg',
          crop: [0.148, 0.365, 0.312, 0.437],
          alt: 'Scale model of the sideboard in light wood with slatted doors, next to a model chair and a small blue figurine',
        },
        {
          id: 'white-prototype',
          slide: 'Portfolio_Page_Yokohama4.jpg',
          crop: [0.545, 0.375, 0.305, 0.418],
          alt: 'White prototype of the sideboard, with its slatted front and the top overhanging the legs',
        },
      ],
      sources: ['Portfolio_Page_Yokohama4.jpg'],
    },
    {
      kind: 'renders',
      heading: 'Renders',
      body: [],
      figures: [
        {
          id: 'render-lamp',
          slide: 'Portfolio_Page_Yokohama5.jpg',
          crop: [0.09, 0.268, 0.265, 0.662],
          alt: 'Render of one end of the sideboard with a white mushroom lamp and books on top',
        },
        {
          id: 'render-front',
          slide: 'Portfolio_Page_Yokohama5.jpg',
          crop: [0.367, 0.168, 0.265, 0.662],
          alt: 'Render of the slatted front of the sideboard in a beam of sunlight, on a woven rug',
        },
        {
          id: 'render-vase',
          slide: 'Portfolio_Page_Yokohama5.jpg',
          crop: [0.646, 0.076, 0.264, 0.66],
          alt: 'Render of the sideboard beside a tall woven vase of dried grasses',
        },
      ],
      sources: ['Portfolio_Page_Yokohama5.jpg'],
    },
  ],
};
