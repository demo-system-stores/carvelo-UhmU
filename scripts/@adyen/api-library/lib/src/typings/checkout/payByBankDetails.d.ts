export declare class PayByBankDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The PayByBank issuer value of the shopper\'s selected bank.
    */
    'issuer'?: string;
    /**
    * **paybybank**
    */
    'type': PayByBankDetails.TypeEnum;
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
export declare namespace PayByBankDetails {
    enum TypeEnum {
        Paybybank = "paybybank"
    }
}
