<template>
  <div class="social-links">
    <SocialLinkComp v-for="link in allActiveSocialLinks" :key="link.id" :link="link" />
  </div>
</template>

<script setup lang="ts">
import { SocialLinkComp, SocialLinksApi } from '@/50_entities/socialLink'

const socialLinksApi = new SocialLinksApi()
const allActiveSocialLinks = socialLinksApi.getAllActiveSocialLinks()
</script>

<style scoped>
.social-links {
  display: flex;
  gap: 0.5rem;
}
</style>
