import { merge } from 'lodash'

type FetchType = typeof $fetch
type ReqType = Parameters<FetchType>[0]
type FetchOptions = Parameters<FetchType>[1]

export function httpRequest<T = unknown>(
  method: any,
  url: ReqType,
  body?: any,
  opts?: FetchOptions,
) {
  const token = useCookie('token')
  const router = useRouter()
  const route = useRoute()

  const defaultOpts = {
    method,
    // baseURL: '/api',
    headers: { token: token.value } as any,
    body,
    onRequestError() {
      message.error('请求出错，请重试！')
    },
    onResponseError({ response }) {
      console.log(response)

      switch (response.status) {
        case 400:
          message.error('参数错误')
          break
        case 401:
          message.error('没有访问权限')
          router.push(`/login?callback=${route.path}`)
          break
        case 403:
          message.error('服务器拒绝访问')
          break
        case 404:
          message.error('请求地址错误')
          break
        case 500:
          message.error('服务器故障')
          break
        default:
          message.error('网络连接故障')
          break
      }
    },
  } as FetchOptions

  return $fetch<T>(url, merge(defaultOpts, opts))
}

export function httpPost<T = unknown>(
  request: ReqType,
  body?: any,
  opts?: FetchOptions,
) {
  return httpRequest<T>('post', request, body, opts)
}

export function httpGet<T = unknown>(
  request: ReqType,
  opts?: FetchOptions,
) {
  return httpRequest<T>('get', request, null, opts)
}
