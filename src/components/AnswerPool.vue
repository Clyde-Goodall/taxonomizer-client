<template>
  <section v-if="store.elementsDidLoad" class="answer-pool-container">
    <button v-for="answer in store.multiAnswerChoice" @click="setSelectedAnswer(answer)" :key="answer" class="suggestion-container">
      {{ answer }}
    </button>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useGameStore} from '../stores/game.ts';
const store = useGameStore();
const selected = ref()

function setSelectedAnswer(answer: string) {
  if(!answer) return
  selected.value = answer
}
</script>

<style scoped>
.answer-pool-container {
  padding-top: .5rem;
  background: rgba(255,255,255, .1);
  backdrop-filter: blur(200px);
  border-left: .6rem solid rgba(0,0,0, .5);
  color: black;
  width: 100%;
  height: 100%;

  .suggestion-container {
    background: rgba(200,200,200, .2);
    font-size: 1.2rem;
    margin: .3rem .8rem;
    border-radius: 10px;
    padding: .8rem 1rem;
    color: black;
  }
}
</style>