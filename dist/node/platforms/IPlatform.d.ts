interface IPlatform {
    name: string;
    buffers: any[];
    Image: any;
    Canvas: any;
    Promise: any;
    getBuffer(width: number, height: number, clear: boolean): void;
    freeBuffer(buffer: any): void;
    loadAsset(img: any, url: any, loaded: any, error: any): void;
    requestAnimationFrame(cb: () => void): void;
}
export default IPlatform;
export interface IPlatformConstructable {
    new (): IPlatform;
}
