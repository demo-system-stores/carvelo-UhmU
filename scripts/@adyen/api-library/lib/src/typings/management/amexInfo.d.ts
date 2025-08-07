export declare class AmexInfo {
    /**
    * Merchant ID (MID) number. Format: 10 numeric characters.  You must provide this field when you request `gatewayContract` or `paymentDesignatorContract` service levels.
    */
    'midNumber'?: string;
    /**
    * Indicates whether the Amex Merchant ID is reused from a previously setup Amex payment method.  This is only applicable for `gatewayContract` and `paymentDesignatorContract` service levels.  The default value is **false**.
    */
    'reuseMidNumber'?: boolean;
    /**
    * Specifies the service level (settlement type) of this payment method. Possible values: * **noContract**: Adyen holds the contract with American Express. * **gatewayContract**: American Express receives the settlement and handles disputes, then pays out to you or your sub-merchant directly. * **paymentDesignatorContract**: Adyen receives the settlement, and handles disputes and payouts.
    */
    'serviceLevel': AmexInfo.ServiceLevelEnum;
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
export declare namespace AmexInfo {
    enum ServiceLevelEnum {
        NoContract = "noContract",
        GatewayContract = "gatewayContract",
        PaymentDesignatorContract = "paymentDesignatorContract"
    }
}
