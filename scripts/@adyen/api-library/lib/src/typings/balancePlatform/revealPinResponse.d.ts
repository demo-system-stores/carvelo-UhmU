export declare class RevealPinResponse {
    /**
    * The encrypted [PIN block](https://www.pcisecuritystandards.org/glossary/pin-block).
    */
    'encryptedPinBlock': string;
    /**
    * The 16-digit token that you need to extract the `encryptedPinBlock`.
    */
    'token': string;
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
