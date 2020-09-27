import Card from "./Card";
import { ICoords } from "./interfaces";
export default class MinionCard extends Card {
    premium: boolean;
    bodyTextColor: string;
    bodyTextCoords: {
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
        sWidth: number;
        sHeight: number;
    };
    cardFoundationAsset: any;
    cardFoundationCoords: any;
    baseCardFrameAsset: string;
    baseCardFrameCoords: {
        sWidth: number;
        sHeight: number;
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
    };
    baseRarityGemAsset: string;
    eliteDragonAsset: string;
    eliteDragonCoords: {
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
        sWidth: number;
        sHeight: number;
    };
    nameBannerAsset: string;
    raceBannerAsset: string;
    rarityGemCoords: {
        dx: number;
        dy: number;
    };
    nameBannerCoords: {
        sWidth: number;
        sHeight: number;
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
    };
    nameTextCurve: {
        pathMiddle: number;
        maxWidth: number;
        curve: {
            x: number;
            y: number;
        }[];
    };
    artCoords: ICoords;
    artClipPolygon: {
        x: number;
        y: number;
    }[];
    getAttackGemCoords(): {
        sWidth: number;
        sHeight: number;
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
    };
    getAttackTextCoords(): {
        dx: number;
        dy: number;
    };
    getHealthGemCoords(): {
        sWidth: number;
        sHeight: number;
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
    };
    getHealthTextCoords(): {
        dx: number;
        dy: number;
    };
    getAttackGemAsset(): string;
    getHealthGemAsset(): string;
    getWatermarkCoords(): {
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
    };
}
