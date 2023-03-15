<script setup lang="ts">
import type { FetchResult } from '~~/types/IResult'

const email = useState(() => '')
const Message = useMessage()
const router = useRouter()

const onLogin = async () => {
  const { ok } = await post<FetchResult>('/api/login', {
    email: email.value,
  })
  if (ok) {
    Message.success('登录成功！')
    router.push('/')
  }
}
</script>

<template>
  <div>
    <NInput v-model:value="email" />
    <NButton @click="onLogin">
      登录
    </NButton>
  </div>
</template>
