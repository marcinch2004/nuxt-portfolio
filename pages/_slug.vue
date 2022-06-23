<template>
  <section class="container-fluid mx-auto py-16 sm:py-24">
    <nuxt-link to="/" class="link-back">
      <ArrowLeft />
    </nuxt-link>

    <!-- top post section -->
    <!-- <div class="flex flex-wrap m-auto max-w-2xl lg:max-w-7xl mb-12"> -->
    <div class="grid-gallery">
      <div class="">
        <h2 class="">{{post.fields.title}}</h2>
        <span class="bg-yellow-200 uppercase text-sm px-2 text-mono">{{post.fields.description}}</span>
      </div>
      <p class="lead">{{post.fields.lead}}</p>
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
      <h3 class="">{{post.fields.galleryOneTitle}}</h3>
      <p class="gallery-lead" v-html="post.fields.galleryOneText">{{post.fields.galleryOneText}}</p>
      <div class="gallery-item group" v-for="(image, index) in post.fields.galleryOne" :key="index">
        <div class="" :id="image.fields.title" v-on:click="toggleModal(image.fields.file)" :class="{active : showModal}">
          <img :src="image.fields.file.url" alt="">
          <!-- Modal -->
          <transition name="fade">
            <div class="modal" v-if="showModal & currentPic == image.fields.file.fileName" @close="showModal = false">
              <h3 slot="header">Modal shows</h3>
              <img :src="image.fields.file.url" alt="">
            </div>
          </transition>
        </div>
        <p class="image-caption text-mono" v-if="image.fields.description">{{image.fields.description}}</p>
      </div>
    </div>

    <!-- Gallery 2 -->
    <div class="grid-gallery">
      <h3 class="">{{post.fields.galleryTwoTitle}}</h3>
      <p class="lead" v-html="post.fields.galleryTwoText">{{post.fields.galleryTwoText}}</p>
      
      <template v-for="(image, index) in post.fields.galleryTwo">
        <!-- I used template here to be able to add dynamically class fullWidth ot images that are on 100% of the grid -->
        <!-- <p :key="index" v-if="image.metadata.tags[0]">{{image.metadata.tags[0].sys.id}} image</p> -->
        <!-- 
          ### CLASS FOR FULL WIDTH IMAGE ###
          Check if the img has tag and add class with this tag.
          This enables displaying the images with fullwidth Class
          v-if="image.metadata.tags[0]" adds class to the div fullwidth: image.metadata.tags[0].sys.id}
          -->
        <div :key="index" v-if="image.metadata.tags[0]" class="gallery-item group" :id="image.fields.title" v-on:click="toggleModal(image.fields.file)" :class="{active : showModal, fullwidth: image.metadata.tags[0].sys.id}">
            <img :src="image.fields.file.url" alt="">
            <p :key="index" class="image-caption" v-if="image.fields.description">{{image.fields.description}}</p>
            <!-- Modal shows-->
            <transition name="fade">
              <div class="modal" v-if="showModal & currentPic == image.fields.file.fileName" @close="showModal = false">
                <h3 slot="header">Modal shows</h3>
                <img :src="image.fields.file.url" alt="">
              </div>
            </transition>
        </div>
        <!-- v-else to show img without the tag -->
        <div :key="index" v-else class="gallery-item group" :id="image.fields.title" v-on:click="toggleModal(image.fields.file)" :class="{active : showModal}">
          <img :src="image.fields.file.url" alt="">
          <p :key="index" class="image-caption text-mono" v-if="image.fields.description">{{image.fields.description}}</p>
          <!-- Modal shows -->
          <transition name="fade">
            <div class="modal" v-if="showModal & currentPic == image.fields.file.fileName" @close="showModal = false">
              <h3 slot="header">Modal shows</h3>
              <img :src="image.fields.file.url" alt="">
            </div>
          </transition>
        </div>

      </template>
      
    </div>

    <!-- next / previosus section -->
    <div class="nav-bottom">
      <div>
        <nuxt-link class="nav-bottom-link text-mono" v-if="currentPostIndex() > 0" :to="allPortfolios[currentPostIndex() - 1].fields.slug">
        <ArrowLeft />
        <span class="self-center">
          {{allPortfolios[currentPostIndex() - 1].fields.title}}
        </span>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link class="nav-bottom-link text-mono" v-if="currentPostIndex() < this.$store.state.portfolios.length-1" :to="allPortfolios[currentPostIndex() + 1].fields.slug">
          <span class="self-center">{{allPortfolios[currentPostIndex() + 1].fields.title}}</span>
          <ArrowRight />
        </nuxt-link>
      </div>
    </div>

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
    @apply m-auto max-w-2xl px-6  lg:max-w-7xl lg:grid lg:grid-cols-2 gap-x-8 gap-y-12 my-36 md:block
  }
  .gallery-lead {
    @apply text-lg lg:mb-0 mb-8
  }

  .gallery-item {
    @apply cursor-zoom-in lg:mb-0 mb-12
  }

  .image-caption {
    @apply text-gray-500 text-xs mt-3 group-hover:text-blue-500 transition-colors duration-200
  }
  .fullwidth {
    @apply col-span-2
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
    @apply self-center mt-6
  }
  .link-back {
    @apply m-auto max-w-2xl lg:max-w-7xl px-6 block
  }
  .nav-bottom {
    @apply flex justify-between px-6
  }
  .nav-bottom-link {
    @apply flex flex-row align-middle text-xs
  }
  .nav-bottom-icon {
    @apply self-center
  }
  /* .icon:hover line,
  .icon:hover path {
      stroke: red;
      stroke-width: 2px;
  } */
</style>