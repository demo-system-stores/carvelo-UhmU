export declare class AssociationInitiateResponse {
    /**
    * A string that you must pass to the authentication SDK to continue with the association process.
    */
    'sdkInput'?: string;
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
