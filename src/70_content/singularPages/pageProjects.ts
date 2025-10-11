import type { PageProjects } from '@/50_entities/singularPages'

import markdownContent from './pageProjectsContent.md?raw'
export const pageProjects = {
  content: markdownContent,
  imageMain: '',
  meta: {
    title: 'TITLE PROJECTS',
    description: 'DESK PROJECTS',
  },
  slug: '',
  descShort: 'desc short',
  title: 'Реализованные проекты',
  descLong: 'desc long',
} satisfies PageProjects
