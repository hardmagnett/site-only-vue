import type { PageMain } from '@/50_entities/singularPages'

import markdownContent from './pageMainContent.md?raw'

export const pageMain = {
  content: markdownContent,
  imageMain: '',
  meta: {
    title: 'Электрощиты на заказ',
    description:
      'Проектирование и сборка электрощитов для квартир и домов по индивидуальным заказам.',
  },
  slug: '',
  title: 'Электрощиты на заказ',
  descShort: 'desc short',
  descLong: 'Проектирование и сборка электрощитов для квартир и домов по индивидуальным заказам.',
} satisfies PageMain
