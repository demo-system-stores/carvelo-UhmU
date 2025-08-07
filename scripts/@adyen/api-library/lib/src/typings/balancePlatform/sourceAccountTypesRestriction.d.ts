export declare class SourceAccountTypesRestriction {
    /**
    * Defines how the condition must be evaluated.
    */
    'operation': string;
    /**
    * The list of source account types to be evaluated.
    */
    'value'?: Array<SourceAccountTypesRestriction.ValueEnum>;
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
export declare namespace SourceAccountTypesRestriction {
    enum ValueEnum {
        BalanceAccount = "balanceAccount",
        BusinessAccount = "businessAccount"
    }
}
