export declare class AssociationDelegatedAuthenticationData {
    /**
    * A base64-encoded block with the data required to authenticate the request. You obtain this information by using our authentication SDK.
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
