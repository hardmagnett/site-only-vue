<template>
  <div class="contacts-menu">
    <a v-if="!hidePhone" :href="`tel:${singularData.phoneForLink}`">{{
      singularData.phoneForDisplay
    }}</a>
    <a v-if="!hideEmail" :href="`mailto:${singularData.email}`">{{ singularData.email }}</a>
  </div>
</template>

<script setup lang="ts">
// todo:: сделать возможность их выводить не только горизонтально, а и вертикально. Нужно для сайдбара.
import {} from 'vue'
import singularData from '@/70_content/singularData.ts'

export interface Props {
  hideEmail?: boolean
  hidePhone?: boolean
}
withDefaults(defineProps<Props>(), {
  hideEmail: false,
  hidePhone: false,
})
</script>

<style scoped>
.contacts-menu {
  display: flex;
  gap: var(--gap-flex);
  a {
    display: block;
    height: var(--header-first-height);
    line-height: var(--header-first-height);
    color: var(--clr-txt-navigation);
    /*outline: 1px solid red;*/
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    transition: color var(--time-short);
    &:hover {
      color: var(--clr-main);
    }
  }
}
</style>
