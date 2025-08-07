export declare class USInternationalAchAddressRequirement {
    /**
    * Specifies that you must provide a complete street address for International ACH (IAT) transactions.
    */
    'description'?: string;
    /**
    * **usInternationalAchAddressRequirement**
    */
    'type': USInternationalAchAddressRequirement.TypeEnum;
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
export declare namespace USInternationalAchAddressRequirement {
    enum TypeEnum {
        UsInternationalAchAddressRequirement = "usInternationalAchAddressRequirement"
    }
}
