<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import type { IResult } from '~/types/IResult'

useHead({ title: '修改密码' })

const formRef = ref<FormInst>()
const form = reactive({
  oldPwd: '',
  newPwd: '',
  repassword: '',
})

const rules = {
  oldPwd: [{
    required: true,
    message: '原密码必填',
  }],
  newPwd: [{
    required: true,
    message: '密码必填',
  }],
  repassword: [{
    required: true,
    message: '确认密码必填',
  }, {
    validator(rule, value) {
      return value === form.newPwd
    },
    message: '两次密码输入不一致',
    trigger: ['input', 'blur'],
  }],
}

const loading = ref(false)
const onSubmit = () => {
  formRef.value!.validate(async (errors) => {
    if (errors)
      return

    const {
      ok,
    } = await httpPost<IResult>('/api/changePwd', form)

    if (ok)
      message.success('修改密码成功！')
  })
}
</script>

<template>
  <div class="p-5">
    <NForm ref="formRef" :model="form" :rules="rules" label-width="80">
      <NFormItem label="原密码" path="oldPwd">
        <NInput v-model:value="form.oldPwd" placeholder="原密码" type="password" />
      </NFormItem>
      <NFormItem label="新密码" path="newPwd">
        <NInput v-model:value="form.newPwd" placeholder="新密码" type="password" />
      </NFormItem>
      <NFormItem label="确认密码" path="repassword">
        <NInput
          v-model:value="form.repassword" placeholder="确认密码" type="password"
          :disabled="!form.newPwd"
        />
      </NFormItem>
      <div class="flex justify-end">
        <NButton type="primary" :loading="loading" @click="onSubmit">
          密码修改
        </NButton>
      </div>
    </NForm>
  </div>
</template>
