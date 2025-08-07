export declare class SetTaxElectronicDeliveryConsentRequest {
    /**
    * Consent to electronically deliver tax form US1099-K.
    */
    'US1099k'?: boolean;
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
