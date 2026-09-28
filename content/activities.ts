// Her personal side work (CONTEXT.md: Activities). Originals live in assets/activities/;
// `npm run images` writes the recompressed copies to public/images/activities/.

export interface ActivityImage {
  /** Names the generated file: /images/activities/<id>.webp. */
  id: string;
  /** Original file, relative to assets/activities/. */
  source: string;
  /** Empty for decorative images. */
  alt: string;
  maxWidth?: number;
}

export interface Activity {
  slug: 'blender' | 'animal-crossing';
  title: string;
  /** The card on /activities. */
  card: ActivityImage;
  /** A decorative backdrop for the activity's page. */
  backdrop: ActivityImage;
  images: readonly ActivityImage[];
}

export const activities: readonly Activity[] = [
  {
    slug: 'blender',
    title: '3D Modeling',
    card: { id: 'blender-card', source: 'blender-viewport.png', alt: '', maxWidth: 600 },
    backdrop: { id: 'pink-clouds', source: 'pink-clouds.png', alt: '', maxWidth: 2560 },
    images: [
      {
        id: 'deskroom',
        source: 'deskroom.png',
        alt: 'Her isometric desk room modelled in Blender: a pink chair at a white desk with a monitor, shelves, hanging plants, a round rug and a pale wooden floor',
      },
    ],
  },
  {
    slug: 'animal-crossing',
    title: 'Animal Crossing',
    card: { id: 'animal-crossing-card', source: 'leaf-pattern.png', alt: '', maxWidth: 600 },
    backdrop: {
      id: 'animal-crossing-landscape',
      source: 'animal-crossing-landscape.png',
      alt: '',
      maxWidth: 1440,
    },
    images: [
      {
        id: 'animal-crossing-01',
        source: 'animal-crossing/animal_crossing01.jpeg',
        alt: 'Her character fishing from a little snowy island in a heart-shaped pond, surrounded by hyacinths',
      },
      {
        id: 'animal-crossing-02',
        source: 'animal-crossing/animal_crossing02.jpeg',
        alt: 'A Japanese-style garden with bamboo, a stone pond and a thatched gate, her character waving',
      },
      {
        id: 'animal-crossing-03',
        source: 'animal-crossing/animal_crossing03.jpeg',
        alt: 'A little shop with a MiniNook sign, striped awnings and flowerbeds, her character at the door',
      },
      {
        id: 'animal-crossing-04',
        source: 'animal-crossing/animal_crossing04.jpeg',
        alt: 'A café terrace by a waterfall, her character smiling over a plate of pancakes',
      },
      {
        id: 'animal-crossing-05',
        source: 'animal-crossing/animal_crossing05.jpeg',
        alt: 'A garden terrace with lattice screens and spiral topiaries, her character sitting at a bistro table',
      },
      {
        id: 'animal-crossing-06',
        source: 'animal-crossing/animal_crossing06.jpeg',
        alt: 'The café terrace again, her character at the table with pancakes and a coffee menu board',
      },
      {
        id: 'animal-crossing-07',
        source: 'animal-crossing/animal_crossing07.jpeg',
        alt: 'A castle courtyard with a carousel and a balloon cart, her character looking up',
      },
    ],
  },
];

/** The Animal Crossing logo shown on its page. */
export const animalCrossingLogo: ActivityImage = {
  id: 'animal-crossing-logo',
  source: 'animal-crossing-logo.png',
  alt: 'Animal Crossing logo',
  maxWidth: 600,
};
