<template>
  <section 
    class="answer-input-ui flex items-center content-center" 
    :class="{'ui-hidden': ! store.elementsDidLoad}"
  >
    <div class="answer-input-ui-inner">
      <div class="flex items-center content-center">
        <form @submit.prevent="submitAndHandleAnswer">
          <input 
            class="input-game-ui"
            type="text"
            v-model="answer"
            placeholder="Your answer here"
            @submit="submitAndHandleAnswer"
          />
        </form>
      </div>
    </div>
    <br />
    <!-- <input 
      type="button" 
      @click="store.fetchTaxon" 
      value="Refresh"
    /> -->
  </section>
</template> 

<script setup lang="ts">
import {ref} from 'vue';
import {useGameStore} from '../stores/game.ts';

const store = useGameStore();
const answer = ref('');

function submitAndHandleAnswer() {
  if(!answer.value) return;
  store.loadAnswerChoice(answer.value);
}
</script>
