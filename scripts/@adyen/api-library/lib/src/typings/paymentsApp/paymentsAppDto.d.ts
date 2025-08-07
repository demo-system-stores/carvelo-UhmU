export declare class PaymentsAppDto {
    /**
    * The unique identifier of the Payments App instance.
    */
    'installationId': string;
    /**
    * The account code associated with the Payments App instance.
    */
    'merchantAccountCode': string;
    /**
    * The store code associated with the Payments App instance.
    */
    'merchantStoreCode'?: string;
    /**
    * The status of the Payments App instance.
    */
    'status': string;
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
