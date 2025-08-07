import { Address } from './address';
import { Name } from './name';
export declare class FundOrigin {
    'billingAddress'?: Address | null;
    /**
    * The email address of the person funding the money.
    */
    'shopperEmail'?: string;
    'shopperName'?: Name | null;
    /**
    * The phone number of the person funding the money.
    */
    'telephoneNumber'?: string;
    /**
    * The unique identifier of the wallet where the funds are coming from.
    */
    'walletIdentifier'?: string;
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
