<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '标题',
  },
  data: {
    type: Array<any>,
    required: true,
  },
  type: {
    type: String,
    default: 'course',
  },
})
</script>

<template>
  <div>
    <div class="flex mb-3">
      <span>{{ title }}</span>
      <NButton quaternary class="ml-auto">
        查看更多
      </NButton>
    </div>
    <NGrid x-gap="12" :cols="4" class="mb-6">
      <NGi v-for="item in data" :key="item.id">
        <Prod :data="item" :type="type" />
      </NGi>
    </NGrid>
  </div>
</template>
