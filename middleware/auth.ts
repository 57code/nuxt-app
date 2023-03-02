export default defineNuxtRouteMiddleware((to, from) => {
  // 判断用户是否登录
  const store = useUser()

  if (!store.isLogin) {
    return navigateTo('/login?callback=' + to.path)
  }
})