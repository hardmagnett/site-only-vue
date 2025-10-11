<template>
  <div class="standard-page-content">
    <p>title: {{pageBasic.title}}</p>
  </div>
</template>

<script setup lang="ts">
import { } from 'vue'
import type { PageBasic } from '@/50_entities/singularPages'
export interface Props {
  pageBasic: PageBasic
}
withDefaults(defineProps<Props>(), {})

</script>

<style scoped>
.standard-page-content {}
</style>
