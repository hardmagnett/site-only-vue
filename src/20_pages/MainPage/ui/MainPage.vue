<template>
  <div class="main-page">
    <p>Галерея</p>
    <p>https://www.lightgalleryjs.com/</p>
    <h1>{{pageMain.title}}</h1>
    <p class="p--bigger">{{pageMain.descLong}}</p>
    <div v-html="$md.render(pageMain.content)"></div>


  </div>

</template>

<script setup lang="ts">
import { } from 'vue'
import { pageMain } from '@/70_content/singularPages/pageMain';
// import markdownit from 'markdown-it'
// const md = markdownit()

</script>

<style scoped>
.main-page {}
</style>
