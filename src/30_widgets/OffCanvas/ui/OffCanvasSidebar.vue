<template>
  <div
    class="off-canvas-sidebar"
    :class="{
      'off-canvas-sidebar--sidebar-visible': isOffCanvasOpen,
    }"
  >
    <div class="off-canvas-sidebar__not-scrollable-top">
      <div class="off-canvas-sidebar__cross mdi mdi-close-thick" @click="toggleOffCanvas"></div>
      <p style="color: orange">сюда можно добавить логотип</p>
    </div>
    <div class="off-canvas-sidebar__scrollable mod--cool-scrollbar">
      <OffCanvasContent @menuItemClick="isOffCanvasOpen = false" />
    </div>
    <div class="off-canvas-sidebar__not-scrollable-bottom">
      <!--Сюда, возможно, можно добавить что-нибудь ещё. Сделано на всякий случай. -->
    </div>
  </div>

  <div
    class="off-canvas-overlay"
    :class="{
      'off-canvas-overlay--sidebar-visible': isOffCanvasOpen,
    }"
    @click="toggleOffCanvas"
  ></div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import OffCanvasContent from './OffCanvasContent.vue'
import { isOffCanvasOpen, toggleOffCanvas } from '@/30_widgets/OffCanvas/stores'
watch(isOffCanvasOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add('mod--stop-scrolling')
  } else {
    document.body.classList.remove('mod--stop-scrolling')
  }
})
</script>

<style scoped>
.off-canvas-sidebar {
  top: 0;
  bottom: 0;
  left: 0;
  background-color: var(--clr-bg-header-first);
  /*position: fixed;*/
  position: fixed;
  z-index: 100501;
  width: 90vw;
  max-width: 370px;
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform var(--time-short);
  display: flex;
  flex-flow: column nowrap;
  .off-canvas-sidebar__not-scrollable-top {
    flex: 0 0 auto;
    /*background-color: red;*/
  }
  .off-canvas-sidebar__scrollable {
    height: 0;
    flex-grow: 1;
    overflow-y: auto;
  }
  .off-canvas-sidebar__not-scrollable-bottom {
    flex: 0 0 auto;
  }

  .off-canvas-sidebar__cross {
    --size: calc(var(--gap) * 2.5);
    position: absolute;
    top: 0;
    right: 0;
    width: var(--size);
    height: var(--size);
    background-color: var(--clr-bg-header-second);
    cursor: pointer;
    color: var(--clr-txt-navigation);
    &:before {
      width: 100%;
      display: block;
      text-align: center;
      aspect-ratio: 1 / 1;
      line-height: var(--size);
      font-size: 20px;
    }
    /*}*/
  }

  &.off-canvas-sidebar--sidebar-visible {
    transform: translateX(0%);
  }
}
.off-canvas-overlay {
  outline: 1px solid green;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100500;
  pointer-events: none;
  opacity: 0;
  transition: opacity, var(--time-short);

  &.off-canvas-overlay--sidebar-visible {
    pointer-events: all;
    opacity: 1;
  }
}
</style>
