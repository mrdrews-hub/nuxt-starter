<script setup lang="ts">
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
]);
</script>

<template>
<main class="grid">
    <div class="flex flex-wrap items-center justify-between px-6 py-2 text-gray-100 bg-surface-900 lg:px-20">
        <div class="font-bold">🔥 Hot Deals!</div>
        <div class="inline-flex items-center gap-1">
            <span class="hidden leading-normal lg:flex">Libero voluptatum atque exercitationem praesentium provident odit.</span>
            <a class="font-bold underline text-surface-0" href="#">Learn More</a>
        </div>
        <Button icon="pi pi-times" text rounded severity="secondary" class="!text-surface-0 hover:!bg-surface-500/20" />
    </div>
    <Menubar :model="items" />
    <section id="chart" class="px-10 mt-10">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="p-4 shadow bg-surface-0 dark:bg-surface-900 rounded-border">
                    <div class="flex justify-between mb-4">
                        <div>
                            <span class="block mb-4 font-medium text-surface-500 dark:text-surface-300">Orders</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">152</div>
                        </div>
                        <div class="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-400/30 rounded-border">
                            <i class="pi pi-shopping-cart text-blue-500 dark:text-blue-200 !text-xl" />
                        </div>
                    </div>
                    <span class="font-medium text-green-500">24 new </span>
                    <span class="text-surface-500 dark:text-surface-300">since last visit</span>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="p-4 shadow bg-surface-0 dark:bg-surface-900 rounded-border">
                    <div class="flex justify-between mb-4">
                        <div>
                            <span class="block mb-4 font-medium text-surface-500 dark:text-surface-300">Revenue</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">$2.100</div>
                        </div>
                        <div class="flex items-center justify-center w-10 h-10 bg-orange-100 dark:bg-orange-400/30 rounded-border">
                            <i class="pi pi-map-marker text-orange-500 dark:text-orange-200 !text-xl" />
                        </div>
                    </div>
                    <span class="font-medium text-green-500">%52+ </span>
                    <span class="text-surface-500 dark:text-surface-300">since last week</span>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="p-4 shadow bg-surface-0 dark:bg-surface-900 rounded-border">
                    <div class="flex justify-between mb-4">
                        <div>
                            <span class="block mb-4 font-medium text-surface-500 dark:text-surface-300">Customers</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">28441</div>
                        </div>
                        <div class="flex items-center justify-center w-10 h-10 bg-cyan-100 dark:bg-cyan-400/30 rounded-border">
                            <i class="pi pi-inbox text-cyan-500 dark:text-cyan-200 !text-xl" />
                        </div>
                    </div>
                    <span class="font-medium text-green-500">520 </span>
                    <span class="text-surface-500 dark:text-surface-300">newly registered</span>
                </div>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3">
                <div class="p-4 shadow bg-surface-0 dark:bg-surface-900 rounded-border">
                    <div class="flex justify-between mb-4">
                        <div>
                            <span class="block mb-4 font-medium text-surface-500 dark:text-surface-300">Comments</span>
                            <div class="text-surface-900 dark:text-surface-0 font-medium !text-xl">152 Unread</div>
                        </div>
                        <div class="flex items-center justify-center w-10 h-10 bg-purple-100 dark:bg-purple-400/30 rounded-border">
                            <i class="pi pi-comment text-purple-500 dark:text-purple-200 !text-xl" />
                        </div>
                    </div>
                    <span class="font-medium text-green-500">85 </span>
                    <span class="text-surface-500 dark:text-surface-300">responded</span>
                </div>
            </div>
        </div>
    </section>
</main>
</template>