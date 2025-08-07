export declare class PaymentInstrumentGroupInfo {
    /**
    * The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the payment instrument group belongs.
    */
    'balancePlatform': string;
    /**
    * Your description for the payment instrument group.
    */
    'description'?: string;
    /**
    * Properties of the payment instrument group.
    */
    'properties'?: {
        [key: string]: string;
    };
    /**
    * Your reference for the payment instrument group.
    */
    'reference'?: string;
    /**
    * The tx variant of the payment instrument group.
    */
    'txVariant': string;
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
