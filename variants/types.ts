import type { ComponentType, ReactNode } from 'react';
import type { Activity, Project } from '@/content';

/** Everything a variant renders. Routes fetch the content and hand the same props to every variant. */
export interface VariantViews {
  /** Header, navigation, footer and contact trigger around every page. */
  Shell: ComponentType<{ children: ReactNode }>;
  Home: ComponentType<{ projects: readonly Project[] }>;
  CaseStudy: ComponentType<{ project: Project; previous: Project; next: Project }>;
  About: ComponentType;
  Activities: ComponentType<{ activities: readonly Activity[] }>;
  Activity: ComponentType<{ activity: Activity }>;
  NotFound: ComponentType;
}
