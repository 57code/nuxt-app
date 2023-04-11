export function logout() {
  // 清除状态
  const store = useUser()
  store.userInfo = null

  // 清cookie
  const token = useCookie('token')
  if (token.value)
    token.value = null

  message.success('退出登录成功')

  // 回到首页
  const route = useRoute()
  if (route.path !== '/')
    navigateTo('/')
}
