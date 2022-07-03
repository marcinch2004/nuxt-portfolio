<template>
  <div class=main-container>
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
  .main-container {
    @apply flex flex-col min-h-screen 
  }
</style>