<template>
  <div class="about-page">
    <h1>{{ pageAbout.title }}</h1>
    <p class="p--bigger">{{ pageAbout.descLong }}</p>
    <div v-html="$md.render(pageAbout.content)"></div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import { pageAbout } from '@/70_content/singularPages'
</script>

<style scoped>
.about-page {
}
</style>
