import HeroPowerCard from "./HeroPowerCard";
export default class HeroPowerCardPremium extends HeroPowerCard {
    premium: boolean;
    baseCardFrameAsset: string;
    baseCardFrameCoords: {
        dx: number;
        dy: number;
        dWidth: number;
        dHeight: number;
        sWidth: number;
        sHeight: number;
    };
    costTextCoords: {
        dx: number;
        dy: number;
    };
}
