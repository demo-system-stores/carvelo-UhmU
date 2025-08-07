export declare class DonationCampaignsRequest {
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes/).
    */
    'currency': string;
    /**
    * Locale on the shopper interaction device.
    */
    'locale'?: string;
    /**
    * Your merchant account identifier.
    */
    'merchantAccount': string;
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
