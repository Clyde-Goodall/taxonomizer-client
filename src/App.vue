<script setup lang="ts">
import DesktopNavVue from './components/top-nav/DesktopNav.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <DesktopNavVue />
  <RouterView />
</template>