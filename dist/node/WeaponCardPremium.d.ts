import WeaponCard from "./WeaponCard";
export default class WeaponCardPremium extends WeaponCard {
    premium: boolean;
    attackGemAsset: string;
    cardFoundationAsset: string;
    cardFoundationCoords: {
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
        sWidth: number;
        sHeight: number;
    };
    baseCardFrameAsset: string;
    baseCardFrameCoords: {
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
        sWidth: number;
        sHeight: number;
    };
    eliteDragonAsset: string;
    eliteDragonCoords: {
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
        sWidth: number;
        sHeight: number;
    };
    healthGemAsset: string;
    nameBannerAsset: string;
}
