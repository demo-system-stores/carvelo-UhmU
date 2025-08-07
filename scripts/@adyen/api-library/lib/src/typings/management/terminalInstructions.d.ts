export declare class TerminalInstructions {
    /**
    * Indicates whether the Adyen app on the payment terminal restarts automatically when the configuration is updated.
    */
    'adyenAppRestart'?: boolean;
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
