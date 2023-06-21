<script lang="ts">
import {defineComponent} from "vue";
import { mapActions } from 'pinia'
import {Canvas} from "@/models/Canvas";
import {Engine} from "@/controllers/engine";
import { useAppStore } from '@/stores/appStore'

export default defineComponent({
  data() {
    return {}
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.setCanvas(new Canvas(1000, 500, this.$refs.canvas as HTMLCanvasElement))
      new Engine()
    },
    ...mapActions(useAppStore, ['setCanvas']),
  },
})
</script>

<template>
  <div class="app-wrapper">

    <canvas
        ref="canvas"
    ></canvas>

  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  margin: 40px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  width: fit-content;
  canvas {
    display: block;
  }
}
</style>
