<script setup lang="ts">
const props = defineProps({
  id: String,
  label: String,
  error: String,
})
</script>

<template>
  <div class="space-y-2">
    <label v-if="props.label" :for="props.id" class="block text-surface-900 dark:text-surface-0 text-sm font-medium">{{ props.label }}</label>
    <slot />
    <Message v-if="props.error" size="small" severity="error" variant="simple" class="-mt-2">
      <span class="font-medium">
        {{ props.error }}
      </span>
    </Message>
  </div>
</template>