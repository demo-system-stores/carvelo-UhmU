import { Airline } from './airline';
import { Lodging } from './lodging';
export declare class MerchantPurchaseData {
    'airline'?: Airline | null;
    /**
    * Lodging information.
    */
    'lodging'?: Array<Lodging>;
    /**
    * The type of events data.   Possible values:    - **merchantPurchaseData**: merchant purchase data
    */
    'type': MerchantPurchaseData.TypeEnum;
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
export declare namespace MerchantPurchaseData {
    enum TypeEnum {
        MerchantPurchaseData = "merchantPurchaseData"
    }
}
