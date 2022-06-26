<template>
    <span class="group group-hover:border-blue-500 nav-bottom-icon-container">
        <svg aria-hidden="true" focusable="false" class="group-hover:text-blue-500 transition-colors duration-300 self-center icon icon--left" width="15" height="16" viewBox="0 0 15 16" fill="none">
          <line stroke="currentColor" class="svg-stroke" x1="13.5" y1="8" x2="0.5" y2="8" stroke-linecap="round"/>
          <path stroke="currentColor" class="svg-stroke" d="M7.5 15L14.5 8L7.5 1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>  
    </span>
</template>

<script>
export default {
}
</script>

<style lang="postcss" scoped>
  .nav-bottom-icon-container {
    @apply flex flex-col justify-center w-12 h-12 border rounded-full transition-colors ml-3 
  }
</style>