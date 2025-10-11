import type { PageBasic } from '@/50_entities/singularPages'
import markdownContent from './pageServiceEngineeringContent.md?raw'
export const pageServiceAssembly = {
  content: markdownContent,
  imageMain: '',
  meta: {
    title: 'Сборка электрощитов',
    description: '',
  },
  slug: '',
  descShort: '',
  descLong: '',
  title: 'Сборка электрощитов',
} satisfies PageBasic
