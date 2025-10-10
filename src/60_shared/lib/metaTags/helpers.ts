import type { MetaTags } from '@/60_shared/lib/metaTags/types.ts'

export const setMetaTags = (metaTags: MetaTags) => {
  document.title = metaTags.title

  const descriptionElement = document.querySelector(
    'head meta[name="description"]',
  ) as HTMLMetaElement | null
  if (descriptionElement) {
    descriptionElement.setAttribute('content', metaTags.description)
  }
}
