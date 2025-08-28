import type { Project } from '@/50_entities/project/'

export default {
  id: '002',
  slug: 'project-2',
  title: 'Проект 2',
  descShort: 'Короткое описание 2',
  descLong: 'Длинное описание 2',
  meta: {
    title: 'Мета-заголовок проекта 2',
    description: 'Мета-описание проекта 2'
  },
  imageMain: '/img.jpg',
  projectPhaseQtyId: null
} satisfies Project
