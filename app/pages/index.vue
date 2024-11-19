<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const online = useOnline()
</script>

<template>
  <div>
    <Logos mb-6 />
    <PageView v-if="online" />
    <div v-else text-gray:80>
      You're offline
    </div>
    <InputEntry />
  </div>
</template>
