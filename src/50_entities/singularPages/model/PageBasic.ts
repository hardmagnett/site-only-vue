import type { MetaTags } from '@/60_shared/lib/metaTags'
// todo:: не всё из этих данных здесь нужно. Поудалять и отрефакторить.
export type PageBasic = {
  slug: string
  title: string
  descShort: string
  descLong: string
  meta: MetaTags
  imageMain: string
  content: string
}
