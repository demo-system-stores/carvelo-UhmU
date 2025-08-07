import { CardIdentification } from './cardIdentification';
import { PartyIdentification } from './partyIdentification';
export declare class Card {
    'cardHolder': PartyIdentification;
    'cardIdentification': CardIdentification;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
