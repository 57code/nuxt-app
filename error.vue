<script setup>
defineProps({
  error: Object,
})
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="pt-[14rem]">
    <NResult status="500" title="服务器错误" :description="error.message">
      <template #footer>
        <NButton @click="handleError">
          回到首页
        </NButton>
      </template>
    </NResult>
  </div>
</template>
