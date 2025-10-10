<template>
  <div class="footer-full footer">
    <div class="footer__big"></div>
    <div class="footer__small"></div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
</script>

<style scoped>
.footer {
  .footer__big {
    min-height: 300px;
    background-color: var(--clr-bg-header-second);
  }
  .footer__small {
    background-color: var(--clr-bg-header-first);
    height: 80px;
  }
}
</style>
