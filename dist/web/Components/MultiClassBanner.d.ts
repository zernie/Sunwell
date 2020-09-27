import { Context } from "../platforms/CurrentPlatform";
import Component from "./Component";
export default class MultiClassBanner extends Component {
    assets(): string[];
    render(context: Context, ratio: number): void;
}
