import { IPoint } from "../interfaces";
import Component from "./Component";
import { Context } from "../platforms/CurrentPlatform";
/**
 * Helper function to draw a polygon from a list of points.
 */
export declare function drawPolygon(context: Context, points: IPoint[], ratio: number): void;
export default class CardArt extends Component {
    render(context: Context, ratio: number): void;
}
