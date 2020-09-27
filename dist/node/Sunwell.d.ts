import Platform, { Context, Canvas, Image } from "./platforms/CurrentPlatform";
import Card from "./Card";
import { ICoords } from "./interfaces";
import CardDef, { CardDefProps } from "./CardDef";
export { CardDef, CardDefProps };
export declare type ISunwellOptions = Partial<{
    titleFont: string;
    bodyFontRegular: string;
    bodyFontBold: string;
    bodyFontItalic: string;
    bodyFontBoldItalic: string;
    gemFont: string;
    aspectRatio: number;
    bodyFontSize: number;
    bodyFontOffset: {
        x: number;
        y: number;
    };
    bodyLineHeight: number;
    bodyLineStyle: string;
    assetFolder: string;
    drawTimeout: number;
    cacheSkeleton: boolean;
    debug: boolean;
}>;
export default class Sunwell {
    options: ISunwellOptions;
    assets: Record<string, Image>;
    canvas: Canvas;
    target: any;
    platform: Platform;
    renderCache: {
        [cacheKey: string]: any;
    };
    private assetListeners;
    private renderQuery;
    private isRendering;
    constructor(options: ISunwellOptions);
    log(...args: any[]): void;
    error(...args: any[]): void;
    drawImage(context: Context, assetKey: string, coords: ICoords): void;
    fetchAsset(path: string): Promise<unknown>;
    getBuffer(width?: number, height?: number, clear?: boolean): Canvas;
    freeBuffer(buffer: Canvas): void;
    render(): void;
    getAssetPath(key: string): string;
    getAsset(key: string): HTMLImageElement;
    renderTick(): void;
    createCard(props: CardDef, width: number, premium: boolean, target: any, callback?: (canvas: Canvas) => void): Card;
}
