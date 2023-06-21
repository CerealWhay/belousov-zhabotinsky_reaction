export class Canvas {

    private readonly ctx: CanvasRenderingContext2D | null;

    constructor(
        private width: number,
        private height: number,
        private canvas: HTMLCanvasElement
    ) {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d')
    }

    getCtx(): CanvasRenderingContext2D | null {
        return this.ctx
    }

    getCanvasRect(): DOMRect {
        return this.canvas.getBoundingClientRect()
    }

    clearCanvas(): void {
        this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}
