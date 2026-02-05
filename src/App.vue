<script setup lang="ts">
import MenuBar from './pages/layout/MenuBar.vue'
import SideBar from './pages/layout/SideBar.vue'
import { RouterView } from 'vue-router'
</script>
<template>
  <MenuBar />
  <div class="app-container">
    <SideBar />
    <RouterView />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
}
</style>
