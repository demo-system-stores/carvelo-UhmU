export declare class ApproveTransfersRequest {
    /**
    * Contains the unique identifiers of the transfers that you want to approve.
    */
    'transferIds'?: Array<string>;
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
