<template>
  <nav class="header relative flex flex-wrap items-center justify-between px-2 py-3 border-b mb-3">
    <div class="m-auto max-w-2xl lg:max-w-7xl px-6 container mx-auto flex flex-wrap items-center justify-between">
      <div class="group w-full relative flex justify-between sm:w-auto  lg:static lg:block lg:justify-start">
        <nuxt-link to="/" class="group flex text-sm leading-relaxed mr-4 py-2 whitespace-nowrap uppercase">
          <svg class="group-hover:text-blue-500 transition-colors duration-300 w-6 h-6 mr-3" viewBox="0 0 32 20"><defs></defs><path fill="currentColor" class="cls-1" d="M26.36,20h5.64L21.55,0l-2.8,5.37,7.61,14.63Z"/><polygon fill="currentColor" class="cls-1" points="4.12 12.11 0 20 8.23 20 4.12 12.11"/><polygon fill="currentColor" class="cls-1" points="15.23 20 20.9 20 10.45 0 7.63 5.39 15.23 20"/></svg>
          <span class="self-center font-bold text-xs">Marcin Chełminiak</span>
        </nuxt-link>
        <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block sm:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <div id="nav-hamburger" v-bind:class="{'open' : showMenu === true}">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div v-bind:class="{'nav-hidden': !showMenu, 'nav-open': showMenu}" v-on:click="toggleNavbar()" class="sm:flex sm:flex-grow items-center sm:transition-opacity">
        <ul class="flex flex-col sm:flex-row list-none ml-auto my-0">
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
/* @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&family=IBM+Plex+Sans:wght@400;700&display=swap'); */

.header {
  font-family: 'IBM Plex Sans', sans-serif;
}

.menu-item {
  @apply px-3 py-2 flex items-center text-xs uppercase leading-snug hover:text-blue-500 transition-colors duration-200
}

svg {
  width: 1.3rem;
}

/* Icon 3 */
#nav-hamburger {
  width: 24px;
  height: 24px;
  position: relative;
  /* margin: 50px auto; */
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

#nav-hamburger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #000000;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}
#nav-hamburger span:nth-child(1) {
  top: 0px;
}
#nav-hamburger span:nth-child(2),#nav-hamburger span:nth-child(3) {
  top: 8px;
}
#nav-hamburger span:nth-child(4) {
  top: 16px;
}
#nav-hamburger.open span:nth-child(1) {
  top: 8px;
  width: 0%;
  left: 50%;
}
#nav-hamburger.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
#nav-hamburger.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
#nav-hamburger.open span:nth-child(4) {
  top: 8px;
  width: 0%;
  left: 50%;
}

.nav-hidden {
  display: none;
}
.nav-open {
  display: flex;
}
</style>