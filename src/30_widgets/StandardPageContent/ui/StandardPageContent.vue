<template>
  <div class="standard-page-content">
    <h1>{{ pageBasic.title }}</h1>
    <div v-html="$md.render(pageBasic.content)"></div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import type { PageBasic } from '@/50_entities/singularPages'
export interface Props {
  pageBasic: PageBasic
}
withDefaults(defineProps<Props>(), {})
</script>

<style scoped>
.standard-page-content {
}
</style>
