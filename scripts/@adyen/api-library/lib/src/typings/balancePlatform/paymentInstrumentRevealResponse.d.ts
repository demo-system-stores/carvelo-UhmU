export declare class PaymentInstrumentRevealResponse {
    /**
    * The data encrypted using the `encryptedKey`.
    */
    'encryptedData': string;
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
