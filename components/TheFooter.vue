<template>
  <footer class="header relative flex flex-wrap items-center justify-between px-2 py-3">
    <div class="content m-auto max-w-2xl lg:max-w-7xl px-6 container mx-auto flex flex-wrap items-center justify-between">
      <div class="">
        <p class="text-xs leading-normal mt-0"> © Marcin Chełminiak · 2022 <br>
        Built with ♥, Nuxt and Netlify</p>
      </div>
      <nav class="">
        <a class="footer-link" target="_blank" href="https://www.linkedin.com/in/marcin-chelminiak-7b83ab91/">
          linkendin
        </a>
        <a class="footer-link" target="_blank" href="https://www.behance.net/marcinchelminiak">
          behance
        </a >

      </nav>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  @apply border-t
}
.footer-link {
  @apply  hover:text-blue-500 transition-colors duration-200 ml-4
}
</style>