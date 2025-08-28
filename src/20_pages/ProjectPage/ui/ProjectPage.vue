<template>
  <div class="project-page" v-if="project">
    <h1>{{project.title}}</h1>
    <p>{{project.descLong}}</p>
    <p v-if="project.projectPhaseQty">{{project.projectPhaseQty.title}}</p>
    <img width="100" :src="project.imageMain">

    <router-link :to="{
        name: 'project',
        params: { projectSlug: 'project-2' }
      }">
      <p>project-2</p>
    </router-link>

  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate  } from 'vue-router';
import { type Project, ProjectsApi } from '@/50_entities/project'
import { setMetaTags } from '@/60_shared/lib/metaTags'
const route = useRoute();
const router = useRouter();
const projectsApi = new ProjectsApi()

let project = ref<Project|null>(null)


const getProject = (slug: string)=>{
  const projectThatFound = projectsApi.getProjectBySlug({slug: slug})
  if (!projectThatFound) {
    router.push({name: 'NotFound'})
  }
  if (projectThatFound) {
    project.value = projectThatFound
    setMetaTags(project.value.meta)
  }
}

getProject(route.params.projectSlug as string)

onBeforeRouteUpdate(async (to, from)=>{
  getProject(to.params.projectSlug as string)
})

</script>

<style scoped>
.project-page {}
</style>
