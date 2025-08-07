export declare class DelegatedAuthenticationData {
    /**
    * A base64-encoded block with the data required to register the SCA device. You obtain this information by using our authentication SDK.
    */
    'sdkOutput': string;
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
