export declare class Referenced {
    /**
    * Indicates whether referenced refunds are enabled on the standalone terminal.
    */
    'enableStandaloneRefunds'?: boolean;
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
