<template>
  <a
    class="main-logo z-logo"
    href="/"
  >
    <!--<?= $mv -> singletons -> logo_text ?>-->
    {{ singularData.logoText }}
  </a>
</template>

<script setup lang="ts">
import { } from 'vue'
import singularData from '@/70_content/singularData.ts'

</script>

<style scoped>
.main-logo {
  /*--size: 28px;*/
  --size: 38px;
  display: block;
  font-family: 'Kazmann Sans Font', sans-serif;
  font-size: var(--size);
  height: var(--size);
  line-height: var(--size);

  /*text-decoration-thickness: 2px;*/
  /*text-decoration-style: wavy;*/
  /*text-decoration-skip-ink: none;*/
  text-decoration: none;
}
.main-logo--on-dark, .main-logo--on-dark:focus {
  color: var(--clr-txt-navigation);
  transition: var(--time-short);
  &:hover {
    color: white;
  }
}

</style>
