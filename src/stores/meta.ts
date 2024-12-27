import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMetaStore = defineStore('config', () => {
  const metaInfo = ref({
    name: 'Bioguessr'
  })

  return { metaInfo };
});