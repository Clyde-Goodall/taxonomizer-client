<template>
  <section class="hero">
    <DesktopNavVue />
    <div class="hero-content">
      <!-- <button class="game-button">
        uhhhhhhhh
      </button> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import DesktopNavVue from '../components/top-nav/DesktopNav.vue'
</script>

<style scoped>
/* window-sized hero/banner/whatever  */
.hero {
  width: 100vw;
  height: 100vh;
  background: var(--vanilla);

  .hero-content {
    width: 75%;
    @media screen and (max-width: 1024px) {
      width: 100%;
      height: auto;
    }
    min-height: 50%;
  }
}
</style>
