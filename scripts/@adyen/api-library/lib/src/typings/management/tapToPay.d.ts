export declare class TapToPay {
    /**
    * The text shown on the screen during the Tap to Pay transaction.
    */
    'merchantDisplayName'?: string;
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
