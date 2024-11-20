<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const online = useOnline()
</script>

<template>
  <div>
    <h1 class="text-2xl">Hello World</h1>
    <NuxtWelcome />
  </div>
</template>
