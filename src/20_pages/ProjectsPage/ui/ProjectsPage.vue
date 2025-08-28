<template>
  <div class="projects-page">
    <h1>projectS</h1>
    <div v-for="project in allProjects" :key="project.slug">
      <router-link :to="{
        name: 'project',
        params: { projectSlug: project.slug }
      }">
        <p>{{project.title}}</p>
      </router-link>
      <p>{{project.descShort}}</p>
    </div>
    <hr>
  </div>
</template>

<script setup lang="ts">
import { } from 'vue'
import { ProjectsApi } from '@/50_entities/project'

const projectsApi = new ProjectsApi()
let allProjects = projectsApi.getAllProjects()


</script>

<style scoped>
.projects-page {}
</style>
