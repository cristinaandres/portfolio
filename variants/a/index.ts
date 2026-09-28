import type { VariantViews } from '../types';
import About from './About';
import { PlanimetriaActivities, PlanimetriaActivity } from './Activities';
import CaseStudy from './CaseStudy';
import Home from './Home';
import NotFound from './NotFound';
import Shell from './Shell';

// Variant A (Planimetría): each project reads like her engineering documentation.
export const views: VariantViews = {
  Shell,
  Home,
  CaseStudy,
  About,
  Activities: PlanimetriaActivities,
  Activity: PlanimetriaActivity,
  NotFound,
};
