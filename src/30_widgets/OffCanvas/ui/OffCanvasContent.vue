<template>
  <div class="off-canvas-content">
    <MainMenuNew />
    <div class="off-canvas-content__with-horizontal-padding">
      <ContactsMenu />
      <SocialLinks />
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import { ContactsMenu } from '@/40_features/ContactsMenu'
import { SocialLinks } from '@/40_features/SocialLinks'
import { MainMenuNew } from '@/40_features/MainMenuNew'
</script>

<style scoped>
.off-canvas-content {
  .off-canvas-content__with-horizontal-padding {
    padding-left: var(--gap);
    padding-right: var(--gap);
  }
  color: var(--clr-txt-navigation);
  padding-top: var(--gap);
  padding-bottom: var(--gap);
}
</style>
