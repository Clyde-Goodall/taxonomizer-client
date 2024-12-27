<template>
  <div
    class="blur-background"
    v-intersection-observer="handleBackgroundIntersection"
    :key="store.currentGame.currentImage.url"
  >
    <img
      class="blur-background"
      @load="store.updateElementLoadStatus('background', true)"
      :src="store.currentGame.currentImage.url"
      :class="{ hidden: !store.elementsDidLoad }"
    />
  </div>
  <section class="game-container">
    <section class="image-container flex content-center items-center">
      <section
        class="random-image-display flex items-center content-center col gap-md"
        v-intersection-observer="handlePrimaryIntersection"  
        >
        <img
          :src="store.currentGame.currentImage.url"
          id="round-image"
          :class="{ hidden: !store.elementsDidLoad }"
          @load="store.updateElementLoadStatus('primary', true)"
          alt="Current round's organism"
        />
        <transition mode="out-in">
          <div
            class="image-alternative flex items-center content-center"
            v-if="!store.elementsDidLoad"
          >
            <div class="load-spinner flex content-center items-center">
              <div class="spinner-inner"></div>
            </div>
          </div>
        </transition>
        <AnswerBox />
      </section>
    </section>
    <!-- Generated answer pool goes here -->
     <AnswerPool />
  </section>
</template>

<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components';
import { onMounted } from 'vue';
import AnswerBox from '../components/AnswerBox.vue';
import AnswerPool from '../components/AnswerPool.vue';
import { useGameStore } from '../stores/game.ts';

const store = useGameStore();

onMounted(async () => {
  await store.fetchTaxon()
});

const handleBackgroundIntersection = (entries: IntersectionObserverEntry[]) => {
  const entry = entries[0]  // First entry in the array
  // console.log('isIntersecting value:', entry.isIntersecting)
  store.updateElementVisibility('background', entry.isIntersecting)
}

const handlePrimaryIntersection = (entries: IntersectionObserverEntry[]) => {
  const entry = entries[0]
  // console.log('isIntersecting value:', entry.isIntersecting)
  store.updateElementVisibility('primary', entry.isIntersecting)
}
</script>
<style>
  input {
    border: 1px solid black;
  }
  :root {
    --sidebar: clamp(350px, 25%, 500px);

  }
  .game-container {
    height: 100vh;
    width: 100vw;
    @media screen and (min-width: 1200px) {
      display: grid;
      grid-template-columns: calc(100vw - var(--sidebar)) var(--sidebar);
    }
  }
</style>
