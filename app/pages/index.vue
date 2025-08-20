<script setup lang="ts">
import { DashboardChartSellingPerformance } from '#components'

definePageMeta({
  name: 'Dashboard',
})

const items = ref([
  {
    label: 'Orders',
    icon: 'mingcute:shopping-cart-2-line',
    backgroundColor: 'bg-emerald-100 dark:bg-emerald-700/20',
    iconColor: 'text-emerald-600 dark:text-emerald-500',
  },
  {
    label: 'Revenue',
    icon: 'mingcute:chart-line-line',
    backgroundColor: 'bg-pink-100 dark:bg-pink-700/20',
    iconColor: 'text-pink-600 dark:text-pink-500',
  },
  {
    label: 'Customer',
    icon: 'mingcute:group-3-line',
    backgroundColor: 'bg-cyan-100 dark:bg-cyan-700/20',
    iconColor: 'text-cyan-600 dark:text-cyan-500',
  },
  {
    label: 'Messages',
    icon: 'mingcute:message-1-line',
    backgroundColor: 'bg-amber-100 dark:bg-amber-700/20',
    iconColor: 'text-amber-600 dark:text-amber-500',
  },
])

const periodOptions = ['Weekly', 'Monthly', 'Yearly']
const selectedPeriod = ref('Monthly')
</script>

<template>
  <main class="grid gap-5">
    <section class="flex items-center justify-between">
      <SelectButton v-model="selectedPeriod" :options="periodOptions" size="small" />
      <Button type="button" icon="mingcute:download-2-line" label="Download" size="small" icon-pos="right">
        <template #icon>
          <Icon name="mingcute:download-2-line" size="20" />
        </template>
      </Button>
    </section>
    <section class="grid grid-cols-12 gap-4">
      <div v-for="(item, index) in items" :key="index" class="col-span-12 md:col-span-6 lg:col-span-3">
        <div class="p-4 shadow bg-surface-0 dark:bg-surface-900 rounded-border">
          <div class="flex justify-between mb-4">
            <div>
              <p class="block mb-4 dark:text-surface-0 text-xl font-bold">
                {{ item.label }}
              </p>
              <div class="text-surface-900 dark:text-surface-0 font-bold !text-xl">
                152
              </div>
            </div>
            <div class="flex items-center justify-center w-10 h-10 rounded-border" :class="item.backgroundColor">
              <Icon :name="item.icon" size="25" :class="item.iconColor" />
            </div>
          </div>
          <span class="font-bold text-primary">24 new </span>
          <span class="text-surface-500 dark:text-surface-400">since last visit</span>
        </div>
      </div>
    </section>
    <section class="grid grid-cols-12 gap-4">
      <DashboardChartRevenue class="col-span-12 md:col-span-6 xl:col-span-5" />
      <DashboardChartSellingPerformance class="col-span-12 md:col-span-6 xl:col-span-7" />
    </section>
  </main>
</template>
