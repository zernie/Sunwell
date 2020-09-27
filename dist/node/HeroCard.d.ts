import Card from "./Card";
export default class HeroCard extends Card {
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
    rarityGemCoords: {
        dx: number;
        dy: number;
    };
    artCoords: {
        sWidth: number;
        sHeight: number;
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
    };
    artClipPolygon: {
        x: number;
        y: number;
    }[];
    getHealthGemAsset(): "armor" | "health";
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
    getWatermarkCoords(): {
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
    };
}
