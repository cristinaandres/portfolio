import type { Project } from '../types.ts';

// Transcribed from Portfolio_cristina_page-0009 to 0013 (numbered "3" in her portfolio).
export const montezuma: Project = {
  slug: 'montezuma',
  title: 'Montezuma',
  name: 'Montezuma',
  year: '2022',
  sector: 'Fashion start-up',
  role: 'Marketing and packaging, class competition',
  tags: ['Marketing', 'Packaging', 'Competition'],
  color: '#91A399',
  ink: '#1F1B1A',
  summary:
    'Packaging, a website survey and a launch campaign for Montezuma, the future clothing brand that Dreamland presented to her marketing class.',
  cover: {
    id: 'cover',
    slide: 'Portfolio_cristina_page-0009.jpg',
    crop: [0.57, 0.08, 0.41, 0.87],
    alt: 'Two kraft shipping boxes printed with the Montezuma mask mascot and stamp-like illustrations, one open',
  },
  sections: [
    {
      kind: 'brief',
      heading: 'The brief',
      body: [
        'I had the opportunity to work with one of the most important catering companies in Spain, Dreamland, owner of restaurants such as Voltereta and Begin. The company came to our marketing class and presented us with a project for their future clothing brand “Montezuma”.',
        'As a start-up, they are looking to sell backpacks, t-shirts, sunglasses and caps. All this with a 100% online business model, focusing on the entire user experience.',
        'The objectives of the proposed challenge are the following:',
        {
          list: [
            'The packaging of each product category.',
            'The experience when they receive the product.',
            'Extras that can be added to the website.',
            'Launch campaign for the brand.',
          ],
        },
      ],
      figures: [],
      sources: ['Portfolio_cristina_page-0009.jpg', 'Portfolio_cristina_page-0010.jpg'],
    },
    {
      kind: 'packaging',
      heading: 'Packaging',
      body: [],
      figures: [
        {
          id: 'boxes',
          slide: 'Portfolio_cristina_page-0010.jpg',
          crop: [0.08, 0.54, 0.36, 0.33],
          alt: 'Two open kraft boxes printed with the Montezuma mask, a torii gate and a pine tree in postage-stamp frames',
          caption: 'This is our proposal for the packaging design.',
        },
        {
          id: 'box-ticket',
          slide: 'Portfolio_cristina_page-0010.jpg',
          crop: [0.57, 0.29, 0.33, 0.71],
          alt: 'An open Montezuma box holding a travel-ticket-style card and a "be montezuma." leaflet with photos of camping and campfires',
        },
        {
          id: 'die-line',
          slide: 'Portfolio_cristina_page-0011.jpg',
          crop: [0.07, 0.14, 0.36, 0.8],
          alt: 'Flat die-cut template of the box, with fold lines and dimensions, for 3 mm board',
        },
        {
          id: 'opening',
          slide: 'Portfolio_cristina_page-0011.jpg',
          crop: [0.66, 0.14, 0.31, 0.44],
          alt: 'Six line drawings showing step by step how to open the box and remove its cover',
          caption: 'Instructions for removing the cover.',
        },
        {
          id: 'box-renders',
          slide: 'Portfolio_cristina_page-0011.jpg',
          crop: [0.56, 0.62, 0.41, 0.35],
          alt: 'Renders of the box open without its cover and closed with the mascot on the lid',
        },
      ],
      sources: ['Portfolio_cristina_page-0010.jpg', 'Portfolio_cristina_page-0011.jpg'],
    },
    {
      kind: 'interface',
      heading: 'Website',
      body: [
        'For extras that could be added to the website we designed a survey that tells you “what kind of traveller you are”. To give a complete picture of the survey, we did both the web design and a battery of questions and traveller types. The type of traveller would later be reflected in the “monteticket” we have seen above.',
        'Here are some mockups of how the website would have looked like in different devices.',
      ],
      figures: [
        {
          id: 'survey',
          slide: 'Portfolio_cristina_page-0012.jpg',
          crop: [0.04, 0.49, 0.42, 0.405],
          alt: 'Desktop page of the survey in Spanish, "¿Qué tipo de viajero eres?", with a progress bar, one question and three answer buttons, on a peach background patterned with caps, sunglasses and backpacks',
          caption: 'Survey design.',
        },
        {
          id: 'devices',
          slide: 'Portfolio_cristina_page-0012.jpg',
          crop: [0.62, 0, 0.38, 1],
          alt: 'The survey mocked up on a phone, a desktop monitor and a laptop',
        },
      ],
      sources: ['Portfolio_cristina_page-0012.jpg'],
    },
    {
      kind: 'campaign',
      heading: 'Launching campaign',
      body: [
        'Several ideas were proposed for the launch campaign: social media strategies, promotional stands, games with users to attract the attention of the target audience, etc.',
        'As this is more a design portfolio than a marketing one, I would just add some social media mock-ups and posters created for this.',
      ],
      figures: [
        {
          id: 'social',
          slide: 'Portfolio_cristina_page-0013.jpg',
          crop: [0.035, 0.5, 0.425, 0.375],
          alt: 'Mock-ups of the Montezuma Instagram profile, on a phone held in a hand and as a flat screen, with story highlights and a grid of campfire and travel photos',
        },
        {
          id: 'posters',
          slide: 'Portfolio_cristina_page-0013.jpg',
          crop: [0.56, 0, 0.41, 0.9],
          alt: 'Two hanging posters: "Vive, explora, montezuma" over a photo of two friends cycling at sunset, announcing a stand at Plaza de España on 20–23 January, and "Be real, be brave, be you" with people jumping off a rock into the sea',
        },
      ],
      sources: ['Portfolio_cristina_page-0013.jpg'],
    },
  ],
};
