import { NameLocation } from './nameLocation';
export declare class MerchantData {
    /**
    * The unique identifier of the merchant\'s acquirer.
    */
    'acquirerId'?: string;
    /**
    * The merchant category code.
    */
    'mcc'?: string;
    /**
    * The unique identifier of the merchant.
    */
    'merchantId'?: string;
    'nameLocation'?: NameLocation | null;
    /**
    * The postal code of the merchant.
    */
    'postalCode'?: string;
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
