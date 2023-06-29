import {defineStore} from 'pinia'
import {Canvas} from "@/models/Canvas";

export const useAppStore = defineStore('appStore', {
    state: () => ({
        canvas: null as Canvas | null,
        cellSize: 7,

        types: [
            {typeName: 'blue', color: '#2babc8'},
            {typeName: 'pink', color: '#2bc892'},
            {typeName: 'white', color: '#dfdf9d'},
        ]
    }),
    getters: {
        canvasCtx: (state) => state.canvas?.getCtx(),
        canvasRect: (state) => state.canvas?.getCanvasRect(),
    },
    actions: {
        async setCanvas(canvas: Canvas) {
            this.canvas = canvas
        },
    },
})
