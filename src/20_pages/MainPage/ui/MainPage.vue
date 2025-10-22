<template>
  <div class="main-page">
    <h1>{{ pageMain.title }}</h1>
    <p class="p--bigger">{{ pageMain.descLong }}</p>
    <!--<div v-html="$md.render(pageMain.content)"></div>-->
    <MarkdownRenderer :markdown="pageMain.content" />
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import { pageMain } from '@/70_content/singularPages/pageMain'
import MarkdownRenderer from '@/60_shared/ui/MarkDownRenderer/MarkdownRenderer.vue'
</script>

<style scoped>
.main-page {
}
</style>
