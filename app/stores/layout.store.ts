export const useLayoutStore = defineStore('layoutStore', () => {
  const layoutConfig = reactive({
    darkMode: false,
    sideBar: 'static',
  })
  const isDarkmode = computed(() => layoutConfig.darkMode)
  const triggerDarkMode = () => {
    layoutConfig.darkMode = !layoutConfig.darkMode
    document.documentElement.classList.toggle('dracula')
  }
  const toggleDarkMode = () => {
    if (!document.startViewTransition) {
      return triggerDarkMode()
    }
    document.startViewTransition(() => triggerDarkMode())
  }

  return { layoutConfig, isDarkmode, triggerDarkMode, toggleDarkMode }
}, {
  persist: {
    storage: localStorage,
    pick: ['layoutConfig'],
  },
})