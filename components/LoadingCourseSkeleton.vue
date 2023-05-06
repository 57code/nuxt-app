<template>
  <NGrid :x-gap="20" :y-gap="5" :cols="4">
    <NGridItem v-for="i in 8" :key="i">
      <NCard class="mb-5">
        <template #cover>
          <NSkeleton height="150px" width="100%" />
        </template>
        <NSkeleton width="50%" height="15px" class="my-2" />
        <NSkeleton text style="width: 60%" />
      </NCard>
    </NGridItem>
  </NGrid>
</template>
