<template>
  <main>
    <section class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">my blog</div>
      <!-- <p>{{posts}}</p> -->
          <div class="" v-for="post in posts" :key="post.id">
            <nuxt-link :to="`blog/${ post.fields.slug }`">
              <h2>{{ post.fields.title }}</h2>
              <img :src="post.fields.heroImage.fields.file.url" alt="">
            </nuxt-link>
          </div>
    </section>
  </main>
</template>

<script>

  export default {
    layout: 'blog',
    computed: {
      posts() {
        return this.$store.state.posts;
      }
    }
  }
</script>

// all styles go here
<style lang="postcss">
  h2 {
    @apply text-5xl font-bold
  }
</style>