import Card from "../Card";
import Sunwell from "../Sunwell";
export default class Component {
    protected sunwell: Sunwell;
    protected parent: Card;
    constructor(sunwell: Sunwell, parent: Card);
    assets(): string[];
}
