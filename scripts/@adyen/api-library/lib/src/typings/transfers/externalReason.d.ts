export declare class ExternalReason {
    /**
    * The reason code.
    */
    'code'?: string;
    /**
    * The description of the reason code.
    */
    'description'?: string;
    /**
    * The namespace for the reason code.
    */
    'namespace'?: string;
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
