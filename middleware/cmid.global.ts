export default defineNuxtRouteMiddleware((to, from) => {
  console.log('全局中间件c，影响指定页面'); 
})