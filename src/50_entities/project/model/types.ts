import type { ProjectPhaseQtyId, ProjectPhaseQty } from '@/50_entities/projectPhaseQty'
import type { PageBasic } from '@/50_entities/singularPages'
import type { ProjectPlacement, ProjectPlacementId } from '@/50_entities/projectPlacement'

export type Project = {
  id: string
  hidden?: true
  linesQty: number // Если будет необходимость их не выводить, то можно использовать значение 0.
  // projectPhaseQtyId: ProjectPhaseQtyId | null
  projectPhaseQtyId: ProjectPhaseQtyId
  projectPhaseQty?: ProjectPhaseQty
  projectPlacementId: ProjectPlacementId
  projectPlacement?: ProjectPlacement
} & PageBasic
