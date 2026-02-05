<script setup lang="ts">
import SciWebIcon from '@/common/icons/SciWebIcon.vue'
import MaterialSymbolsLightHome from '@/common/icons/MaterialSymbolsLightHome.vue'
import FluentMdl2PenWorkspace from '@/common/icons/FluentMdl2PenWorkspace.vue'
import Menubar from 'primevue/menubar'
import { ref } from 'vue'

interface MenuItem {
  label: string
  route: string
}
const MenuItemMap = new Map<string, any>([
  ['Home', MaterialSymbolsLightHome],
  ['Create', FluentMdl2PenWorkspace],
])

const items = ref<MenuItem[]>([
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Create',
    route: '/create',
  },
])
</script>

<template>
  <Menubar :model="items">
    <template #start>
      <SciWebIcon />
    </template>
    <template #item="{ item, props }">
      <RouterLink :to="item.route" class="menubar-item">
        <component :is="MenuItemMap.get(item.label as string)" />
        <span>{{ item.label }}</span>
      </RouterLink>
    </template>
    <template #end>
      <RouterLink to="/login" class="menubar-item menubar-item-end">
        <span>Login</span>
      </RouterLink>
      <span> | </span>
      <RouterLink to="/signin" class="menubar-item menubar-item-end">
        <span>Sign In</span>
      </RouterLink>
    </template>
  </Menubar>
</template>

<style scoped>
.menubar-item {
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  color-scheme: none;
}

.menubar-item-end {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  margin: auto;
  color: inherit;
}
.menubar-item-end:hover {
  background-color: #f1f5f9;
  border-radius: 4px;
}
</style>
