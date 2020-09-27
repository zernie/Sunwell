import { Context } from "../platforms/CurrentPlatform";
import Component from "./Component";
export default class NameBanner extends Component {
    assets(): string[];
    render(context: Context, ratio: number): void;
    private renderName;
}
