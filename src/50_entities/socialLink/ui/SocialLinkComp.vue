<template>
  <a class="social-link" :href="link.url" target="_blank">
    <img :src="link.icon" />
  </a>
</template>

<script setup lang="ts">
import {} from 'vue'
import type { SocialLink } from '@/50_entities/socialLink'
export interface Props {
  link: SocialLink
}
withDefaults(defineProps<Props>(), {})
</script>

<style scoped>
.social-link {
  --size: 20px;
  --size-image: 15px;
  /*display: block;*/
  width: var(--size);
  height: var(--size);
  background-color: var(--clr-bg-header-second);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--time-short);

  img {
    transition: filter var(--time-short);
    /*transition-property: -moz-filter, -ms-filter, -o-filter, -webkit-filter, filter;*/
    /*transition-duration: 3s;*/
    filter: invert(1) sepia(1) saturate(6) hue-rotate(175deg);
    width: var(--size-image);
    height: var(--size-image);
  }
  &:hover {
    background-color: var(--clr-main);
    img {
      filter: invert(1) sepia(1) saturate(0) hue-rotate(175deg);
      /*outline: 1px solid darkred;*/
    }
  }
}
</style>
