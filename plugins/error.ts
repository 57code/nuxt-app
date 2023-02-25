export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.config.errorHandler = () => {
    console.log('vue error handler');
  }

  nuxt.hook('vue:error', (err) => {
    console.log(err);
    
    console.log('vue:error');
  })
  nuxt.hook('app:error', (err) => {
    console.log('app:error');
  })
})