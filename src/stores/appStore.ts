import {defineStore} from 'pinia'
import {Canvas} from "@/models/Canvas";

export const useAppStore = defineStore('appStore', {
    state: () => ({
        canvas: null as Canvas | null,
    }),
    actions: {
        async setCanvas(canvas: Canvas) {
            this.canvas = canvas
        },
    },
})
