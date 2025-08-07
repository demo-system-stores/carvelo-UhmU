export declare class PaymentMethodUPIApps {
    /**
    * The unique identifier of this app, to submit in requests to /payments.
    */
    'id': string;
    /**
    * A localized name of the app.
    */
    'name': string;
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
