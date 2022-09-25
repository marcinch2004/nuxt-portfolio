<template>
  <section class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-screen-lg lg:px-8 ">
    <div class="flex flex-col content-start">

      <!-- <p>{{allPosts}}</p> -->
      <nuxt-link class="self-start mr-12 px-4 py-2 mb-8 border rounded-full text-xs group nav-bottom-link text-mono transition-colors hover:border-blue-500" to="/blog">Back to blog</nuxt-link>

      <div class="max-w-2xl">
        <h2 class="">{{post.fields.title}}</h2>
        <div v-html="markdownToHtml"></div>
      </div>

    </div>  
    <div class="nav-bottom">
      <nuxt-link class="group nav-bottom-link text-mono" v-if="currentPostIndex() > 0" :to="allPosts[currentPostIndex() - 1].fields.slug">
        <ArrowLeft />
         <span class="self-center">{{allPosts[currentPostIndex() - 1].fields.slug}}</span>
      </nuxt-link>
        <br>
      <nuxt-link class="group nav-bottom-link text-mono" v-if="currentPostIndex() < this.$store.state.posts.length-1" :to="allPosts[currentPostIndex() + 1].fields.slug">
        <span class="self-center">{{allPosts[currentPostIndex() + 1].fields.slug}}</span>
        <ArrowRight />
      </nuxt-link>
        <!-- <p>{{post}}</p> -->
    </div>
  </section>
</template>

<script>
// import { documentToHtmlString } from "@contentful-rich-text-vue-renderer"
import { marked } from 'marked';

export default {

  data() {
    return {
      slug: this.$route.params.slug,
      allPosts: this.$store.state.posts
    };
  },

  computed: {
    post() {
      let post = this.$store.state.posts.filter(p => p.fields.slug === this.slug)
      // console.log(post[0].fields.body);
      // console.log(post[0].fields.body);
      return post[0]
    },
     markdownToHtml() {
       let postToMarkdown = this.$store.state.posts.filter(p => p.fields.slug === this.slug)
        console.log("markdown function");
        postToMarkdown = postToMarkdown[0].fields.body
        // console.log(postToMarkdown);
        return marked(postToMarkdown);
   },
  },
  methods: {
    currentPostIndex() {
      let current_post_index = this.$store.state.posts.findIndex(p => p.fields.slug === this.slug);
      // console.log(current_post_index);
      return current_post_index
    },
  },
    head() {
      return {
        // title: this.post.fields.title
      };
    }
}
</script>

<style lang="postcss" scoped>
  h2 {
    padding-bottom: 0
  }
</style>

<style lang="postcss">
  h3 {
    @apply mt-12 text-2xl font-bold
  }
  img {
    @apply mt-8 mb-4
  }
  p {
    @apply text-lg mt-6 leading-relaxed
  }
  figcaption {
    @apply mb-10 text-blue-500 text-xs
  }
  ul {
    @apply text-lg my-4 list-disc pl-4;
  }
  p > img {
    /* border: 1px solid red; */
  }
  .nav-bottom {
    @apply flex justify-between m-auto max-w-2xl px-6 lg:max-w-7xl mt-10
  }
  .nav-bottom-link {
    @apply flex flex-row align-middle text-xs
  }
</style>