import Card from "../Card";
import { ICoords } from "../interfaces";
import { Context } from "../platforms/CurrentPlatform";
import Sunwell from "../Sunwell";
import Component from "./Component";
export default class Gem extends Component {
    gemAsset: string;
    gemCoords: ICoords;
    showGem: boolean;
    showText: boolean;
    text: string;
    textColor: string;
    textCoords: ICoords;
    textSize: number;
    constructor(sunwell: Sunwell, parent: Card);
    assets(): string[];
    render(context: Context, ratio: number): void;
}
