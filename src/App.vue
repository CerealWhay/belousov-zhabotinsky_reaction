<script setup lang="ts">
import {onMounted, ref} from "vue";
import {Canvas} from "@/models/Canvas";
import {Engine} from "@/controllers/engine";
import {useAppStore} from '@/stores/appStore'

const canvas = ref()
let engine: Engine;
const store = useAppStore()

onMounted(() => {
  store.setCanvas(new Canvas(innerWidth, innerHeight, canvas.value))
  engine = new Engine()
});

const toggleReaction = () => {
  engine.toggleReaction()
}
</script>

<template>
  <div class="app-wrapper">

    <canvas
        ref="canvas"
        @click="toggleReaction"
    ></canvas>

  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  //margin: 40px auto;
  background: rgba(0, 0, 0, 0.1);
  width: fit-content;

  canvas {
    display: block;
  }
}
</style>
