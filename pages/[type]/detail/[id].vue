<script setup lang="ts">
import type { IResult } from '~/types/IResult'

const route = useRoute()
const { id, type } = route.params

const { data } = useFetch<IResult>(`/api/${type}/${id}`)
const item = computed(() => data.value?.data.item)
useHead({ title: item.value?.title || '详情' })

const tabs = ref([{
  label: '详情',
  value: 'detail',
}])
const curr = ref('detail')

if (type === 'course') {
  tabs.value.push({
    label: '目录',
    value: 'catalogue',
  })
}

const subscribe = () => {
  navigateTo(`/createorder?id=${id}`)
}
</script>

<template>
  <section class="rounded bg-white flex p-5 my-2">
    <NImage
      :src="`/${data?.data.item.cover}`" object-fit="cover"
      class="rounded w-[380px] h-[210px] mr-5"
    />
    <div class="flex flex-1 flex-col py-2">
      <div class="flex flex-col items-start">
        <div class="flex items-center">
          <span class="text-xl mr-2">{{ data?.data.item.title }}</span>
        </div>
        <p class="my-2 text-sm text-gray-400 ml-[0.1rem]">
          {{ data?.data.item.desc }}
        </p>
        <div v-if="type === 'course'">
          <span class="text-green-600 font-bold">
            🌱 {{ data?.data.item.price }}
          </span>
          <span class="text-gray-500 text-xs line-through ml-2">
            {{ data?.data.item.oPrice }}
          </span>
        </div>
      </div>

      <div v-if="type === 'course'" class="mt-auto">
        <NButton type="primary" @click="subscribe">
          快到碗里来
        </NButton>
      </div>
    </div>
  </section>

  <NGrid :x-gap="20" class="pt-2">
    <NGridItem :span="18">
      <section class="bg-white shadow-white mb-5 rounded">
        <Tabs
          :data="tabs"
          :state="curr"
          @change="curr = $event"
        />
        <div
          v-if="curr === 'detail'"
          class="pt-4 pb-10 px-10 content"
          v-html="type === 'course' ? item?.detail : item?.content"
        />
        <Catalogue v-else :data="item.Catalogue" />
      </section>
    </NGridItem>
    <NGridItem :span="6">
      <section class="bg-white shawdow rounded mb-5">
        <div class="p-3 border-b ">
          <h4>精品推荐</h4>
        </div>
        <div class="p-3">
          <Prod v-for="prod in data?.data.recommend" :key="prod.id" :data="prod" />
        </div>
      </section>
    </NGridItem>
  </NGrid>
</template>

<style>
.content img {
  max-width: 100% !important;
}
</style>
