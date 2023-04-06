<template>
  <div class="min-w-[1024px] bg-gray-100 flex flex-col min-h-screen">
    <MyHeader />
    <main class="container m-auto mt-20">
      <slot />
    </main>
    <MyFooter />
  </div>
</template>
