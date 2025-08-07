export declare class CashAppDetails {
    /**
    * Cash App issued cashtag for recurring payment
    */
    'cashtag'?: string;
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * Cash App issued customerId for recurring payment
    */
    'customerId'?: string;
    /**
    * Cash App issued grantId for one time payment
    */
    'grantId'?: string;
    /**
    * Cash App issued onFileGrantId for recurring payment
    */
    'onFileGrantId'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    *
    * @deprecated since Adyen Checkout API v49
    * Use `storedPaymentMethodId` instead.
    */
    'recurringDetailReference'?: string;
    /**
    * Cash App request id
    */
    'requestId'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * The payment method subtype.
    */
    'subtype'?: string;
    /**
    * cashapp
    */
    'type'?: CashAppDetails.TypeEnum;
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
export declare namespace CashAppDetails {
    enum TypeEnum {
        Cashapp = "cashapp"
    }
}
