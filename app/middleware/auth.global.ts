import { PUBLIC_PATH } from '~/constants/route.contant'

export default defineNuxtRouteMiddleware((to, _) => {
  const { loggedIn } = useUserSession()
  const publicPath = Object.entries(PUBLIC_PATH).map(([key, value]) => value.path)
  if (!loggedIn.value && !publicPath.includes(to.path)) {
    return navigateTo('/login')
  }
  if (loggedIn.value && publicPath.includes(to.path)) {
    return navigateTo('/')
  }
})