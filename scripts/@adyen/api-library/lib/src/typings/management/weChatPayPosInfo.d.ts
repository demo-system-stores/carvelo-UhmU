export declare class WeChatPayPosInfo {
    /**
    * The name of the contact person from merchant support.
    */
    'contactPersonName': string;
    /**
    * The email address of merchant support.
    */
    'email': string;
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
