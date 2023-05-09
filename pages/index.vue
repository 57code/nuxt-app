<script setup lang="ts">
useHead({
  title: '羊村学堂',
})

const { data, error } = await useFetch('/api/indexdata')
const slides = [
  { label: '1', bgColor: 'cadetblue' ,src : "./Vue3组件库实战.png"},
  { label: '2', bgColor: 'cornflowerblue',src : "./Vue3组件库实战.png" },
  { label: '3', bgColor: 'blueviolet',src : "./Vue3组件库实战.png" },
  { label: '4', bgColor: 'brown',src : "./Vue3组件库实战.png" },
]
if (process.server && error.value)
  showError('获取数据失败！')
</script>

<template>
  <!-- banner -->
  <n-carousel show-arrow class="mb-6">
    <!-- <n-carousel-item v-for="(item, index) in slides" :key="index">
        <img :src="item.src" alt="">
    </n-carousel-item> -->
    <div
      v-for="item in slides" :key="item.label"
      class="text-white w-full h-[150px] lg:h-[400px] rounded cursor-pointer text-center leading-[400px]"
      :style="{ backgroundColor: item.bgColor }"
    >
      {{ item.label }}
      <!-- <img src="../public/Vue3组件库实战.png" /> -->
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
