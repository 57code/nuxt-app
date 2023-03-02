declare module '#app' {
  interface NuxtApp {
    $format (date?: Date, msg?: string): string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $format (date?: Date, msg?: string): string
  }
}

export { }
