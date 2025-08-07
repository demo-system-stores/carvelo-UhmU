import { Links } from './links';
import { TransferData } from './transferData';
export declare class FindTransfersResponse {
    '_links'?: Links | null;
    /**
    * Contains the transfers that match the query parameters.
    */
    'data'?: Array<TransferData>;
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
