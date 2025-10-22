<template>
  <div class="standard-page-content">
    <h1>{{ pageBasic.title }}</h1>
    <!--<div v-html="$md.render(pageBasic.content)"></div>-->
    <MarkdownRenderer :markdown="pageBasic.content" />
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import type { PageBasic } from '@/50_entities/singularPages'
import MarkdownRenderer from '@/60_shared/ui/MarkDownRenderer/MarkdownRenderer.vue'
export interface Props {
  pageBasic: PageBasic
}
withDefaults(defineProps<Props>(), {})
</script>

<style scoped>
.standard-page-content {
}
</style>
