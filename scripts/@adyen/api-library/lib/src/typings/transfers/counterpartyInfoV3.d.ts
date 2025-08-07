import { BankAccountV3 } from './bankAccountV3';
import { Card } from './card';
export declare class CounterpartyInfoV3 {
    /**
    * The unique identifier of the counterparty [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).
    */
    'balanceAccountId'?: string;
    'bankAccount'?: BankAccountV3 | null;
    'card'?: Card | null;
    /**
    * The unique identifier of the counterparty [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).
    */
    'transferInstrumentId'?: string;
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
