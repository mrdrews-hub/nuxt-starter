<script setup>
import { onMounted, ref } from 'vue'
import { ProductService } from '@/services/products.service'

definePageMeta({
  name: 'Products',
})
const products = ref()
function getSeverity(product) {
  switch (product.inventoryStatus) {
    case 'INSTOCK':
      return 'success'

    case 'LOWSTOCK':
      return 'warn'

    case 'OUTOFSTOCK':
      return 'danger'

    default:
      return null
  }
}

const op = ref()
const selectedProduct = ref()
const selectedProducts = ref()
function formatCurrency(value) {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}
const dates = ref([new Date()])
const search = ref()
onMounted(() => {
  ProductService.getProducts().then(data => (products.value = data))
})
</script>

<template>
  <div class="relative">
    <h2 class="text-2xl font-bold mb-5">
      Products
    </h2>
    <div id="filter" class="flex justify-between mb-4">
      <IconField>
        <InputIcon>
          <Icon name="mingcute:search-3-line" />
        </InputIcon>
        <InputText v-model="search" placeholder="Search" class="w-96" variant="filled" />
      </IconField>
      <DatePicker v-model="dates" selection-mode="range" variant="filled" input-id="createdAt" :manual-input="false" size="small" date-format="dd/M/yy" class="w-60" show-icon icon-display="input" :number-of-months="2" placeholder="This Day">
        <template #inputicon>
          <Icon name="mingcute:calendar-2-line" />
        </template>
      </DatePicker>
    </div>
    <DataTable v-model:selection="selectedProducts" :value="products" table-style="min-width: 50rem" paginator :rows="10" :rows-per-page-options="[5, 10, 20, 50]">
      <Column selection-mode="multiple" header-style="width: 3rem" />
      <Column field="name" header="Name">
        <template #body="slotProps">
          <div class="flex items-start gap-2">
            <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="w-20 rounded">
            <div class="flex flex-col">
              <p>{{ slotProps.data.name }}</p>
              <div class="flex items-center gap-1">
                <Chip :label="slotProps.data.category" removable class="text-xs flex items-center gap-1 rounded-full bg-surface-300 text-surface-950 px-2 py-1" unstyled>
                  <template #removeicon="{ removeCallback, keydownCallback }">
                    <i class="pi pi-minus-circle" @click="removeCallback" @keydown="keydownCallback" />
                  </template>
                </Chip>
              </div>
            </div>
          </div>
        </template>
      </Column>
      <Column field="price" header="Price">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
      <Column field="category" header="Category" />
      <Column header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
        </template>
      </Column>
      <template #footer>
        In total there are {{ products ? products.length : 0 }} products.
      </template>
    </DataTable>
    <Popover ref="op">
      <div v-if="selectedProduct" class="rounded flex flex-col">
        <div class="flex justify-center rounded">
          <div class="relative mx-auto">
            <img class="rounded w-44 sm:w-64" :src="`https://primefaces.org/cdn/primevue/images/product/${selectedProduct.image}`" :alt="selectedProduct.name">
            <Tag :value="selectedProduct.inventoryStatus" :severity="getSeverity(selectedProduct)" class="absolute dark:!bg-surface-900" style="left: 4px; top: 4px" />
          </div>
        </div>
        <div class="pt-4">
          <div class="flex flex-row justify-between items-start gap-2 mb-4">
            <div>
              <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{ selectedProduct.category }}</span>
              <div class="text-lg font-medium mt-1">
                {{ selectedProduct.name }}
              </div>
            </div>
            <div class="bg-surface-100 p-1" style="border-radius: 30px">
              <div class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                <span class="text-surface-900 font-medium text-sm">{{ selectedProduct.rating }}</span>
                <i class="pi pi-star-fill text-yellow-500" />
              </div>
            </div>
          </div>
          <div class="flex gap-2">
            <Button icon="pi pi-shopping-cart" :label="`Buy Now | \$${selectedProduct.price}`" :disabled="selectedProduct.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto whitespace-nowrap" @click="hidePopover" />
            <Button icon="pi pi-heart" variant="outlined" @click="hidePopover" />
          </div>
        </div>
      </div>
    </Popover>
  </div>
</template>
