<template>
  <div
    class="markdown-renderer"
    ref="MDContent"
    v-html="$md.render(markdown)"
  >
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'
import { useRouter } from 'vue-router'

export interface Props {
  markdown: string
}
withDefaults(defineProps<Props>(), {})

const router = useRouter()
const MDContent = useTemplateRef<HTMLDivElement>('MDContent')
const anchorsToBehaveLikeRouterLink = ref<HTMLAnchorElement[]>([])

const clickHandlerForAnchorLikeRouterLink = (event: PointerEvent)=>{
  const anchor = event.target as HTMLAnchorElement
  const href: string = anchor.getAttribute('href') ?? '';
  event.preventDefault(); // Prevent full page refresh
  router.push(href); // Navigate using Vue Router
}

const enableAnchorsToBehaveLikeRouterLink = ()=>{
  const MDContentNode = MDContent.value as HTMLDivElement;
  const anchorsCollection = MDContentNode.getElementsByTagName('a');
  const anchors :HTMLAnchorElement[] = Array.from(anchorsCollection)

  // Только внутренние ссылки без target blank
  anchorsToBehaveLikeRouterLink.value = anchors.filter(anchor=>{
    const href: string = anchor.getAttribute('href') ?? '';
    const isLinkInternal = href && !href.startsWith('http') && !href.startsWith('//')
    const isNoTargetBlank = anchor.target !== '_blank'
    return isLinkInternal && isNoTargetBlank
  })

  anchorsToBehaveLikeRouterLink.value.forEach(anchor => {
    anchor.addEventListener('click', clickHandlerForAnchorLikeRouterLink);
  })
}
const disableAnchorsToBehaveLikeRouterLink = ()=>{
  anchorsToBehaveLikeRouterLink.value.forEach(anchor => {
    anchor.addEventListener('click', clickHandlerForAnchorLikeRouterLink);
  })
}
onMounted(()=>{
  enableAnchorsToBehaveLikeRouterLink()
})
onBeforeUnmount(()=>{
  disableAnchorsToBehaveLikeRouterLink()
})

</script>

<style scoped>
.markdown-renderer {}
</style>
