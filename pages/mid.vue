<template>
  <div>
    <h1>Mid Page</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  // middleware(to, from) {
  //   console.log('匿名中间件，具体页面执行，不可复用！');
    
  // }
  middleware: ['amid', 'bmid']
})
</script>

<style scoped>

</style>