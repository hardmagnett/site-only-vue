<template>
  <div class="project-page" v-if="project">
    <h1>{{ project.title }}</h1>
    <p>{{ project.descLong }}</p>
    <p v-if="project.projectPhaseQty">{{ project.projectPhaseQty.title }}</p>
    <img width="100" :src="project.imageMain" />

    <br>
    <br>
    <br>
    <p>
      Здесь нужно вытащить 6 похожих проектов.
      <br>
      Сначала с такими-же фазами, помещениями,
      <br>
      Если не хватает, то добавить только с такими-же фазами,
      <br>
      Если и их не хватает, то добить остальными.
    </p>
    <router-link
      :to="{
        name: 'project',
        params: { projectSlug: 'project-2' },
      }"
    >
      <p>project-2</p>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { type Project, ProjectsApi } from '@/50_entities/project'
import { getProjectMiddleware } from '@/20_pages/ProjectPage'
const route = useRoute()
const projectsApi = new ProjectsApi()

const getProject = () => {
  return projectsApi.getProjectBySlug({ slug: route.params.projectSlug as string }) as Project
}

const project = ref<Project>(getProject())

watch(
  () => route.params.projectSlug,
  () => {
    project.value = getProject()
  },
)

onBeforeRouteUpdate(getProjectMiddleware)
</script>

<style scoped>
.project-page {
}
</style>
