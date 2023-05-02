<!-- 修改资料页面 -->
<script setup lang="ts">
import type { IResult } from '../../types/IResult'

// 获取用户名
const store = useUser()
const { userInfo } = storeToRefs(store)

const formRef = ref(null)
const form = reactive({
  avatar: '',
  nickname: '',
  sex: '',
})

watchEffect(() => {
  if (userInfo.value) {
    form.avatar = userInfo.value.avatar
    form.nickname = userInfo.value.nickname
    form.sex = userInfo.value.sex
  }
})

const loading = ref(false)
const onSubmit = async () => {
  const { ok, data } = await httpPost<IResult>('/api/userinfo', form)

  // 刷新用户信息
  // useRefreshUserInfo()
  if (ok) {
    store.userInfo = data
    message.info('更新成功')
  }
}
</script>

<template>
  <div class="p-5">
    <NForm ref="formRef" :model="form" label-width="80" label-placement="left">
      <NFormItem label="昵称" path="nickname">
        <NInput v-model:value="form.nickname" placeholder="请输入昵称" />
      </NFormItem>
      <NFormItem label="性别" path="sex">
        <NRadioGroup v-model:value="form.sex" name="sex">
          <NSpace>
            <NRadio
              v-for="item in [{
                value: '保密',
              }, {
                value: '男',
              }, {
                value: '女',
              }]" :key="item.value" :value="item.value"
            >
              {{ item.value }}
            </NRadio>
          </NSpace>
        </NRadioGroup>
      </NFormItem>
      <NFormItem>
        <NButton class="ml-8" type="primary" :loading="loading" @click="onSubmit">
          提交修改
        </NButton>
      </NFormItem>
    </NForm>
  </div>
</template>
