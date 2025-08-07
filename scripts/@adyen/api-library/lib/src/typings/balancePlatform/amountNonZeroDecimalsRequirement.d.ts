export declare class AmountNonZeroDecimalsRequirement {
    /**
    * Specifies for which routes the amount in a transfer request must have no non-zero decimal places, so the transfer can only be processed if the amount consists of round numbers.
    */
    'description'?: string;
    /**
    * **amountNonZeroDecimalsRequirement**
    */
    'type': AmountNonZeroDecimalsRequirement.TypeEnum;
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
export declare namespace AmountNonZeroDecimalsRequirement {
    enum TypeEnum {
        AmountNonZeroDecimalsRequirement = "amountNonZeroDecimalsRequirement"
    }
}
