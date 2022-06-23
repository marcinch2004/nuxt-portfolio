<template>
  <main>
    <section class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
      <div class="mt-6 grid grid-cols-1 gap-y-12 gap-x-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-12">my work
          <div class="portfolio_item group transform transition-all ease-out duration-500" v-for="(portfolio, index) in this.$store.state.portfolios" :key="index">
            <nuxt-link class="group block" :to="`/${ portfolio.fields.slug }`">
              <h3 class="transition-all ease-out duration-500">{{ portfolio.fields.title }}</h3>
              <p class="portfolio_description text-gray-600 transition-all ease-out duration-500 text-sm text-mono">{{portfolio.fields.description}}</p>
              <img class="portfolio_img transition-all ease-out duration-500 pt-2" :src="portfolio.fields.heroImage.fields.file.url" alt="">
            </nuxt-link>
          </div>
      </div>
    </section>
  </main>
</template>

<script>

  export default {
    layout: 'blog',
    computed: {
      portfolios() {
        return this.$store.state.portfolios
      }
    }
  }
</script>

// all styles go here
<style lang="postcss">
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@400;700&display=swap');

  body {
    font-family: 'IBM Plex Sans', sans-serif;
  }
  .text-mono {
    font-family: 'IBM Plex Mono', monospace;
  }

  h2 {
    @apply text-5xl font-bold py-6
  }
  h3 {
    @apply text-2xl font-bold mb-2
  }
  .lead {
    @apply text-2xl
  }
  .portfolio_item:hover h3 {
    transform: translateY(-0.3rem);
  }
  .portfolio_item:hover .portfolio_description {
    transform: translateY(-0.1rem);
  }
  .portfolio_item:hover .portfolio_img {
    transform: translateY(0.3rem);
  }

</style>