import { Amount } from './amount';
export declare class CreateOrderRequest {
    'amount': Amount;
    /**
    * The date when the order should expire. If not provided, the default expiry duration is 1 day.  [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format: YYYY-MM-DDThh:mm:ss+TZD, for example, **2020-12-18T10:15:30+01:00**.
    */
    'expiresAt'?: string;
    /**
    * The merchant account identifier, with which you want to process the order.
    */
    'merchantAccount': string;
    /**
    * A custom reference identifying the order.
    */
    'reference': string;
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
