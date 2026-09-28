// Facts about Cristina from her CV (September 2025), the most recent source.
// The site never publishes her phone number.

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
  experience: [
    {
      title: 'UX/UI Designer (internship)',
      organisation: 'Aqualung Group',
      place: 'Sophia Antipolis, France',
      period: 'Feb 2025 – Aug 2025',
    },
    {
      title: 'UX/UI Designer',
      organisation: 'Freelance',
      place: 'Strasbourg, France',
      period: 'Oct 2023 – Oct 2024',
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
