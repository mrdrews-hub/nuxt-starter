<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="bg-surface-100 dark:bg-surface-950 min-h-screen">
    <slot name="banner" />
    <AppNavbar />
    <div class="flex">
      <AppSidebar class="w-[300px]" />
      <div id="content" class="basis-full px-10 py-8">
        <slot />
      </div>
    </div>
  </div>
</template>
