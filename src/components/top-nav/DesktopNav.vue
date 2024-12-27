<template>
  <section v-if="route.name !== 'game'" class="top-nav flex row">
    <div class="left flex row">
      <div class="brand-icon-item flex content-center items-center">
        <logo class="filler-icon" />
      </div>
      <div class="link-item flex items-center content-center">
        <a :href="$route.name === 'home' ? '#home': '/'">Home</a>
      </div>
      <div class="link-item flex items-center content-center">
        <a href="#about">About</a>
      </div>
    </div>
    <div class="right flex row">
      <div class="link-item flex items-center content-center">Login</div>
      <div class="link-item flex items-center content-center">Register</div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import logo from '../../assets/bio-logo.svg?component';
const route = useRoute();
</script>
 
<style scoped>
.top-nav {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100000;
  width: 100%;
  background:  rgba(255,255,255,0);
  backdrop-filter: blur(10px);
  color: var(--primary);
  /* border-bottom: 10px solid var(--primary); */
  height: 6rem;
  justify-content: space-between;
  
  .left {
    justify-content:start;
  }

  .right {
    justify-content:end;
  }

  .link-item {
    align-items:center;
    width: auto;
    height: 100%;
    margin:0rem 1rem;
    font-size: 1rem;
    font-weight: 200;
    letter-spacing:.15em;
    font-family: 'Poppins', sans-serif;

    a {
      transition: border .3s var(--ui-curve);
      font-family: 'Poppins', sans-serif;
      color: var(--primary);
      text-decoration: none;
      border-bottom: 1px solid transparent;
    }
    a:hover {
      position: relative;
      border-bottom: 1px solid var(--primary);
    }
  }

  .brand-icon-item {
    .filler-icon {
      box-sizing:content-box;
      padding: .4rem;
      fill: var(--primary);
      height: 2rem;
      width: 2rem;
      border-radius: .5rem;
    }
    height: 100%;
    width: 5rem;
  }
}
</style>