<script setup lang="ts">
const store = useCounter()
const { count } = storeToRefs(store)
</script>

<template>
  <div class="i-vscode-icons-file-type-nuxt" />
  <NButton type="primary">
    hello
  </NButton>
  <p @click="count++">
    {{ count }}
  </p>
</template>

<style scoped></style>
