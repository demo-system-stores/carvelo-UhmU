export declare class Ticket {
    /**
    * The address of the organization that issued the ticket. * minLength: 0 characters * maxLength: 16 characters
    */
    'issueAddress'?: string;
    /**
    * The date that the ticket was issued to the passenger. * minLength: 10 characters * maxLength: 10 characters * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd
    */
    'issueDate'?: string;
    /**
    * The ticket\'s unique identifier. * minLength: 1 character * maxLength: 15 characters * Must not start with a space or be all spaces. * Must not be all zeros.
    */
    'number'?: string;
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
