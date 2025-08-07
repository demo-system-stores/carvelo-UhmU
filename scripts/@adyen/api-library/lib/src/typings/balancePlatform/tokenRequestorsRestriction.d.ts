export declare class TokenRequestorsRestriction {
    /**
    * Defines how the condition must be evaluated.
    */
    'operation': string;
    'value'?: Array<string>;
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
