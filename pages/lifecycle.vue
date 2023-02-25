<template>
  <div>

  </div>
</template>

<script setup lang="ts">
// 获取组件实例
const ins = getCurrentInstance()
onMounted(() => {
  ins?.proxy?.$alert('component mounted!')

})
</script>

<style scoped>

</style>