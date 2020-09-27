import SpellCard from "./SpellCard";
export default class SpellCardPremium extends SpellCard {
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
        dWidth: number;
        dHeight: number;
        sWidth: number;
        sHeight: number;
    };
    nameBannerAsset: string;
    nameBannerCoords: {
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
        sWidth: number;
        sHeight: number;
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
        dWidth: number;
        dHeight: number;
        sWidth: number;
        sHeight: number;
    };
}
