<template>
  <div class="off-canvas-content">
    <!--<? foreach(range(1, 20) as $number): ?>-->
    <!--<p><?=$number?>: foo</p>-->
    <!--<? endforeach; ?>-->
    <p v-for="n in 20" :key="n">{{n}}: foo</p>
  </div>
</template>

<script setup lang="ts">
import { } from 'vue'

</script>

<style scoped>
.off-canvas-content {}
</style>
