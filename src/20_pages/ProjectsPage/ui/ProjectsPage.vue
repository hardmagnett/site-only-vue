<template>
  <div class="projects-page">
    <h1>{{ pageProjects.title }}</h1>
    <MarkdownRenderer :markdown="pageProjects.content" />

    <div v-for="project in allProjects" :key="project.slug">
      <hr />
      <router-link
        :to="{
          name: 'project',
          params: { projectSlug: project.slug },
        }"
      >
        <p>{{ project.title }}</p>
      </router-link>
      <p>{{ project.descShort }}</p>
      <p v-if="project.projectPhaseQty">{{ project.projectPhaseQty.title }}</p>
      <img width="40" :src="project.imageMain" />
      <hr />
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import { ProjectsApi } from '@/50_entities/project'
import { pageProjects } from '@/70_content/singularPages'
import MarkdownRenderer from '@/60_shared/ui/MarkDownRenderer/MarkdownRenderer.vue'

const projectsApi = new ProjectsApi()
const allProjects = projectsApi.getAllProjects()
</script>

<style scoped>
.projects-page {
}
</style>
