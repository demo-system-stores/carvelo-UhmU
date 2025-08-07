import { MinorUnitsMonetaryValue } from './minorUnitsMonetaryValue';
import { SupportedCardTypes } from './supportedCardTypes';
export declare class StoreAndForward {
    /**
    * The maximum amount that the terminal accepts for a single store-and-forward payment.
    */
    'maxAmount'?: Array<MinorUnitsMonetaryValue>;
    /**
    * The maximum number of store-and-forward transactions per terminal that you can process while offline.
    */
    'maxPayments'?: number;
    'supportedCardTypes'?: SupportedCardTypes | null;
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
