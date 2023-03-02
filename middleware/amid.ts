export default defineNuxtRouteMiddleware((to, from) => {
  console.log('具名中间件a，影响指定页面：' + to.path); 
})