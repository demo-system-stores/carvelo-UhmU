export declare class SupportedCardTypes {
    /**
    * Set to **true** to accept credit cards.
    */
    'credit'?: boolean;
    /**
    * Set to **true** to accept debit cards.
    */
    'debit'?: boolean;
    /**
    * Set to **true** to accept cards that allow deferred debit.
    */
    'deferredDebit'?: boolean;
    /**
    * Set to **true** to accept prepaid cards.
    */
    'prepaid'?: boolean;
    /**
    * Set to **true** to accept card types for which the terminal can\'t determine the funding source while offline.
    */
    'unknown'?: boolean;
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
