export declare class AndroidAppError {
    /**
    * The error code of the Android app with the `status` of either **error** or **invalid**.
    */
    'errorCode'?: string;
    /**
    * The list of payment terminal models to which the returned `errorCode` applies.
    */
    'terminalModels'?: Array<string>;
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
