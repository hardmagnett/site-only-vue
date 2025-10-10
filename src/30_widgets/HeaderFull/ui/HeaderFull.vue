<template>
  <div class="header-full header z-header clr-bg-small--alt">
    <div class="header__line"></div>
    <div class="header__first">
      <div class="container">
        <OffCanvasButton/>
        <ContactsMenu/>
        <div class="mod--flex-spacer"></div>
        <SocialLinks/>
      </div>

    </div>
    <div class="header__second">
      <div class="container">
        <!--<?-->
        <!--    $cssModifiers="off-canvas-button&#45;&#45;big";-->
        <!--    $id="off-canvas-button&#45;&#45;big";-->
        <!--    include "{$mv -> views_path}03_widgets/off-canvas/off-canvas-button.php";-->
        <!--?>-->
        <MainLogo class="main-logo--on-dark"/>
        <!--<? include "{$mv -> views_path}04_features/main-menu/main-menu.php";?>-->
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { } from 'vue'
import { OffCanvasButton } from '@/30_widgets/OffCanvas'
import MainLogo from '@/60_shared/ui/MainLogo/MainLogo.vue'
import { ContactsMenu } from '@/40_features/ContactsMenu'
import { SocialLinks } from '@/40_features/SocialLinks'

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
      display: flex;
      align-items: center;
      gap: var(--gap-flex);
    }
  }
}


</style>
