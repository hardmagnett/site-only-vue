<template>
  <div class="about-page">
    <h1>{{ pageAbout.title }}</h1>
    <p class="p--bigger">{{ pageAbout.descLong }}</p>
    <MarkdownRenderer :markdown="pageAbout.content" />
  </div>
</template>

<script setup lang="ts">
import { pageAbout } from '@/70_content/singularPages'
import MarkdownRenderer from '@/60_shared/ui/MarkDownRenderer/MarkdownRenderer.vue'
</script>

<style scoped>
.about-page {
}
</style>
