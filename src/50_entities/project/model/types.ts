import type { ProjectPhaseQtyId, ProjectPhaseQty } from '@/50_entities/projectPhaseQty'

export type Project = {
  id: string,
  slug: string,
  title: string,
  descShort: string,
  descLong: string,
  imageMain: string
  projectPhaseQtyId: ProjectPhaseQtyId | null
  projectPhaseQty?: ProjectPhaseQty
}
