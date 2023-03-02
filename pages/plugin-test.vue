<template>
  <div>
    <ClientOnly>
      <p>{{ date1 }}</p>
      <p>{{ date2 }}</p>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
// 获取nuxtApp
const nuxtApp = useNuxtApp()
const date1 = nuxtApp.$format()
const date2 = nuxtApp.$format(new Date, 'YYYYMMDD')
</script>

<style scoped>

</style>