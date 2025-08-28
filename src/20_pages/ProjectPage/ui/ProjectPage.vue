<template>
  <div class="project-page" v-if="project">
    <h1>{{project.title}}</h1>
    <p>{{project.descLong}}</p>
    <p v-if="project.projectPhaseQty">{{project.projectPhaseQty.title}}</p>
    <img width="100" :src="project.imageMain">

  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { type Project, ProjectsApi } from '@/50_entities/project'
const route = useRoute();
const router = useRouter();
const projectsApi = new ProjectsApi()

let project = ref<Project|null>(null)

onBeforeMount(()=>{
  let slug = route.params.projectSlug as string ?? '' as string
  const projectThatFound = projectsApi.getProjectBySlug({slug: slug})
  // console.log(projectThatFound); console.log('^...projectThatFound:')
  if (!projectThatFound) {
    router.push({name: 'NotFound', replace: false })
  }
  if (projectThatFound) {
    project.value = projectThatFound
  }


})

</script>

<style scoped>
.project-page {}
</style>
