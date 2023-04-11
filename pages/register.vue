<script setup lang="ts">
import type { FormInst, FormRules } from 'naive-ui'

useHead({
  title: '注册',
})

definePageMeta({
  layout: 'blank',
})

const formRef = ref<FormInst>()
const model = ref({
  username: '',
  password: '',
  confirmPass: '',
})

const rules: FormRules = {
  username: [{
    required: true,
    message: '请输入用户名',
    trigger: 'blur',
  }],
  password: [{
    required: true,
    message: '请输入密码',
    trigger: 'blur',
  }],
  confirmPass: [{
    required: true,
    message: '请再次输入密码',
  }, {
    validator: (rule, value, callback) => {
      if (value !== model.value.password) {
        callback(new Error('两次输入的密码不一致'))
        return false
      }
      else {
        callback()
        return true
      }
    },
    trigger: ['blur', 'input'],
  }],
}

const store = useUser()
const register = () => {
  // 校验
  formRef.value!.validate(async (errors) => {
    if (!errors) {
      const { ok, data } = await httpPost('/api/register', {
        username: model.value.username,
        password: model.value.password,
      })
      if (ok) {
        // 保存user状态
        store.userInfo = data
        // 跳转首页
        navigateTo('/')
      }
    }
  })
}
</script>

<template>
  <h2>加入羊群</h2>
  <NForm ref="formRef" :model="model" :rules="rules" class="w-[340px]" size="large">
    <NFormItem :show-label="false" path="username">
      <NInput v-model:value="model.username" clearable placeholder="用户名" />
    </NFormItem>
    <NFormItem :show-label="false" path="password">
      <NInput v-model:value="model.password" clearable placeholder="密码" type="password" />
    </NFormItem>
    <NFormItem :show-label="false" path="confirmPass">
      <NInput v-model:value="model.confirmPass" clearable placeholder="确认密码" type="password" />
    </NFormItem>

    <div>
      <NButton class="w-full" type="primary" @click="register">
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
