export declare class IssuingTransactionData {
    /**
    * captureCycleId associated with transfer event.
    */
    'captureCycleId'?: string;
    /**
    * The type of events data.   Possible values:    - **issuingTransactionData**: issuing transaction data
    */
    'type': IssuingTransactionData.TypeEnum;
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
export declare namespace IssuingTransactionData {
    enum TypeEnum {
        IssuingTransactionData = "issuingTransactionData"
    }
}
