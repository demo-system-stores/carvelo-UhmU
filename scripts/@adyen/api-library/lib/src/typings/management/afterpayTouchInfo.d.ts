export declare class AfterpayTouchInfo {
    /**
    * Support Email
    */
    'supportEmail'?: string;
    /**
    * Support Url
    */
    'supportUrl': string;
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
