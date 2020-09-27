import Card from "./Card";
export default class WeaponCard extends Card {
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
    getAttackGemAsset(): string;
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
    getHealthGemAsset(): string;
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
