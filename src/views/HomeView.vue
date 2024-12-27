<template>
  <section id="home" class="hero flex items-center content-center">
    <div class="wide-card flex row items-center content-center">
      <!-- <tree class="tree-visual" alt="phylogenetic tree icon"/> -->
      <router-link class="no-decorate" to="/game">
        <button class="play-button flex items-center content-center">
          Play {{ store.metaInfo.name }}
        </button>
      </router-link>
    </div>
  </section>
  <section id="about" class="hero flex items-center content-center">
    <div class="wide-card margins-md invert">
      <!-- <tree class="tree-visual" alt="phylogenetic tree icon"/> -->
      <h1>What is {{ store.metaInfo.name }}?</h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useMetaStore} from '../stores/meta.ts';

const store = useMetaStore();
</script>

<style scoped>
/* window-sized hero/banner/whatever  */
.nav-height-fix {
  position: relative;
  top: -4rem;
}
.full-size {
  min-height:100vh;
  width: 100vw;
}
.hero {
  width: 100%;
  height: 100vh;
  /* background: url('../ass  ets/gallery/plant2.jpg'); */
  background-size:cover;
  .hero-content {
    width: 75%; 
    @media screen and (max-width: 1024px) {
        width: 100%;
        height: auto;
    }
    
    min-height: 50%;
    .game-button {
      border: none;
      outline: none;
      background: var(--theme3);
      width: clamp(300px, 50%, 700px);
      border-radius: 30rem;
      padding: 2rem 3rem;
      font-size: 3rem;
      color: var(--theme1);
    }
  }
}

.no-decorate {
  text-decoration: none;
}

.wide-card {
  @media screen and (max-width: 1024px) {
    width: 90%;
    height: auto;
  }

  flex-wrap: wrap;
  gap: 6rem;
  width: clamp(600px, 80%, 1200px);
  min-height: 60%;

  .tree-visual {
    /* border: 2px solid black; */
    width: clamp(200px, 40%, 800px);
    fill: white;
  }

  .play-button{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: var(--primary);
    background: var(--tertiary);
    font-size: 2rem;
    border-radius: .2rem;
    transition: all .5s var(--ui-curve);
    padding: 2rem 3rem;
    border: none;
    outline: none;
    cursor: pointer;
    border-bottom: 2px solid rgba(0,0,0, .2);
  }
  
  .play-button:hover {
    outline: none;
    transform: translateY(-8px);
    box-shadow: inset 0px 0rem 3rem rgba(255, 255, 255, 0.2), 0px .5rem 16rem rgba(255,255,255, .1);
  }

  .play-button:active {
    filter:sepia(.5);
  }
}

.invert {
    color: var(--primary);
}
.mauve {
  border-color: var(--mauve);
}
.buffer-triangle {
  width: 100%;
  border-left:100vw solid transparent;
  border-right: 0px solid transparent;
}
#about {
  background: var(--tertiary);
}
</style>