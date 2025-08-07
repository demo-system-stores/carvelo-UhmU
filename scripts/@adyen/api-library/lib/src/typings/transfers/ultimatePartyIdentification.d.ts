import { Address } from './address';
export declare class UltimatePartyIdentification {
    'address'?: Address | null;
    /**
    * The date of birth of the individual in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format. For example, **YYYY-MM-DD**.  Allowed only when `type` is **individual**.
    */
    'dateOfBirth'?: string;
    /**
    * The first name of the individual.  Supported characters: [a-z] [A-Z] - . / — and space.  This parameter is: - Allowed only when `type` is **individual**. - Required when `category` is **card**.
    */
    'firstName'?: string;
    /**
    * The full name of the entity that owns the bank account or card.  Supported characters: [a-z] [A-Z] [0-9] , . ; : - — / \\ + & ! ? @ ( ) \" \' and space.  Required when `category` is **bank**.
    */
    'fullName'?: string;
    /**
    * The last name of the individual.  Supported characters: [a-z] [A-Z] - . / — and space.  This parameter is: - Allowed only when `type` is **individual**. - Required when `category` is **card**.
    */
    'lastName'?: string;
    /**
    * A unique reference to identify the party or counterparty involved in the transfer. For example, your client\'s unique wallet or payee ID.  Required when you include `cardIdentification.storedPaymentMethodId`.
    */
    'reference'?: string;
    /**
    * The type of entity that owns the bank account or card.  Possible values: **individual**, **organization**, or **unknown**.  Required when `category` is **card**. In this case, the value must be **individual**.
    */
    'type'?: UltimatePartyIdentification.TypeEnum;
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
export declare namespace UltimatePartyIdentification {
    enum TypeEnum {
        Individual = "individual",
        Organization = "organization",
        Unknown = "unknown"
    }
}
