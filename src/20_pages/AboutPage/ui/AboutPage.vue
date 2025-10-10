<template>
  <div class="about-page">
    <h1>{{pageAbout.title}}</h1>
    <p class="p--bigger">{{pageAbout.descLong}}</p>
    <!--<p class="p&#45;&#45;bigger">{{foo}}</p>-->
    <!--<div v-html="md.render(pageAbout.content)"></div>-->
    <!--<div v-html="$renderMarkDown(pageAbout.content)"></div>-->
    <div v-html="$md.render(pageAbout.content)"></div>
  </div>
</template>

<script setup lang="ts">
import { } from 'vue'
import { pageAbout } from '@/70_content/singularPages'
// import markdownit from 'markdown-it'
// const md = markdownit()

</script>

<style scoped>
.about-page {}
</style>
