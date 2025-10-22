<template>
  <div class="about-page">
    <h1>{{ pageAbout.title }}</h1>
    <p class="p--bigger">{{ pageAbout.descLong }}</p>
    <div>{{$md.render(pageAbout.content)}}</div>
    <div ref="MDContent" v-html="$md.render(pageAbout.content)"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import { pageAbout } from '@/70_content/singularPages'
import { useRouter } from 'vue-router'
const router = useRouter()
const MDContent = useTemplateRef<HTMLDivElement>('MDContent')

const processMDContent = ()=>{
  const dynamicContentElement = MDContent.value as HTMLDivElement;
  // const dynamicContentElement = MDContent.value;
  const anchorsCollection = dynamicContentElement.getElementsByTagName('a');
  console.log(anchorsCollection); console.log('^...anchorTags:')
  const anchors :HTMLAnchorElement[] = Array.from(anchorsCollection)

  // todo:: анкоры, которые уходят в глобальную переменную, должны быть отфильтрованы по:
  // - что они не внешние
  // -
  anchors.forEach(anchor => {
    const href = anchor.getAttribute('href');
    if (href && !href.startsWith('http') && !href.startsWith('//')) { // Check for internal links

      const needTargetBlank = false
      if (needTargetBlank) {
        anchor.target = '_blank'
      }

      anchor.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent full page refresh
        router.push(href); // Navigate using Vue Router
      });
    }
  });
}
onMounted(()=>{
  processMDContent()
})
</script>

<style scoped>
.about-page {
}
</style>
