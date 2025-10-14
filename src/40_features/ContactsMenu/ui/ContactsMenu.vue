<template>
  <div class="contacts-menu">
    <a v-if="!hidePhone" :href="`tel:${singularData.phoneForLink}`">
      <!--<span></span>-->
      <!--<span></span>-->
      <img src="/images/icons/rutube.svg" />
      <img src="/images/icons/telegram.svg" />
      {{singularData.phoneForDisplay }}
    </a>
    <a v-if="!hideEmail" :href="`mailto:${singularData.email}`">
      <!--<span></span>-->
      {{ singularData.email }}
    </a>
  </div>
</template>

<script setup lang="ts">
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
    img {
      /*outline: 1px solid darkred;*/
      transition: filter var(--time-short);
      /*transition: filter var(--time-medium);*/

      /*-webkit-transition: all 1s ease;*/
      /*transition: all 1s ease;*/

      /*transition-property: -moz-filter, -ms-filter, -o-filter, -webkit-filter, filter;*/
      /*transition-duration: 3s;*/

      /*transition: filter 2000ms;*/
      --size: 16px;
      width: var(--size);
      height: var(--size);
      filter: invert(1) sepia(1)  saturate(6) hue-rotate(175deg);
    }

    &:hover {
      color: var(--clr-main);
      img {
        filter:

          invert(35%)
        sepia(94%)
        saturate(2694%)
        hue-rotate(357deg)
        brightness(88%)
        contrast(93%)






      ;
      /*brightness(0)*/     /*c brightness тоже не работает transition*/
      /*saturate(100%)*/    /*c saturate не работает transition*/
      /*invert(35%)*/
      /*sepia(94%)*/
      /*saturate(2694%)*/
      /*hue-rotate(357deg)*/
      /*brightness(88%)*/
      /*contrast(93%)*/
      }
    }

  }

  &.contacts-menu--vertical {
    flex-flow: column;
    /*outline: 1px solid darkred;*/
    /*gap: var(--gap);*/
    gap: 0;
  }
}
</style>
