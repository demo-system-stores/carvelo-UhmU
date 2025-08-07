import { BankIdentification } from './bankIdentification';
export declare class CounterpartyBankRestriction {
    /**
    * Defines how the condition must be evaluated.
    */
    'operation': string;
    /**
    * The list of counterparty bank institutions to be evaluated.
    */
    'value'?: Array<BankIdentification>;
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
