export declare class Balance {
    /**
    * The balance available for use.
    */
    'available': number;
    /**
    * The sum of the transactions that have already been settled.
    */
    'balance': number;
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.
    */
    'currency': string;
    /**
    * The sum of the transactions that will be settled in the future.
    */
    'pending'?: number;
    /**
    * The balance currently held in reserve.
    */
    'reserved': number;
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
