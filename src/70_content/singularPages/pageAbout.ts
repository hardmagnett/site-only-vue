import type { PageAbout } from '@/50_entities/singularPages'
import markdownContent from './pageAboutContent.md?raw'
export const pageAbout = {
  content: markdownContent,
  imageMain: '',
  meta: {
    title: 'Обо мне',
    description: 'Привет. Меня зовут Вадим Емцов.',
  },
  slug: '',
  descShort: 'Привет. Меня зовут Вадим Емцов.',
  title: 'Обо мне',
  descLong: 'Привет. Меня зовут Вадим Емцов.',
} satisfies PageAbout
