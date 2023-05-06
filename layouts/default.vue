<script setup lang="ts">
import type { IResult } from '~/types/IResult'

onMounted(async () => {
  const store = useUser()
  // 获取用户信息
  const { ok, data } = await httpGet<IResult>('/api/userinfo')
  if (ok)
    store.userInfo = data
})
</script>

<template>
  <div class="lg:min-w-[1024px] bg-gray-100 flex flex-col min-h-screen">
    <MyHeader />
    <main class="container m-auto mt-20">
      <slot />
    </main>
    <MyFooter />
  </div>
</template>
