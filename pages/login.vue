<script setup lang="ts">
const email = useState(() => '')
const onLogin = () => {
  $fetch('/api/login', {
    method: 'post',
    body: {
      email: email.value,
    },
  }).then((user) => {
    console.log(user)
  }).catch((err) => {
    console.log(err)
  })
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
