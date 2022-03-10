<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<style lang="postcss">
  body {
    scroll-behavior: smooth;
  }
  .body-no-scroll {
    @apply overflow-hidden
  }
</style>