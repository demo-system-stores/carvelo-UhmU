export declare class BankIdentification {
    /**
    * Two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.
    */
    'country'?: string;
    /**
    * The bank identification code.
    */
    'identification'?: string;
    /**
    * The type of the identification.  Possible values: **iban**, **routingNumber**, **sortCode**, **bic**.
    */
    'identificationType'?: BankIdentification.IdentificationTypeEnum;
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
export declare namespace BankIdentification {
    enum IdentificationTypeEnum {
        Bic = "bic",
        Iban = "iban",
        RoutingNumber = "routingNumber",
        SortCode = "sortCode"
    }
}
