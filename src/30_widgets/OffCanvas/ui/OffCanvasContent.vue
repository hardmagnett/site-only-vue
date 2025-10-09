<template>
  <div class="off-canvas-content">
    <p v-for="n in 20" :key="n">{{n}}: foo</p>
  </div>
</template>

<script setup lang="ts">
import { } from 'vue'

</script>

<style scoped>
.off-canvas-content {
  color: var(--clr-txt-navigation);
}
</style>
