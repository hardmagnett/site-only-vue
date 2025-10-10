import type { Project } from '@/50_entities/project/'

export default {
  id: '001',
  slug: 'project-1',
  title: 'Проект 1',
  meta: {
    title: 'Мета-заголовок проекта 1',
    description: 'Мета-описание проекта 1'
  },
  descShort: 'Короткое описание 1',
  descLong: 'Длинное описание 1',
  imageMain: 'img.jpg',
  content: '',
  projectPhaseQtyId: 1,
  projectPlacementId: 'flat'

} satisfies Project
