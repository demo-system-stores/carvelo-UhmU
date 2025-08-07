export declare class SepaDirectDebitDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The International Bank Account Number (IBAN).
    */
    'iban': string;
    /**
    * The name of the bank account holder.
    */
    'ownerName': string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    *
    * @deprecated since Adyen Checkout API v49
    * Use `storedPaymentMethodId` instead.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * The unique identifier of your user\'s verified transfer instrument, which you can use to top up their balance accounts.
    */
    'transferInstrumentId'?: string;
    /**
    * **sepadirectdebit**
    */
    'type'?: SepaDirectDebitDetails.TypeEnum;
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
export declare namespace SepaDirectDebitDetails {
    enum TypeEnum {
        Sepadirectdebit = "sepadirectdebit",
        SepadirectdebitAmazonpay = "sepadirectdebit_amazonpay"
    }
}
