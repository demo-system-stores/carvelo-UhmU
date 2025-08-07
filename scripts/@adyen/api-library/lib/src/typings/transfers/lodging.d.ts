export declare class Lodging {
    /**
    * The check-in date.
    */
    'checkInDate'?: string;
    /**
    * The total number of nights the room is booked for.
    */
    'numberOfNights'?: number;
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
