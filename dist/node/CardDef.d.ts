import { CardClass, CardSet, CardType, MultiClassGroup, Race, Rarity } from "./Enums";
export interface CardDefProps {
    attack?: number;
    armor?: number;
    cardClass: CardClass;
    durability?: number;
    set: CardSet;
    collectionText?: string;
    cost?: number;
    costsHealth?: boolean;
    elite?: boolean;
    health?: number;
    hideStats?: boolean;
    id?: string;
    name?: string;
    multiClassGroup?: MultiClassGroup;
    rarity: Rarity;
    race: Race;
    silenced?: boolean;
    text?: string;
    type: CardType;
}
export default class CardDef {
    attack: number;
    armor: number;
    cardClass: CardClass;
    cardSet: CardSet;
    collectionText: string;
    cost: number;
    costsHealth: boolean;
    elite: boolean;
    health: number;
    hideStats: boolean;
    id: string;
    name: string;
    multiClassGroup: MultiClassGroup;
    rarity: Rarity;
    race: Race;
    silenced: boolean;
    text: string;
    type: CardType;
    constructor(props: CardDefProps);
}
