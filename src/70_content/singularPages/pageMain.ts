import type { PageMain } from '@/50_entities/singularPages'

import markdownContent from './pageMainContent.md?raw';

export const pageMain = {
  // content: 'Super Content for main page',
  content: markdownContent,
  imageMain: '',
  meta: {
    title: 'TITLE MAIN',
    description: 'DESK MAIN'
  },
  slug:'',
  descShort:'desc short',
  title: 'tisle',
  descLong: 'desc long'

} satisfies PageMain
