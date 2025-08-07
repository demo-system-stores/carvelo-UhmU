export declare class PaymentInstrumentRequirement {
    /**
    * Specifies the requirements for the payment instrument that need to be included in the request for a particular route.
    */
    'description'?: string;
    /**
    * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.
    */
    'issuingCountryCode'?: string;
    /**
    * The two-character ISO-3166-1 alpha-2 country code list for payment instruments.
    */
    'issuingCountryCodes'?: Array<string>;
    /**
    * Specifies if the requirement only applies to transfers to another balance platform.
    */
    'onlyForCrossBalancePlatform'?: boolean;
    /**
    * The type of the payment instrument. For example, \"BankAccount\" or \"Card\".
    */
    'paymentInstrumentType'?: PaymentInstrumentRequirement.PaymentInstrumentTypeEnum;
    /**
    * **paymentInstrumentRequirement**
    */
    'type': PaymentInstrumentRequirement.TypeEnum;
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
export declare namespace PaymentInstrumentRequirement {
    enum PaymentInstrumentTypeEnum {
        BankAccount = "BankAccount",
        Card = "Card"
    }
    enum TypeEnum {
        PaymentInstrumentRequirement = "paymentInstrumentRequirement"
    }
}
