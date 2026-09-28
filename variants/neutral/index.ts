import AboutPage from '@/components/about/AboutPage';
import ActivitiesIndex from '@/components/activities/ActivitiesIndex';
import ActivityPage from '@/components/activities/ActivityPage';
import NotFoundView from '@/components/NotFoundView';
import CaseStudy from '@/components/work/CaseStudy';
import type { VariantViews } from '../types';
import NeutralHome from './Home';
import NeutralShell from './Shell';

/** The plain rendering every variant starts from, until its own views replace these. */
export const neutralViews: VariantViews = {
  Shell: NeutralShell,
  Home: NeutralHome,
  CaseStudy,
  About: AboutPage,
  Activities: ActivitiesIndex,
  Activity: ActivityPage,
  NotFound: NotFoundView,
};
