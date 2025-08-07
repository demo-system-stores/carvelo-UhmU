export declare class TransferNotificationMerchantData {
    /**
    * The unique identifier of the merchant\'s acquirer.
    */
    'acquirerId'?: string;
    /**
    * The city where the merchant is located.
    */
    'city'?: string;
    /**
    * The country where the merchant is located.
    */
    'country'?: string;
    /**
    * The merchant category code.
    */
    'mcc'?: string;
    /**
    * The unique identifier of the merchant.
    */
    'merchantId'?: string;
    /**
    * The name of the merchant\'s shop or service.
    */
    'name'?: string;
    /**
    * The postal code of the merchant.
    */
    'postalCode'?: string;
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
