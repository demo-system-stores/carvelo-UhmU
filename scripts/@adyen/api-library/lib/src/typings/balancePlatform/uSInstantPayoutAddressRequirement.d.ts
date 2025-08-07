export declare class USInstantPayoutAddressRequirement {
    /**
    * Specifies that you must provide complete street addresses for the party and counterParty for transactions greater than USD 3000.
    */
    'description'?: string;
    /**
    * **usInstantPayoutAddressRequirement**
    */
    'type': USInstantPayoutAddressRequirement.TypeEnum;
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
export declare namespace USInstantPayoutAddressRequirement {
    enum TypeEnum {
        UsInstantPayoutAddressRequirement = "usInstantPayoutAddressRequirement"
    }
}
