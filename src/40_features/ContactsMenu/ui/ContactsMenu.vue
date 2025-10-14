<template>
  <div class="contacts-menu">
    <a v-if="!hidePhone" :href="`tel:${singularData.phoneForLink}`">
      <span class="contacts-menu__icons">
        <SvgIconTelegram />
        <SvgIconTelegram />
      </span>

      {{singularData.phoneForDisplay }}
    </a>
    <a v-if="!hideEmail" :href="`mailto:${singularData.email}`">
      <span class="contacts-menu__icons">
        <SvgIconTelegram />
      </span>

      {{ singularData.email }}
    </a>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import singularData from '@/70_content/singularData.ts'
import SvgIconTelegram from '@/60_shared/ui/svg-icons/SvgIconTelegram.vue'

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
  gap: calc(var(--gap-flex) * 2);
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
    .contacts-menu__icons {
      display: inline-flex;
      vertical-align: text-bottom;
      gap: calc(var(--gap) / 8);
    }
    svg {
      /*display: inline;*/
      /*line-height: var(--header-first-height);*/
      /*vertical-align: text-bottom;*/
      transition: fill var(--time-short);
      /*outline: 1px solid darkred;*/
      --size: 16px;
      width: var(--size);
      height: var(--size);
      fill: white;
    }

    &:hover {
      color: var(--clr-main);
      svg {
        fill: var(--clr-main);
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
