export declare class RegisterSCAResponse {
    /**
    * The unique identifier of the SCA device you are registering.
    */
    'id'?: string;
    /**
    * The unique identifier of the payment instrument for which you are registering the SCA device.
    */
    'paymentInstrumentId'?: string;
    /**
    * A string that you must pass to the authentication SDK to continue with the registration process.
    */
    'sdkInput'?: string;
    /**
    * Specifies if the registration was initiated successfully.
    */
    'success'?: boolean;
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
