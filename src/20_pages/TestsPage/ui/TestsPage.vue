<template>
  <div class="tests-page">
    <StandardPageContent :page-basic="pageTests" />
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import StandardPageContent from '@/30_widgets/StandardPageContent'
import { pageTests } from '@/70_content/singularPages'
</script>

<style scoped>
.tests-page {
}
</style>
