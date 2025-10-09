<template>
  <div>
    <OffCanvasSidebar/>
    <HeaderFull/>
    <div>
      <router-link :to="{name: 'main'}">Главная</router-link>
      &nbsp;&nbsp;&nbsp;
      <router-link :to="{name: 'projects'}">Проекты</router-link>
      &nbsp;&nbsp;&nbsp;
      <router-link :to="{name: 'about'}">Обо мне</router-link>
    </div>

  </div>
  <router-view />
  <FooterFull/>
</template>

<script setup lang="ts">
import { OffCanvasSidebar } from '@/30_widgets/OffCanvas'
import { HeaderFull } from '@/30_widgets/HeaderFull'
import { FooterFull } from '@/30_widgets/FooterFull'
</script>

<style scoped></style>
