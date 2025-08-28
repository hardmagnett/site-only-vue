import { setMetaTags } from '@/60_shared/lib/metaTags'
import { ProjectsApi } from '@/50_entities/project'
import {
  useRouter,
  type RouteLocationNormalized
} from 'vue-router'
const projectsApi = new ProjectsApi()



export const getProjectMiddleware = (to: RouteLocationNormalized)=>{
  const router = useRouter();
  let slug = to.params.projectSlug as string
  const projectThatFound = projectsApi.getProjectBySlug({slug: slug})
  if (!projectThatFound) {
    router.push({name: 'NotFound'})
  }
  if (projectThatFound) {
    setMetaTags(projectThatFound.meta)
  }
}
