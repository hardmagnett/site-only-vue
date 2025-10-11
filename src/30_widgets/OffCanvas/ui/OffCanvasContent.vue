<template>
  <div class="off-canvas-content">
    <p v-for="n in 20" :key="n">{{ n }}: foo</p>

    <ContactsMenu />
    <SocialLinks />
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import { ContactsMenu } from '@/40_features/ContactsMenu'
import { SocialLinks } from '@/40_features/SocialLinks'
</script>

<style scoped>
.off-canvas-content {
  color: var(--clr-txt-navigation);
  padding: var(--gap);
}
</style>
