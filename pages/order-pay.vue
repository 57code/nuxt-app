<script setup lang="ts">
import type { Course } from '.prisma/client'
import type { IResult } from '../types/IResult'

const route = useRoute()
const { id } = route.query

// 获取订单过期时间，用于倒计时，如果已过期可以设置isTimeout，略
const { data } = await httpGet<IResult>(`/api/order/${id}`)
const course = computed<Course | undefined>(() => data?.course)

if (process.client) {
  setTimeout(async () => {
    const { ok } = await httpPost<IResult>('/api/ordercomplete', { id, status: 'COMPLETED' })

    if (ok)
      navigateTo(`/course/detail/${course.value!.id}`)
  }, 5000)
}

const isTimeout = ref(false)
</script>

<template>
  <div class="flex justify-center">
    <NCard class="w-[450px] mb-10 text-center">
      <h1 class="text-3xl mb-2 text-center">
        确认支付
      </h1>
      <p class="flex  text-gray-500 justify-center">
        <span v-if="!isTimeout">
          距离过期还有&nbsp;
          <Counter :expire="30" class="text-rose-500" @end="isTimeout = true" />
        </span>
        <span v-else>订单已过期，请重新订阅课程</span>
      </p>
      <h5 class="flex justify-center items-center mt-0 mb-3">
        总额：
        <span class="text-green-600 font-bold text-2xl">
          🌱 {{ course?.price }}
        </span>
      </h5>
      <img src="/qrcode.jpg">
      <div class="flex justify-center items-center py-4 text-green-500">
        <div class="ml-3 text-gray-500 text-sm">
          <p>请用防狼枪扫射二维码</p>
        </div>
      </div>
    </NCard>
  </div>
</template>
