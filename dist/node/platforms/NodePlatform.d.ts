import * as Canvas from "canvas";
import IPlatform from "./IPlatform";
export { Canvas, CanvasRenderingContext2D as Context, Image } from "canvas";
export default class NodePlatform implements IPlatform {
    name: string;
    buffers: any[];
    Image: typeof Canvas.Image;
    Canvas: typeof Canvas.Canvas;
    Promise: PromiseConstructor;
    getBuffer(width: number, height: number, clear: boolean): Canvas.Canvas;
    freeBuffer(buffer: any): void;
    loadAsset(img: any, path: any, loaded: any, error: any): void;
    requestAnimationFrame(cb: any): void;
}
