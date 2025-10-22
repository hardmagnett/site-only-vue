<template>
  <div class="header-full header z-header clr-bg-small--alt">
    <div class="header__line"></div>
    <div class="header__first" v-if="$breakpoints.isSmOrMore.value">
      <div class="container">
        <!--<OffCanvasButton />-->
        <ContactsMenu :hidePhone="!$breakpoints.isMdOrMore.value" />
        <div class="mod--flex-spacer"></div>
        <SocialLinks v-if="$breakpoints.isSmOrMore.value" />
      </div>
    </div>
    <div class="header__second">
      <div class="container">
        <!--Здесь ваще с большим трудом всё влазило на 320px.-->
        <!--Поэтому понатыкал проверок по брекпоинтам.-->
        <OffCanvasButton
          v-if="!$breakpoints.isMdOrMore.value"
          :class="{ 'off-canvas-button--big': $breakpoints.isXsOrMore.value }"
        />
        <MainLogo class="main-logo--on-dark" />
        <MainMenuNew v-if="$breakpoints.isMdOrMore.value" />

        <template v-if="!$breakpoints.isMdOrMore.value">
          <ContactsMenu hideEmail />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import { OffCanvasButton } from '@/30_widgets/OffCanvas'
import MainLogo from '@/60_shared/ui/MainLogo/MainLogo.vue'
import { ContactsMenu } from '@/40_features/ContactsMenu'
import { SocialLinks } from '@/40_features/SocialLinks'
import { MainMenuNew } from '@/40_features/MainMenuNew'
</script>

<style scoped>
.header {
  .header__line {
    height: 1px;
    background-color: var(--clr-main);
  }
  .header__first {
    height: var(--header-first-height);
    background-color: var(--clr-bg-header-first);
    .container {
      /*outline: 1px solid green;*/
      height: var(--header-first-height);
      display: flex;
      gap: var(--gap);
      /*justify-content: space-between;*/
      align-items: center;
    }
  }
  .header__second {
    height: var(--header-second-height);
    background-color: var(--clr-bg-header-second);

    /*display: flex;*/
    .container {
      height: var(--header-second-height);
      display: flex;
      align-items: center;
      gap: var(--gap-flex);

      .contacts-menu {
        /*Чтобы уходило вправо без flex-spacer-а*/
        margin-left: auto;
      }
    }
  }
}
</style>
