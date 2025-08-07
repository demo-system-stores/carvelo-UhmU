export declare class DirectDebitInformation {
    /**
    * The date when the direct debit mandate was accepted by your user, in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format.
    */
    'dateOfSignature'?: Date;
    /**
    * The date when the funds are deducted from your user\'s balance account.
    */
    'dueDate'?: Date;
    /**
    * Your unique identifier for the direct debit mandate.
    */
    'mandateId'?: string;
    /**
    * Identifies the direct debit transfer\'s type. Possible values: **OneOff**, **First**, **Recurring**, **Final**.
    */
    'sequenceType'?: string;
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
