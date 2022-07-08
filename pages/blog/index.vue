<template>
  <main>
    <section class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <!-- <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">my blog</div> -->
      <!-- <p>{{posts}}</p> -->
          <div class="" v-for="post in posts" :key="post.id">
            <nuxt-link class="mb-24 grid gap-y-12 gap-x-10 sm:grid-cols-1 lg:grid-cols-3 grid-cols-1 xl:gap-x-12" :to="`blog/${ post.fields.slug }`">
              <div class="lg:col-span-2 col-span-1">
                <p class="text-sm text-gray-500">{{post.sys.updatedAt.split("T")[0].split('-').reverse().join('.')}}</p>
                <h3 class="my-4">{{ post.fields.title }}</h3>
                <p class="description">{{post.fields.description}}</p>
              </div>
              <div class="h-48 overflow-hidden">
                <img class="w-full h-auto" :src="post.fields.heroImage.fields.file.url" alt="">
              </div>
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
    @apply text-5xl font-bold pt-0
  }
</style>