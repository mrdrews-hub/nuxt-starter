<script setup lang="ts">
import { appName } from '~/constants'

const route = useRoute()
const pageTitle = computed(() => route.name ? `${route.name} - ${appName}` : appName)
useHead({
  title: () => pageTitle.value,
})
const layoutStore = useLayoutStore()
const { isDarkmode, layoutConfig } = storeToRefs(layoutStore)
const { loggedIn } = useUserSession()

onMounted(() => {
  if (isDarkmode.value) {
    document.documentElement.classList.add('dracula')
  }
})
watch(route, () => {
  console.log(route)
})

const toasticon = {
  success: 'mingcute:check-circle-fill',
  error: 'mingcute:warning-fill',
  warning: 'mingcute:warning-fill',
  info: 'mingcute:information-fill',
}
</script>

<template>
  <Toast position="top-right">
    <template #container="{ message, closeCallback }">
      <div class="flex justify-between items-start p-2.5 min-h-12">
        <div class="flex items-start gap-2">
          <Icon :name="toasticon[message?.severity as keyof typeof toasticon]" size="23" />
          <div>
            <p class="font-bold">
              {{ message.summary }}
            </p>
            <p class="text-sm font-medium">
              {{ message.detail }}
            </p>
          </div>
        </div>
        <div class="absolute top-1 right-1">
          <button type="button" class="hover:cursor-pointer text-red-600 hover:bg-red-600 hover:text-white transition-all h-[20px] rounded-full" @click="closeCallback">
            <Icon name="mingcute:close-circle-line" size="20" class="font-bold" />
          </button>
        </div>
      </div>
      <!-- <Icon name="mingcute:airplane-fill" size="25" /> -->
    </template>
  </Toast>
  <NuxtLayout :name="loggedIn ? 'dashboard' : 'default'">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
