<script setup lang="ts">
useHead({
  title: '注册',
})

definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <h2>加入羊群</h2>
  <NForm ref="formRef" class="w-[340px]" size="large">
    <NFormItem :show-label="false" path="username">
      <NInput clearable placeholder="用户名" />
    </NFormItem>
    <NFormItem :show-label="false" path="password">
      <NInput clearable placeholder="密码" type="password" />
    </NFormItem>
    <NFormItem :show-label="false" path="repassword">
      <NInput clearable placeholder="确认密码" type="password" />
    </NFormItem>

    <div>
      <NButton class="w-full" type="primary">
        登录
      </NButton>
    </div>
    <div class="flex justify-center items-center w-full text-xs mt-5 text-gray-600">
      注册即同意
      <NButton quaternary type="primary" size="tiny">
        《服务协议》
      </NButton>
      和
      <NButton quaternary type="primary" size="tiny">
        《隐私政策》
      </NButton>
    </div>
  </NForm>
</template>
