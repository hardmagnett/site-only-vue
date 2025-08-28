<script setup lang="ts"></script>

<template>
  <div>
    <router-link :to="{name: 'main'}">Главная</router-link>
    &nbsp;&nbsp;&nbsp;
    <router-link :to="{name: 'projects'}">Проекты</router-link>
    &nbsp;&nbsp;&nbsp;
    <router-link :to="{name: 'projects'}">Обо мне</router-link>
  </div>
  <router-view />
</template>

<style scoped></style>
