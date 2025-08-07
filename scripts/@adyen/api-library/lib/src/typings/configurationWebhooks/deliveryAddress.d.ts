export declare class DeliveryAddress {
    /**
    * The name of the city.
    */
    'city'?: string;
    /**
    * The two-character ISO-3166-1 alpha-2 country code. For example, **US**. >If you don\'t know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.
    */
    'country': string;
    /**
    * The name of the street. Do not include the number of the building.  For example, if the address is Simon Carmiggeltstraat 6-50, provide **Simon Carmiggeltstraat**.
    */
    'line1'?: string;
    /**
    * The number of the building.  For example, if the address is Simon Carmiggeltstraat 6-50, provide **6-50**.
    */
    'line2'?: string;
    /**
    * Additional information about the delivery address.
    */
    'line3'?: string;
    /**
    * The postal code. Maximum length: * 5 digits for an address in the US. * 10 characters for an address in all other countries.
    */
    'postalCode'?: string;
    /**
    * The two-letter ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada. > Required for the US and Canada.
    */
    'stateOrProvince'?: string;
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
