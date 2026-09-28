import type { VariantViews } from '../types';
import IslaAbout from './About';
import IslaActivities from './Activities';
import IslaActivity from './Activity';
import IslaCaseStudy from './CaseStudy';
import IslaHome from './Home';
import IslaNotFound from './NotFound';
import IslaShell from './Shell';

// Variant B (Isla): a cozy pastel world. Her desk room leads to the work; All work is always there.
export const views: VariantViews = {
  Shell: IslaShell,
  Home: IslaHome,
  CaseStudy: IslaCaseStudy,
  About: IslaAbout,
  Activities: IslaActivities,
  Activity: IslaActivity,
  NotFound: IslaNotFound,
};
