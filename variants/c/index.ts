import type { VariantViews } from '../types';
import MuestrarioAbout from './About';
import MuestrarioActivities from './Activities';
import MuestrarioActivity from './Activity';
import MuestrarioCaseStudy from './CaseStudy';
import MuestrarioHome from './Home';
import MuestrarioNotFound from './NotFound';
import MuestrarioShell from './Shell';

// Variant C, Muestrario: a colour-swatch index with an editorial serif (docs/brief.md, direction C).
export const views: VariantViews = {
  Shell: MuestrarioShell,
  Home: MuestrarioHome,
  CaseStudy: MuestrarioCaseStudy,
  About: MuestrarioAbout,
  Activities: MuestrarioActivities,
  Activity: MuestrarioActivity,
  NotFound: MuestrarioNotFound,
};
