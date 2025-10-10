<template>
  <div
    class="off-canvas-button"
    :class="{
      'off-canvas-button--sidebar-visible': isOffCanvasOpen,
    }"
    @click="toggleOffCanvas"
  >
    <span class="mdi mdi-menu"></span>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import { isOffCanvasOpen, toggleOffCanvas } from '@/30_widgets/OffCanvas/stores'
</script>

<style scoped>
.off-canvas-button {
  color: var(--clr-txt-navigation);
  /*color: var(--clr-main);*/
  cursor: pointer;
  font-size: 26px;
  line-height: 36px;
  transition: color var(--time-short);
  &:hover {
    color: var(--clr-main);
    /*color: var(--clr-txt-navigation);*/
  }
  &.off-canvas-button--big {
    font-size: 36px;
  }

  &.off-canvas-button--sidebar-visible {
    /*не хочу делать анимацию. Пусть здесь будет пусто, но класс на всякий случай останется.*/
  }
}
</style>
