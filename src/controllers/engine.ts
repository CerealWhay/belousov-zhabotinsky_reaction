import { useAppStore } from '@/stores/appStore'

export class Engine {

    animationFrame;
    canvas;

    constructor() {
        this.canvas = useAppStore().$state.canvas
        this.animationFrame = requestAnimationFrame(this.gameFrame.bind(this))
    }

    gameFrame(): void {
        this.canvas?.clearCanvas();
        this.animationFrame = requestAnimationFrame(this.gameFrame.bind(this))
    }

    stopAnimation(): void {
        cancelAnimationFrame(this.animationFrame)
    }
}
