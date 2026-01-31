<script setup lang="ts">
import SciWebIcon from '@/common/icons/SciWebIcon.vue'
import MaterialSymbolsLightHome from '@/common/icons/MaterialSymbolsLightHome.vue'
import FluentMdl2PenWorkspace from '@/common/icons/FluentMdl2PenWorkspace.vue'
import Menubar from 'primevue/menubar'
// import { type MenuItem } from 'primevue/menuitem'
import { ref } from 'vue'

interface MenuItem {
  label: string
  icon?: any
  route: string
}

const items = ref<MenuItem[]>([
  {
    label: 'Home',
    icon: MaterialSymbolsLightHome,
    route: '/',
  },
  {
    label: 'Workspace',
    icon: FluentMdl2PenWorkspace,
    route: '/workspace',
  },
])
const isLogin = ref<string>('menubar-item-login')
</script>

<template>
  <Menubar :model="items">
    <template #start>
      <SciWebIcon />
    </template>
    <template #item="{ item, props }">
      <RouterLink :to="item.route" class="menubar-item">
        <component v-if="item.icon" :is="item.icon" />
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
  background-color: oklch(96.8% 0.007 247.896);
  border-radius: 0.25rem;
}
</style>
