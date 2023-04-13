<script setup lang="ts">
useHead({
  title: '羊村学堂',
})

const { data, error } = await useFetch('/api/indexdata')
const slides = [
  { label: '1', bgColor: 'cadetblue' },
  { label: '2', bgColor: 'cornflowerblue' },
  { label: '3', bgColor: 'blueviolet' },
  { label: '4', bgColor: 'brown' },
]
if (process.server && error.value)
  showError('获取数据失败！')
</script>

<template>
  <n-carousel show-arrow class="mb-6">
    <div
      v-for="item in slides" :key="item.label"
      class="text-white w-full h-[400px] rounded cursor-pointer text-center leading-[400px]"
      :style="{ backgroundColor: item.bgColor }"
    >
      {{ item.label }}
    </div>
  </n-carousel>
  <ProdList
    :data="data?.data.courses!"
    title="最新课程"
  />
  <ProdList
    :data="data?.data.columns!"
    title="最新专栏"
    type="column"
  />
</template>

<style>

</style>
