export declare class PayMeInfo {
    /**
    * Merchant display name
    */
    'displayName': string;
    /**
    * Merchant logo. Format: Base64-encoded string.
    */
    'logo': string;
    /**
    * The email address of merchant support.
    */
    'supportEmail': string;
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
