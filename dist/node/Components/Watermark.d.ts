import { Context } from "../platforms/CurrentPlatform";
import Component from "./Component";
export default class Watermark extends Component {
    assets(): string[];
    render(context: Context, ratio: number): void;
}
