export declare class Balances {
    /**
    * The balance that is available for use.
    */
    'available'?: number;
    /**
    * The sum of transactions that have already been settled.
    */
    'balance'?: number;
    /**
    * The sum of transactions that will be settled in the future.
    */
    'pending'?: number;
    /**
    * The balance currently held in reserve.
    */
    'reserved'?: number;
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
