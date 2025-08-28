<script setup lang="ts">
const props = defineProps({
  title: String,
})
</script>

<template>
  <h2 class="text-2xl font-bold">
    {{ props.title }}
  </h2>
</template>