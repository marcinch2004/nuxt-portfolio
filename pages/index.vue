<template>
  <main>
    <section class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">my work
          <div class="portfolio_item group w-11/12 transform transition-all ease-out duration-500 shadow-xl px-8 py-6 bg-gradient-to-tl from-gray-300 to-gray-100" v-for="(portfolio, index) in this.$store.state.portfolios" :key="index">
            <nuxt-link class="group block" :to="`/${ portfolio.fields.slug }`">
              <h3 class="transition-all ease-out duration-500">{{ portfolio.fields.title }}</h3>
              <p class="portfolio_description text-gray-600 transition-all ease-out duration-500">{{portfolio.fields.description}}</p>
              <img class="portfolio_img transition-all ease-out duration-500" :src="portfolio.fields.heroImage.fields.file.url" alt="">
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
  h2 {
    @apply text-5xl font-bold py-6
  }
  h3 {
    @apply text-4xl font-bold mb-2
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