import MinionCard from "./MinionCard";
export default class MinionCardPremium extends MinionCard {
    premium: boolean;
    bodyTextColor: string;
    cardFoundationAsset: string;
    cardFoundationCoords: {
        dx: number;
        dy: number;
        dwidth: number;
        dheight: number;
        swidth: number;
        sheight: number;
    };
    baseCardFrameAsset: string;
    baseCardFrameCoords: {
        dx: number;
        dy: number;
        sWidth: number;
        sHeight: number;
        dWidth: number;
        dHeight: number;
    };
    baseRarityGemAsset: string;
    eliteDragonAsset: string;
    eliteDragonCoords: {
        dx: number;
        dy: number;
        sWidth: number;
        sHeight: number;
        dWidth: number;
        dHeight: number;
    };
    rarityGemCoords: {
        dx: number;
        dy: number;
    };
    nameBannerAsset: string;
    attackGemAsset: string;
    healthGemAsset: string;
    raceBannerAsset: string;
    raceBannerCoords: {
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
        sWidth: number;
        sHeight: number;
    };
    raceTextCoords: {
        dx: number;
        dy: number;
    };
}
