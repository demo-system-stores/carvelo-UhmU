import { Amount } from './amount';
import { CardBin } from './cardBin';
export declare class CostEstimateResponse {
    'cardBin'?: CardBin | null;
    'costEstimateAmount'?: Amount | null;
    /**
    * Adyen\'s 16-character reference associated with the request.
    */
    'costEstimateReference'?: string;
    /**
    * The result of the cost estimation.
    */
    'resultCode'?: string;
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
