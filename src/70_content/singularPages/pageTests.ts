import type { PageAbout } from '@/50_entities/singularPages'
import markdownContent from './pageTestsContent.md?raw'
export const pageTests = {
  content: markdownContent,
  imageMain: '',
  meta: {
    title: 'Тестовая',
    description: 'Эта страница для тестов.',
  },
  slug: '',
  descShort: 'Эта страница для тестов.',
  title: 'Тестовая',
  descLong: 'Эта страница для тестов.',
} satisfies PageAbout
