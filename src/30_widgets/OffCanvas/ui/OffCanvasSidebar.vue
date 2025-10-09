<template>
  <div
    class="off-canvas-sidebar"
    id="off-canvas-sidebar"
  >
    <div class="off-canvas-sidebar__not-scrollable-top">
      <div
        class="off-canvas-sidebar__cross mdi mdi-close-thick"
        id="off-canvas-sidebar__cross"
      ></div>
      <p>сюда можно добавить логотип</p>
    </div>
    <div class="off-canvas-sidebar__scrollable mod--cool-scrollbar">
      <OffCanvasContent/>
    </div>
    <div class="off-canvas-sidebar__not-scrollable-bottom">
      <!--Сюда, возможно, можно добавить что-нибудь ещё. Сделано на всякий случай. -->
    </div>


  </div>

  <div
    class="off-canvas-overlay"
    id="off-canvas-overlay"
  >

  </div>
</template>

<script setup lang="ts">
import { } from 'vue'
import OffCanvasContent from './OffCanvasContent.vue'

</script>

<style scoped>
.off-canvas-sidebar {}
</style>
