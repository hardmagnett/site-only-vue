<template>
  <div class="header z-header clr-bg-small--alt">
    <div class="header__line">

    </div>
    <div class="header__first">
      <div class="container">
        <OffCanvasButton/>
        <!--<? include "{$mv -> views_path}04_features/contacts-menu/contacts-menu.php";?>-->
        <div class="mod--flex-spacer"></div>
        <!--<? include "{$mv -> views_path}04_features/social-links/social-links.php";?>-->
      </div>

    </div>
    <div class="header__second">
      <div class="container">
        <!--<?-->
        <!--    $cssModifiers="off-canvas-button&#45;&#45;big";-->
        <!--    $id="off-canvas-button&#45;&#45;big";-->
        <!--    include "{$mv -> views_path}03_widgets/off-canvas/off-canvas-button.php";-->
        <!--?>-->
        <!--<? $cssModifiers="z-logo&#45;&#45;on-dark"; include $mv -> views_path."06_shared/logo/logo.php";?>-->
        <!--<? include "{$mv -> views_path}04_features/main-menu/main-menu.php";?>-->
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { } from 'vue'
import { OffCanvasButton } from '@/30_widgets/OffCanvas'

</script>

<style scoped>
.header-full {}
</style>
