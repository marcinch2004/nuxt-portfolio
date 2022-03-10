<template>
  <section class="container-fluid mx-auto py-16 sm:py-24">
    <nuxt-link to="/">← back to mainpage</nuxt-link>

    <!-- top post section -->
    <div class="flex flex-wrap m-auto max-w-2xl lg:max-w-7xl mb-12">
      <div class="flex flex-col w-3/6">
        <h2 class="bg-gray-200 ">{{post.fields.title}}</h2>
        <div class="bg-yellow-200">{{post.fields.description}}</div>
      </div>
      <div class="bg-blue-200 w-3/6">
        <p class="lead">{{post.fields.lead}}</p>
      </div>
    </div>

    <!-- Hero image here -->
    <div class="bg-gray-400">
        <img class="w-full" :src="post.fields.heroImage.fields.file.url" alt="">
    </div>

    <!-- Gallery 1 static -->
    <!-- <div class="grid-gallery">
      <h3 class="">Gallery 1</h3>
      <p class="lead">{{post.fields.galleryOneText}}</p>
      <div class="" v-for="image in post.fields.galleryOne" :key="image.id">
        <img class="" :src="image.fields.file.url" alt="">
        <p v-if="image.fields.description">{{image.fields.description}}</p>
      </div>
    </div> -->

<!-- Gallery 1 -->
    <div class="grid-gallery">
      <h3 class="">Gallery 1</h3>
      <p class="lead" v-html="post.fields.galleryOneText">{{post.fields.galleryOneText}}</p>
        <div v-for="(image, index) in post.fields.galleryOne" :key="index">
          <div class="gallery-item" :id="image.fields.title" v-on:click="toggleModal(image.fields.file)" :class="{active : showModal}">
            <img :src="image.fields.file.url" alt="">
            <!-- Modal -->
            <transition name="fade">
              <div class="modal" v-if="showModal & currentPic == image.fields.file.fileName" @close="showModal = false">
                <h3 slot="header">Modal shows</h3>
                <img :src="image.fields.file.url" alt="">
              </div>
            </transition>
          </div>
          <p class="image-caption" v-if="image.fields.description">{{image.fields.description}}</p>
        </div>
    </div>

    <!-- Gallery 2 -->
    <div class="grid-gallery">
      <h3 class="">Gallery 2</h3>
      <p class="lead" v-html="post.fields.galleryTwoText">{{post.fields.galleryTwoText}}</p>
        <div v-for="(image, index) in post.fields.galleryTwo" :key="index">
          <div class="gallery-item" :id="image.fields.title" v-on:click="toggleModal(image.fields.file)" :class="{active : showModal}">
            <img :src="image.fields.file.url" alt="">
            <!-- Modal -->
            <transition name="fade">
              <div class="modal" v-if="showModal & currentPic == image.fields.file.fileName" @close="showModal = false">
                <h3 slot="header">Modal shows</h3>
                <img :src="image.fields.file.url" alt="">
              </div>
            </transition>
          </div>
          <p class="image-caption" v-if="image.fields.description">{{image.fields.description}}</p>
        </div>
    </div>

    <!-- next / previosus section -->
    <hr>
    <nuxt-link v-if="currentPostIndex() > 0" :to="allPortfolios[currentPostIndex() - 1].fields.slug">
      previous post: {{allPortfolios[currentPostIndex() - 1].fields.slug}}
    </nuxt-link>
    <br>
    <nuxt-link v-if="currentPostIndex() < this.$store.state.portfolios.length-1" :to="allPortfolios[currentPostIndex() + 1].fields.slug">
      next post:{{allPortfolios[currentPostIndex() + 1].fields.slug}}
    </nuxt-link>

  </section>
</template>

<script>
import Modal from '~/components/Modal.vue'

export default {
  components: {Modal},
  data() {
    return {
      slug: this.$route.params.slug,
      allPortfolios: this.$store.state.portfolios,
      showModal: false,
      currentPic: ''
    }
  },
  computed: {
    post() {
      let post = this.$store.state.portfolios.filter(p => p.fields.slug === this.slug)
      return post[0]
    }
  },

  mounted() {
      // document.addEventListener('click', function(e) {
      //   const clickedEl = e.target
      //   return console.log(clickedEl)
      // })
  },

  methods: {
    currentPostIndex() {
      let current_post_index = this.$store.state.portfolios.findIndex(p => p.fields.slug === this.slug);
      // console.log(current_post_index);
      return current_post_index
    },
    toggleModal(img){
      this.showModal = !this.showModal;
      this.setBodyClass()
      this.currentPic = img.fileName
      console.log('thisPic: ', this.currentPic);
    },
    setBodyClass() {
      var body = document.body
      body.classList.toggle('body-no-scroll')
    },
    head() {
      return {
        title: this.post.fields.title
      };
    }
  }
}
</script>

<style lang="postcss" scoped>
  .grid-gallery {
    @apply m-auto max-w-2xl lg:max-w-7xl grid lg:grid-cols-2 gap-x-4 gap-y-12 my-36 sm:grid-cols-1
  }
  .gallery-item {
    @apply cursor-zoom-in
  }
  .image-caption {
    @apply text-gray-500 text-sm mt-3
  }
  .modal {
    @apply block w-screen fixed bg-white overflow-auto top-0 bottom-0 left-0 right-0 cursor-zoom-out
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
   .modal img {
    margin: 0 auto;
  }
  .lead {
    @apply mb-10
  }
</style>