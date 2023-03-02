import dayjs from 'dayjs'
export default defineNuxtPlugin(nuxtApp => {
  console.log(nuxtApp);
  // 使用声明周期钩子
  nuxtApp.hook('app:error', (err) => {
    // do
  })
  // 访问vue实例
  nuxtApp.vueApp.config.globalProperties.$xxx = () => {

  }
  // provide全局注入属性和方法
  nuxtApp.provide('format', (date?: Date, template?: string) => {
    return dayjs(date).format(template)
  })
})