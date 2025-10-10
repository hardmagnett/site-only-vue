import type { PageAbout } from '@/50_entities/singularPages'
import markdownContent from './pageAboutContent.md?raw'
export const pageAbout = {
  content: markdownContent,
  imageMain: '',
  meta: {
    title: 'TITLE ABOUT',
    description: 'DESK ABOUT',
  },
  slug: '',
  descShort: 'desc short',
  title: 'tisle',
  descLong: 'desc long',
} satisfies PageAbout
