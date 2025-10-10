<template>
  <div class="social-links">
    <!--<? $links = $mv -> SocialLinks -> getAllActive();?>-->

    <!--<? foreach($links as $link): ?>-->
    <!--<? include $mv -> views_path."05_entities/social-link/social-link.php";?>-->
    <!--<? endforeach; ?>-->

    <!--<p style="color: white;" v-for="link in allActiveSocialLinks" :key="link.id">: {{ link.url }}</p>-->
    <SocialLinkComp
      v-for="link in allActiveSocialLinks"
      :key="link.id"
      :link="link"
    />
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
