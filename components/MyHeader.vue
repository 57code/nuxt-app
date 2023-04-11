<script setup>
const route = useRoute()
const menus = ref([
  { path: '/', label: '首页' },
  { path: '/column', label: '专栏' },
  { path: '/course', label: '课程' },
])

const store = useUser()
const { userInfo } = storeToRefs(store)

const options = [{
  label: '用户中心',
  key: 'center',
}, {
  label: '退出',
  key: 'logout',
}]

const dialog = useDialog()
const handleSelect = (k) => {
  switch (k) {
    case 'logout':
      dialog.warning({
        content: '确定退出登录吗？',
        positiveText: '退出',
        negativeText: '取消',
        onPositiveClick: () => logout(),
      })
      break
    case 'center':
      navigateTo('/usercenter')
      break
  }
}
</script>

<template>
  <div class="bg-white fixed top-0 left-0 right-0 shadow-sm z-1000">
    <div class="container m-auto flex items-center h-[60px] px-4">
      <NButton text strong class="text-xl" @click="navigateTo('/')">
        羊村学堂
      </NButton>

      <div class="flex-1 flex items-center px-4">
        <Menu
          v-for="menu in menus"
          :key="menu.path"
          :active="route.path === menu.path"
          @click="navigateTo(menu.path)"
        >
          {{ menu.label }}
        </Menu>
      </div>

      <NuxtLink v-if="!userInfo" to="/login">
        <NButton secondary strong>
          登录
        </NButton>
      </NuxtLink>

      <NDropdown
        v-else :options="options" @select="handleSelect"
      >
        <NAvatar
          round size="small"
          :src="userInfo.avatar ? userInfo.avatar : '/avatar.png'"
        />
      </NDropdown>
    </div>
  </div>
</template>
