<template>
    <span class="nav-bottom-icon-container">
        <svg aria-hidden="true" focusable="false" class="self-center icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <line class="svg-stroke" x1="2" y1="8" x2="15" y2="8" stroke="black" stroke-linecap="round"/>
        <path class="svg-stroke" d="M8 1L1 8L8 15" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </span>
</template>

<script>
export default {
}
</script>

<style lang="postcss" scoped>
  .nav-bottom-icon-container {
    @apply flex flex-col justify-center w-12 h-12 border rounded-full transition-colors mr-3 hover:border-blue-500
  }
  .nav-bottom-icon-container:hover .svg-stroke {
    stroke: #4F46E5;
    transition-property: stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
</style>