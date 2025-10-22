<template>
  <div
    class="markdown-renderer"
    ref="MDContent"
    v-html="$md.render(markdown)"
  >
  </div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue'
import { useRouter } from 'vue-router'

export interface Props {
  markdown: string
}
withDefaults(defineProps<Props>(), {})


const router = useRouter()
const MDContent = useTemplateRef<HTMLDivElement>('MDContent')

const processMDContent = ()=>{
  console.log(2)
  const dynamicContentElement = MDContent.value as HTMLDivElement;
  // const dynamicContentElement = MDContent.value;
  const anchorsCollection = dynamicContentElement.getElementsByTagName('a');
  console.log(anchorsCollection); console.log('^...anchorTags:')
  const anchors :HTMLAnchorElement[] = Array.from(anchorsCollection)

  // todo:: анкоры, которые уходят в глобальную переменную, должны быть отфильтрованы по:
  // - что они не внешние
  // -
  anchors.forEach(anchor => {
    const href: string = anchor.getAttribute('href') ?? '';
    const isLinkInternal = href && !href.startsWith('http') && !href.startsWith('//')
    const isNoTargetBlank = anchor.target !== '_blank'
    if (isLinkInternal && isNoTargetBlank) { // Check for internal links

      const needTargetBlank = anchor.target === '_blank'
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
  console.log(1)
  processMDContent()
})

</script>

<style scoped>
.markdown-renderer {}
</style>
