import Card from "./Card";
export default class HeroPowerCard extends Card {
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
    baseRarityGemAsset: any;
    nameBannerAsset: any;
    nameBannerCoords: any;
    rarityGemCoords: any;
    nameTextCurve: {
        pathMiddle: number;
        maxWidth: number;
        curve: {
            x: number;
            y: number;
        }[];
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
    getWatermarkCoords(): {
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
    };
    getCardFrameAsset(): string;
    getCostGemAsset(): string;
    getCostTextCoords(): {
        dx: number;
        dy: number;
    };
    getRarityGemAsset(): string;
    getWatermarkAsset(): string;
}
