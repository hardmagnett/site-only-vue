import allProjectsRaw from '@/70_content/project'
import allProjectPhaseQty from '@/70_content/projectPhaseQty'

class ProjectsApi {
  getAllProjects = () => {
    const allProjects = allProjectsRaw.map((project) => {
      return {
        ...project,
        imageMain: `/content/project/${project.id}/${project.imageMain}`,
        projectPhaseQty: allProjectPhaseQty.find((q) => q.id === project.projectPhaseQtyId),
      }
    })
    return allProjects
  }
  getProjectBySlug = ({ slug }: { slug: string }) => {
    // return allProjectsRaw.find(p=>p.slug === slug)
    return this.getAllProjects().find((p) => p.slug === slug)
  }
}

export { ProjectsApi }
