import { createDiscreteApi } from 'naive-ui'

export const { message, notification, dialog, loadingBar } = createDiscreteApi(
  ['message', 'dialog', 'notification', 'loadingBar'],
)
