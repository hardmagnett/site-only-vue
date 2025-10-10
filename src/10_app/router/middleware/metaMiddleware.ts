import type { RouteLocationNormalized } from 'vue-router'
import { setMetaTags } from '@/60_shared/lib/metaTags'

export default async (to: RouteLocationNormalized): Promise<void> => {
  // console.log('in router')
  const titleDefault = 'Default Title';
  const descriptionDefault = 'Default Description';

  const {
    title: titleFromRoute,
    description: descriptionFromRoute
  } = to.meta as { title?: string; description?: string };

  setMetaTags({
    title: titleFromRoute || titleDefault,
    description: descriptionFromRoute || descriptionDefault
  })
};
