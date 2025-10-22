<template>
  <div
    class="markdown-renderer"
    ref="MDContent"
    v-html="$md.render(markdown)"
  >
  </div>
</template>

<script setup lang="ts">
// todo:: применить его везде где используется $md.render()
import { useTemplateRef } from 'vue'
import { useRouter } from 'vue-router'

export interface Props {
  markdown: string
}
withDefaults(defineProps<Props>(), {})


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
.markdown-renderer {}
</style>
