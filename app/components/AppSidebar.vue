<script setup lang="ts">
const route = useRoute()
const navbarMenu = computed(() => [
  {
    name: 'Dashboard',
    path: '/',
    isActive: route.path === '/',
    icon: 'mingcute:chart-bar-2-line',
  },
  {
    name: 'Products',
    path: '/products',
    isActive: route.path.includes('/products'),
    icon: 'mingcute:package-2-line',
  },
  {
    name: 'Orders',
    path: '/orders',
    isActive: route.path.includes('/orders'),
    icon: 'mingcute:notebook-2-line',
  },
  {
    name: 'Messages',
    path: '/messages',
    isActive: route.path.includes('/messages'),
    icon: 'mingcute:message-2-line',
  },

])
</script>

<template>
  <aside class="flex flex-col min-h-screen overflow-y-auto bg-surface-0 dark:bg-surface-900 border-r border-surface-300 dark:border-r-surface-800">
    <div class="overflow-y-auto">
      <ul class="list-none p-2 m-0 overflow-hidden">
        <li v-for="(item, index) in navbarMenu" :key="index">
          <NuxtLink
            v-ripple
            :href="item.path"
            class="flex items-center cursor-pointer p-2.5 gap-2 rounded duration-150 transition-colors p-ripple "
            :class="item.isActive ? 'bg-highlight' : 'hover:bg-primary/10'"
          >
            <Icon :name="item.icon" />
            <span class="font-medium">{{ item.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>