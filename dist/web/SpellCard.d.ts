import Card from "./Card";
export default class SpellCard extends Card {
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
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
    };
    baseRarityGemAsset: string;
    eliteDragonAsset: string;
    eliteDragonCoords: {
        sWidth: number;
        sHeight: number;
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
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
    rarityGemCoords: {
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
}
