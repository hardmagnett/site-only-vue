import type { ProjectPhaseQtyId, ProjectPhaseQty } from '@/50_entities/projectPhaseQty'
import type { MetaTags } from '@/60_shared/lib/metaTags'


export type Project = {
  id: string,
  slug: string,
  title: string,
  descShort: string,
  descLong: string,
  meta: MetaTags,
  imageMain: string
  projectPhaseQtyId: ProjectPhaseQtyId | null
  projectPhaseQty?: ProjectPhaseQty
}
