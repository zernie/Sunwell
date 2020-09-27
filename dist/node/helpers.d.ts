import { CardClass, CardSet, CardType, Race, Rarity } from "./Enums";
import { IPoint } from "./interfaces";
export declare function cleanEnum(val: string | number, e: any): any;
/**
 * Get the bounding box of a canvas content.
 * @returns {{x: *, y: *, maxX: (number|*|w), maxY: *, w: number, h: number}}
 */
export declare function contextBoundingBox(context: CanvasRenderingContext2D): {
    x: number;
    y: number;
    maxX: number;
    maxY: number;
    w: number;
    h: number;
};
export declare function getNumberStyle(style: string): "#f00" | "#0f0" | "white";
/**
 * Given a curve and t, the function returns the point on the curve.
 * r is the rotation of the point in radians.
 * @returns {{x: (number|*), y: (number|*), r: number}}
 */
export declare function getPointOnCurve(curve: IPoint[], t: number): IPoint;
export declare function getCardFrameClass(cardClass: CardClass): CardClass;
export declare function getRaceText(race: Race, cardType: CardType, language: string): string;
export declare function getRarityGem(rarity: Rarity, set: CardSet, type?: CardType): Rarity;
