import type { PageBasic } from '@/50_entities/singularPages'
import markdownContent from './pageServiceEngineeringContent.md?raw'
export const pageServiceEngineering = {
  content: markdownContent,
  imageMain: '',
  meta: {
    title: 'Проектирование электрощитов',
    description: '',
  },
  slug: '',
  descShort: '',
  descLong: '',
  title: 'Проектирование электрощитов',
} satisfies PageBasic
