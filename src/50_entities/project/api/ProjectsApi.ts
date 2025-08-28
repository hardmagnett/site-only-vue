import allProjectsRaw from '@/70_content/project'

class ProjectsApi {
  getAllProjects = () => {
    let allProjects = allProjectsRaw.map(project=> {
      return {
        ...project,
        imageMain: `/content/project/${project.id}/${project.imageMain}`
      }
    })
    return allProjects
  }
  getProjectBySlug = ({slug}: {slug: string}) => {
    // return allProjectsRaw.find(p=>p.slug === slug)
    return this.getAllProjects().find(p=>p.slug === slug)
  }
}

export { ProjectsApi }
