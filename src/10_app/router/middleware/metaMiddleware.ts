import type { RouteLocationNormalized } from 'vue-router'

export default async (to: RouteLocationNormalized): Promise<void> => {
  const titleDefault = 'Default Title';
  const descriptionDefault = 'Default Description';

  const {
    title: titleFromRoute,
    description: descriptionFromRoute
  } = to.meta as { title?: string; description?: string };

  document.title = titleFromRoute || titleDefault;

  const descriptionElement = document.querySelector('head meta[name="description"]') as HTMLMetaElement | null;
  if (descriptionElement) {
    descriptionElement.setAttribute('content', descriptionFromRoute || descriptionDefault);
  }
};
