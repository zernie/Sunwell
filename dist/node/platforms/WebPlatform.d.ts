import IPlatform from "./IPlatform";
export declare type Canvas = HTMLCanvasElement;
export declare type Context = CanvasRenderingContext2D;
export declare type Image = HTMLImageElement;
export default class WebPlatform implements IPlatform {
    name: string;
    Image: new (width?: number, height?: number) => HTMLImageElement;
    Canvas: {
        new (): HTMLCanvasElement;
        prototype: HTMLCanvasElement;
    };
    Promise: PromiseConstructor;
    buffers: any[];
    getBuffer(width?: number, height?: number, clear?: boolean): HTMLCanvasElement;
    freeBuffer(buffer: any): void;
    loadAsset(img: any, url: any, loaded: any, error: any): void;
    requestAnimationFrame(cb: any): void;
}
