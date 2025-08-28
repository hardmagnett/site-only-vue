<template>
  <div class="main-page">
    <p>main</p>

    <div v-html="md.render(pageMain.content)">

    </div>
  </div>

</template>

<script setup lang="ts">
import { } from 'vue'
import { pageMain } from '@/70_content/singularPages/pageMain';
import markdownit from 'markdown-it'
const md = markdownit()

</script>

<style scoped>
.main-page {}
</style>
