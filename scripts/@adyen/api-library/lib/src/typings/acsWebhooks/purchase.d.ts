import { Amount } from './amount';
export declare class Purchase {
    /**
    * The time of the purchase.
    */
    'date': Date;
    /**
    * The name of the merchant.
    */
    'merchantName': string;
    'originalAmount': Amount;
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
