// Facts about Cristina from her CV (September 2025), the most recent source, plus her own
// words from her slides. The site never publishes her phone number.

export interface Role {
  title: string;
  organisation: string;
  place: string;
  period: string;
  note?: string;
}

export interface Study {
  title: string;
  school: string;
  place: string;
  period: string;
  note?: string;
}

export const profile = {
  location: 'Antibes, France',
  positioning: 'UX/UI & Product Designer',
  /** The /about introduction, in her voice: adapted from her CV summary and the site's bio. */
  bio: [
    "I'm a UX/UI and product designer with a foundation in industrial design engineering, based in Antibes.",
    "I have two years of hands-on experience designing intuitive and engaging interfaces, most recently as the sole UI designer for Aquasense at Aqualung Group. I'm a quick learner, eager to bring fresh ideas and a user-first perspective to every project, balancing form and function with attention to detail.",
  ],
  /** Her own words, from her MOCA Studio slide (Portfolio_cristina_page-0008). */
  curiousFact: 'A curious fact about me is that I like pandas a lot, like… a lot.',
  tools: [
    'Figma',
    'Adobe XD',
    'Sketch',
    'Photoshop',
    'Illustrator',
    'InDesign',
    'Lightroom',
    'Canva',
    'Blender',
    'SolidWorks',
  ],
  cv: '/pdf/CV.pdf',
  photo: {
    src: '/images/cristina.jpeg',
    width: 1200,
    height: 1600,
    alt: 'Portrait of Cristina Andrés',
  },
  experience: [
    {
      title: 'UX/UI Designer (internship)',
      organisation: 'Aqualung Group',
      place: 'Sophia Antipolis, France',
      period: 'Feb 2025 – Aug 2025',
      note: 'Sole UI designer for Aquasense, a CES 2025 Best of Innovation project: the full interface of the mobile app and the dive computer.',
    },
    {
      title: 'UX/UI Designer',
      organisation: 'Freelance',
      place: 'Strasbourg, France',
      period: 'Oct 2023 – Oct 2024',
      note: 'Including the website redesign for Curefab Technologies, working closely with developers.',
    },
    {
      title: 'Graphic Designer',
      organisation: 'Future Fibres Rigging Systems',
      place: 'Valencia, Spain',
      period: 'Jan 2022 – Dec 2022',
      note: 'Marketing materials for the racing industry, for print and digital media.',
    },
  ] satisfies Role[],
  education: [
    {
      title: 'Máster en Diseño Web',
      school: 'ESDESIGN Barcelona',
      place: 'Barcelona, Spain',
      period: 'Oct 2024 – Oct 2025',
    },
    {
      title: 'Industrial Design Engineering and Product Development',
      school: 'Universidad Politécnica de Valencia (UPV)',
      place: 'Valencia, Spain',
      period: 'Sep 2019 – Sep 2023',
      note: 'Erasmus 2021: Industrial Design Engineering, HE-Arc (HES-SO), Neuchâtel. Erasmus 2023: UX/UI Design, Hochschule Augsburg.',
    },
  ] satisfies Study[],
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'Catalan', level: 'Native' },
    { name: 'French', level: 'Native' },
    { name: 'English', level: 'Advanced' },
    { name: 'German', level: 'Elementary' },
  ],
} as const;
