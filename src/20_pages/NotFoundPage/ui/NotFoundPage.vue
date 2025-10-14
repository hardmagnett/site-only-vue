<template>
  <div class="not-found-page">
    <h1>
      Страница
      <span class="mod--no-wrap"> не найдена </span>
    </h1>
    <p class="">
      <span class="mod--no-wrapZ">Вы можете продолжить</span>
      <span class="mod--no-wrap">
        с <router-link :to="{ name: 'main' }">главной страницы</router-link>.
      </span>
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.not-found-page {
}
</style>
