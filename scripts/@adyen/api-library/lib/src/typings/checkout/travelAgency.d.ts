export declare class TravelAgency {
    /**
    * The unique identifier from IATA or ARC for the travel agency that issues the ticket. * Encoding: ASCII * minLength: 1 character * maxLength: 8 characters * Must not start with a space or be all spaces. * Must not be all zeros.
    */
    'code'?: string;
    /**
    * The name of the travel agency.  * Encoding: ASCII * minLength: 1 character * maxLength: 25 characters * Must not start with a space or be all spaces. * Must not be all zeros.
    */
    'name'?: string;
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
