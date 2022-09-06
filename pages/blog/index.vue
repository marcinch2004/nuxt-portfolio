<template>
  <main class="flex-grow">
    <section class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <!-- <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">my blog</div> -->
      <!-- <p>{{posts[0].fields.thumbnail.fields.file.url}}</p> -->
          <div class="" v-for="post in posts" :key="post.id">
            <nuxt-link class="mb-20 flex sm:flex-row flex-col" :to="`blog/${ post.fields.slug }`">
              <div class="flex flex-col order-last sm:order-first image sm:w-80 mr-0 sm:mr-12 mt-6 sm:mt-0">
                <img class="sm:self-end self-start  sm:w-2/3 w-full h-auto mt-0" :src="post.fields.thumbnail.fields.file.url" alt="">
              </div>
              <div class="max-w-prose">
                <p class="text-sm text-gray-500 mt-0">{{post.sys.updatedAt.split("T")[0].split('-').reverse().join('.')}}</p>
                <h3 class="text-xl font-bold my-4">{{ post.fields.title }}</h3>
                <p class="description">{{post.fields.description}}</p>
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
  .image {
    min-width: 20rem;
  }
</style>