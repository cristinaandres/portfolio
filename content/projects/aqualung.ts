import type { Project } from '../types.ts';

// Transcribed from aqualung1-3.png. Only these three already-published images are shown
// (confidentiality); the PDF is not used.
export const aqualung: Project = {
  slug: 'aqualung',
  title: 'Aqualung',
  name: 'Aqualung Group',
  year: '2025',
  sector: 'Diving equipment',
  role: 'Sole UI designer, internship',
  tags: ['Website design', 'App design'],
  tools: ['Figma', 'Adobe XD'],
  color: '#002260',
  ink: '#FFFFFF',
  summary:
    'Sole UI designer for Aquasense, a CES 2025 Best of Innovation project: the full interface of its mobile app and dive computer.',
  cover: {
    id: 'cover',
    slide: 'aqualung1.png',
    crop: [0.5, 0.18, 0.5, 0.72],
    alt: 'Aqualung dive equipment: a regulator with a glowing sensor, a wrist dive computer showing depth and gas readings, and a phone showing the Aquasense app',
  },
  sections: [
    {
      kind: 'brief',
      heading: 'The internship',
      body: [
        'My internship at Aqualung Group was a defining step in my growth as a designer. As the sole UI designer for Aquasense — a CES 2025 Best of Innovation project — I created the full interface for both the mobile app and the dive computer.',
        'This experience helped me strengthen my skills in visual design, usability, and designing for real-world products.',
      ],
      figures: [],
      sources: ['aqualung1.png'],
    },
    {
      kind: 'interface',
      heading: 'Website',
      body: [
        'This project involved designing two new pages to be added to the company’s website. It was a straightforward task focused on consistency and brand alignment. I worked in Figma and followed the existing design system to ensure the new pages blended seamlessly with the rest of the site. The challenge was mainly to maintain visual coherence while integrating new content in a clean and intuitive way.',
      ],
      figures: [
        {
          id: 'website-desktop',
          slide: 'aqualung2.png',
          crop: [0.43, 0.07, 0.53, 0.93],
          alt: 'Desktop mock-ups of two Aqualung Group pages, "Technical & Training Center" and "Key figures", with the site’s blue header, underwater photography and a "Positioning" block',
          caption: 'The two new pages on desktop.',
        },
        {
          id: 'website-mobile',
          slide: 'aqualung2.png',
          crop: [0.15, 0.33, 0.24, 0.67],
          alt: 'The same two pages on mobile, stacked in a single column',
          caption: 'And on mobile.',
        },
      ],
      sources: ['aqualung2.png'],
    },
    {
      kind: 'interface',
      heading: 'Aquasense',
      body: [
        'The Aqualung app is a connected sports ecosystem that integrates Aqualung’s smart devices — such as dive computers and smartwatches — into a single app. The mobile application helps users track their physical activity, monitor metrics like sleep or stress, and sync their dive data directly from the dive computer.',
        'Designing the UI for both the app and the dive computer was a complex and evolving project. I worked in Adobe XD — a tool more limited compared to Figma — which made the workflow more challenging. The requirements changed frequently, with new features being added throughout the process, and the interface had to adapt to multiple devices and screen formats while maintaining consistency and clarity.',
        'Due to confidentiality and the fact that the product has not yet been released, only a limited selection of images can be shown.',
      ],
      figures: [
        {
          id: 'dive-computer',
          slide: 'aqualung3.png',
          crop: [0.085, 0.5, 0.345, 0.38],
          alt: 'Two dive computer screens on black: depth, tank pressure, gas time remaining and a no-decompression counter, then surface time and dive count, with coloured ascent bars',
          caption: 'Dive computer screens.',
        },
        {
          id: 'app',
          slide: 'aqualung3.png',
          crop: [0.5, 0.12, 0.415, 0.74],
          alt: 'Two phone screens of the Aquasense app: a diver profile with certifications and friends’ activities, and a home screen with monthly statistics, an activity breakdown, achievements and favourite dive places',
          caption: 'Aquasense app: profile and home.',
        },
      ],
      sources: ['aqualung3.png'],
    },
  ],
};
