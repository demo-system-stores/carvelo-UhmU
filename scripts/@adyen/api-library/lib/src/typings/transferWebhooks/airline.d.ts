import { Leg } from './leg';
export declare class Airline {
    /**
    * Details about the flight legs for this ticket.
    */
    'legs'?: Array<Leg>;
    /**
    * The ticket\'s unique identifier
    */
    'ticketNumber'?: string;
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
