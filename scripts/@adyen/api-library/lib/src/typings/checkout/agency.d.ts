export declare class Agency {
    /**
    * The reference number for the invoice, issued by the agency. * Encoding: ASCII * minLength: 1 character * maxLength: 6 characters
    */
    'invoiceNumber'?: string;
    /**
    * The two-letter agency plan identifier. * Encoding: ASCII * minLength: 2 characters * maxLength: 2 characters
    */
    'planName'?: string;
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
