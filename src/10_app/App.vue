<template>
  <div class="app">
    <div class="app__all-but-footer">
      <OffCanvasSidebar />
      <HeaderFull />
      <!--<p>Menu Start</p>-->
      <!--<MainMenuNew />-->
      <!--<p>Menu End</p>-->
      <div class="container container--with-padding-top container--with-padding-bottom">
        <div>
          <router-link :to="{ name: 'main' }">Главная</router-link>
          &nbsp;&nbsp;&nbsp;
          <router-link :to="{ name: 'projects' }">Проекты</router-link>
          &nbsp;&nbsp;&nbsp;
          <router-link :to="{ name: 'service-engineering' }">Проектирование электрощитов</router-link>
          &nbsp;&nbsp;&nbsp;
          <router-link :to="{ name: 'service-assembly' }">Сборка электрощитов</router-link>
          &nbsp;&nbsp;&nbsp;
          <router-link :to="{ name: 'about' }">Обо мне</router-link>
        </div>
        <router-view />
      </div>
    </div>

    <FooterFull />
  </div>
</template>

<script setup lang="ts">
import { OffCanvasSidebar } from '@/30_widgets/OffCanvas'
import { HeaderFull } from '@/30_widgets/HeaderFull'
import { FooterFull } from '@/30_widgets/FooterFull'
</script>

<style scoped>
/*Липкий футер старт*/
.app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .app__all-but-footer {
    flex-grow: 1;
  }
}

/*Липкий футер энд*/
</style>
