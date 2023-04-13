<script setup lang="ts">
import type { Column, Course } from '.prisma/client'
import type { PropType } from 'vue'

const props = defineProps({
  data: { type: Object as PropType<Course | Column>, required: true },
  type: String,
})

const open = () => {
  if (props.type === 'course')
    navigateTo(`/course/detail/${props.data!.id}`)
  else
    navigateTo(`/column/detail/${props.data!.id}`)
}
</script>

<template>
  <NCard
    class="cursor-pointer mb-5 shadow-md !border-0"
    footer-style="padding:0;"
    @click="open"
  >
    <template #cover>
      <img
        :src="data.cover"
        class="w-[100%] h-[150px]"
      >
    </template>
    <div class="pt-2">
      <span class="font-bold w-full truncate font-semibold">
        {{ data.title }}
      </span>
    </div>
    <div class="mt-2 flex">
      <div v-if="'price' in data">
        <span class="text-green-600 font-bold">
          🌱 {{ data.price }}
        </span>
        <span class="text-gray-500 text-xs line-through ml-2">
          {{ data.oPrice }}
        </span>
      </div>

      <span v-else>🌱 免费</span>
    </div>
  </NCard>
</template>
