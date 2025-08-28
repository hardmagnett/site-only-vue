import type { ProjectPhaseQtyId, ProjectPhaseQty } from '@/50_entities/projectPhaseQty'
import type { MetaTags } from '@/60_shared/lib/metaTags'
import type { PageBasic } from '@/50_entities/singularPages'


export type Project = {
  id: string,
  projectPhaseQtyId: ProjectPhaseQtyId | null
  projectPhaseQty?: ProjectPhaseQty
} & PageBasic
