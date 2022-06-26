<template>
  <nav class="header relative flex flex-wrap items-center justify-between px-2 py-3 border mb-3">
    <div class="m-auto max-w-2xl lg:max-w-7xl px-6 container mx-auto flex flex-wrap items-center justify-between">
      <div class="group w-full relative flex justify-between sm:w-auto  lg:static lg:block lg:justify-start">
        <nuxt-link to="/" class="group flex text-sm leading-relaxed mr-4 py-2 whitespace-nowrap uppercase">
          <svg class="group-hover:text-blue-500 transition-colors duration-300 w-6 h-6 mr-3" viewBox="0 0 32 20"><defs></defs><path fill="currentColor" class="cls-1" d="M26.36,20h5.64L21.55,0l-2.8,5.37,7.61,14.63Z"/><polygon fill="currentColor" class="cls-1" points="4.12 12.11 0 20 8.23 20 4.12 12.11"/><polygon fill="currentColor" class="cls-1" points="15.23 20 20.9 20 10.45 0 7.63 5.39 15.23 20"/></svg>
          <span class="self-center font-bold text-xs">Marcin Chełminiak</span>
        </nuxt-link>
        <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block sm:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="sm:flex sm:flex-grow items-center">
        <ul class="flex flex-col sm:flex-row list-none ml-auto">
          <li class="nav-item">
            <nuxt-link to="/blog" class="menu-item">
              <span class="ml-2">Blog</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/resume" class="menu-item ">
              <span class="ml-2">Resume</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "pink-navbar",
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style lang="postcss" scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&family=IBM+Plex+Sans:wght@400;700&display=swap');

.header {
  font-family: 'IBM Plex Sans', sans-serif;
}

.menu-item {
  @apply px-3 py-2 flex items-center text-xs uppercase  leading-snug hover:text-blue-500 transition-colors duration-200
}

svg {
  width: 1.3rem;
}
</style>