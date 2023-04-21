<!-- 搜索结果页tab组件 -->
<script setup lang="ts">
defineProps({
  data: {
    type: Array<{ label: string; value: string }>,
    required: true,
  },
  state: String,
})

const emit = defineEmits(['change'])

const changeTab = (state: string) => {
  emit('change', state)
}
</script>

<template>
  <div class="w-full flex overflow-x-auto bg-white rounded mb-4 border-b">
    <span
      v-for="item in data"
      :key="item.value"
      class="py-3 px-4 text-gray-700 text-sm cursor-pointer flex-shrink-0 hover:text-green-600"
      :class="{ 'tab-item-active': item.value === state }"
      @click="changeTab(item.value)"
    >
      {{ item.label }}
    </span>
  </div>
</template>

<style>
.tab-item-active {
    border-bottom: 2px solid rgb(3, 168, 9);
    @apply text-green-400 border-green-500;
}
</style>
