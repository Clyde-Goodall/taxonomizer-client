import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getRoundImage } from '../features/taxonomy-backend/index.ts'
import { _checkAnswer } from '../features/taxonomy-backend/index.ts'

class ImageState {
  url: string
  primaryLoaded: boolean
  backgroundLoaded: boolean
  primaryElementVisible: boolean
  backgroundElementVisible: boolean

  constructor() {
    this.url = '';
    this.primaryLoaded = false;
    this.backgroundLoaded = false;
    this.primaryElementVisible = false;
    this.backgroundElementVisible = false;
  }
}


export const useGameStore = defineStore('game', () => {

  const currentGame = ref({
    currentImage: new ImageState(),
    currentTaxon: {},
    gameConfig: {},
    roundList: [] as Array<object>,
    selectedAnswerChoice: '' as string,
    multiAnswerChoice: [] as Array<string>
  });


  console.log('Initial store state:', currentGame.value.currentImage)

  const elementsDidLoad = computed(() => {
    const {
      primaryElementVisible,
      backgroundElementVisible,
      primaryLoaded,
      backgroundLoaded,
    } = currentGame.value.currentImage;
    const logic =  (
      primaryElementVisible &&
      backgroundElementVisible &&
      primaryLoaded &&
      backgroundLoaded
    );
    return logic;
  })

  async function fetchTaxon() {

    currentGame.value.currentImage = {
      url: '',
      primaryLoaded: false,
      backgroundLoaded: false,
      primaryElementVisible: false,
      backgroundElementVisible: false,
    };
  
    const res = await getRoundImage({
      specificity: 'family',
      name: 'Cervidae',
    });
    currentGame.value.currentImage = {
      ...currentGame.value.currentImage,
      url: res.url
    };
    currentGame.value.currentTaxon = res.info;
    currentGame.value.roundList.push(res);
  }

  function updateElementVisibility(elem: string, val: boolean) {
    if (elem === 'primary') {
      currentGame.value.currentImage.primaryElementVisible = val;
    } else if (elem === 'background') {
      currentGame.value.currentImage.backgroundElementVisible = val;
    }
  }

  function updateElementLoadStatus(elem: string, val: boolean) {
    if (elem === 'primary') {
      currentGame.value.currentImage.primaryLoaded = val;
    } else if (elem === 'background') {
      currentGame.value.currentImage.backgroundLoaded = val;
    }
  }

  async function loadAnswerChoice(input: string) {
    const res = await _checkAnswer({}, input);
    if(res.data.answer === "None" || res.data.answer === null) return;
    console.log(`found ${res.data.answer}`);
    currentGame.value.multiAnswerChoice.push(res.data.answer)
    console.log(currentGame.value.multiAnswerChoice);
    return res.data;
  }

  async function checkAnswer(answer: string) {
    const res = await _checkAnswer({}, answer);
    return res.data;
  }

  return {
    currentGame,
    fetchTaxon,
    updateElementVisibility,
    updateElementLoadStatus,
    elementsDidLoad,
    checkAnswer,
    loadAnswerChoice,
  };
})
