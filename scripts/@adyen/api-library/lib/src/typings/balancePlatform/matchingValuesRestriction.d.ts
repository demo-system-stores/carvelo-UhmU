export declare class MatchingValuesRestriction {
    /**
    * Defines how the condition must be evaluated.
    */
    'operation': string;
    'value'?: Array<MatchingValuesRestriction.ValueEnum>;
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
export declare namespace MatchingValuesRestriction {
    enum ValueEnum {
        AcquirerId = "acquirerId",
        Amount = "amount",
        Currency = "currency",
        MerchantId = "merchantId",
        MerchantName = "merchantName"
    }
}
