<script setup lang="ts">
const layoutStore = useLayoutStore()
const { isDarkmode } = storeToRefs(layoutStore)
const { toggleDarkMode } = layoutStore
const { fetch: refreshSession, clear: clearSession } = useUserSession()

const items = ref([
  {
    label: 'Profile',
    items: [
      {
        label: 'Settings',
        icon: 'mingcute:settings-3-line',
      },
      {
        label: 'Messages',
        icon: 'mingcute:message-1-line',
        badge: 2,
      },
      {
        severity: 'danger',
        label: 'Logout',
        icon: 'mingcute:align-arrow-right-fill',
        shortcut: '⌘+Q',
        action: async () => {
          await clearSession()
          await navigateTo('/login')
        },
      },
    ],
  },
])
const menu = ref()

function toggle(event: any) {
  menu.value.toggle(event)
}
</script>

<template>
  <header class="flex items-center justify-between p-4 shrink-0 bg-conic-120 bg-surface-0 dark:bg-surface-900 border-b border-b-surface-200 dark:border-b-surface-700">
    <div class="flex items-center gap-2">
      <NuxtImg src="/logo.png" alt="logo" width="40" height="40" />
      <p class="text-3xl font-extrabold">
        PrimeLand
      </p>
    </div>
    <div class="flex items-center gap-2">
      <Button variant="text" size="small" @click="toggleDarkMode">
        <Transition name="slide-up" mode="out-in">
          <Icon v-if="isDarkmode" name="mingcute:moon-fog-fill" size="20" />
          <Icon v-else name="mingcute:sun-fog-fill" size="20" />
        </Transition>
      </Button>
      <Button variant="outlined" class="flex items-center border rounded-md px-2 py-1" aria-haspopup="true" aria-controls="overlay_menu" @click="toggle">
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" shape="circle" />
        <div class="flex flex-col text-left">
          <p class="text-sm font-medium">
            Richardo Andrews
          </p>
          <p class="text-xs text-muted-color">
            PT MENCARI CINTA SEJATI
          </p>
        </div>
        <Icon name="mingcute:down-small-fill" size="25" />
      </Button>
      <Menu id="overlay_menu" ref="menu" :model="items" :popup="true" class="w-full md:w-60 text-sm">
        <template #item="{ item }">
          <Button variant="text" size="small" class="flex items-center justify-start" :class="item.severity === 'danger' ? 'text-red-600' : ''" :onclick="item?.action" fluid>
            <Icon v-if="item.icon" :name="item.icon" />
            <span class="font-medium text-left">{{ item.label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
            <!-- <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span> -->
          </Button>
        </template>
      </Menu>
    </div>
  </header>
</template>