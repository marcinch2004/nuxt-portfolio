<template>
  <section class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="cos">
      <!-- <p>{{allPosts}}</p> -->
      <nuxt-link to="/">back to mainpage</nuxt-link>
      <h2>{{post.fields.title}}</h2>
      <!-- {{this.$store.state.posts}} -->
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
      return post[0]
    }
  },
  methods: {
    currentPostIndex() {
      let current_post_index = this.$store.state.posts.findIndex(p => p.fields.slug === this.slug);
      console.log(current_post_index);
      return current_post_index
    }
    //   let next_post_index =  current_post_index + 1
    //   console.log(`current_post_index: ${current_post_index}`);
    //   const allPosts = this.$store.state.posts
    //   allPosts.forEach((slug, index) => console.log(slug, index))
    //   const nextPost = allPosts.filter(p => p.fields.slug = )
    //   // index === current_post_index ? "true"  : "false"
    // }
      // arrayWithSlugs() {
      //   const slugs = []
      //   const posts = this.$store.state.posts
      //   for(let i = 0; i < posts.length; i++) {

      //     for(let j = 0; i < posts[i].length; j++) {
      //       console.log(posts[i][j])
      //     }
      //   }
      // },

      
    // thisSlug() {
    //   const current_slug = this.slug.toString()
    //   console.log(`current_slug: ${current_slug}`);
    //   return current_slug
    // },
    // post() {
    //   let posts = this.$store.state.posts
    //   return posts    
    // }
  },
    head() {
      return {
        // title: this.post.fields.title
      };
    }
}
</script>