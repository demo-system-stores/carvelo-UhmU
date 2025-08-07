export declare class PayToInfo {
    /**
    * Merchant name displayed to the shopper in the Agreements
    */
    'merchantName': string;
    /**
    * Represents the purpose of the Agreements created, it relates to the business type **Allowed values**: mortgage, utility, loan, gambling, retail, salary, personal, government, pension, tax, other
    */
    'payToPurpose': string;
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
