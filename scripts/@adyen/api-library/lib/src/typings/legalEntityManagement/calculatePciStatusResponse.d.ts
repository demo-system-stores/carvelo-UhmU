export declare class CalculatePciStatusResponse {
    /**
    * Indicates if the user is required to sign PCI questionnaires. If **false**, they do not need to sign any questionnaires.
    */
    'signingRequired'?: boolean;
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
