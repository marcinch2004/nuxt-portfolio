<template>
  <section class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="cos">
      <!-- <p>{{allPosts}}</p> -->
      <nuxt-link to="/">back to mainpage</nuxt-link>

      <h2>{{post.fields.title}}</h2>
      <div v-html="markdownToHtml"></div>

      <!-- this shows just post body text without conversion to marked version -->
      <!-- <p>{{post.fields.body}}</p> -->
      
      <p>current slug | {{post.fields.slug}}</p>
      <hr>
        <nuxt-link v-if="currentPostIndex() > 0" :to="allPosts[currentPostIndex() - 1].fields.slug">
          previous post: {{allPosts[currentPostIndex() - 1].fields.slug}}
        </nuxt-link>
        <br>
        <nuxt-link v-if="currentPostIndex() < this.$store.state.posts.length-1" :to="allPosts[currentPostIndex() + 1].fields.slug">
          next post:{{allPosts[currentPostIndex() + 1].fields.slug}}
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