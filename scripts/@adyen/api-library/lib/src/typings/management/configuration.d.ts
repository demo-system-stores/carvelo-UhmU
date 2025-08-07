import { Currency } from './currency';
export declare class Configuration {
    /**
    * Payment method, like **eftpos_australia** or **mc**. See the [possible values](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).
    */
    'brand': string;
    /**
    * Set to **true** to apply surcharges only to commercial/business cards.
    */
    'commercial'?: boolean;
    /**
    * The country/region of the card issuer. If used, the surcharge settings only apply to the card issued in that country/region.
    */
    'country'?: Array<string>;
    /**
    * Currency and percentage or amount of the surcharge.
    */
    'currencies': Array<Currency>;
    /**
    * Funding source. Possible values: * **Credit** * **Debit**
    */
    'sources'?: Array<string>;
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
