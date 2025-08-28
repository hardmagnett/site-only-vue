import allProjects from '@/70_content/project'

class ProjectsApi {
  getAllProjects = () => {
    return allProjects
  }
  getProjectBySlug = ({slug}: {slug: string}) => {
    return allProjects.find(p=>p.slug === slug)
  }
}

export { ProjectsApi }
