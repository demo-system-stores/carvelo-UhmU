import { TransactionDescriptionInfo } from './transactionDescriptionInfo';
export declare class PayByBankPlaidInfo {
    /**
    * Country Code.
    */
    'countryCode'?: string;
    /**
    * Merchant logo (max. size 150kB). Format: Base64-encoded string.
    */
    'logo'?: string;
    /**
    * The city the merchant is doing business in.
    */
    'merchantCity'?: string;
    /**
    * Legal Business Name of the Merchant.
    */
    'merchantLegalName'?: string;
    /**
    * Merchant shop url.
    */
    'merchantShopUrl'?: string;
    /**
    * The state/province of the merchant.
    */
    'merchantStateProvince'?: string;
    /**
    * The street address of the merchant.
    */
    'merchantStreetAddress'?: string;
    'transactionDescription'?: TransactionDescriptionInfo | null;
    /**
    * The zip code of the account.
    */
    'zipCode'?: string;
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
