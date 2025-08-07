export declare class Leg {
    /**
    * The IATA 3-letter airport code of the destination airport. This field is required if the airline data includes leg details.
    */
    'arrivalAirportCode'?: string;
    /**
    * The basic fare code for this leg.
    */
    'basicFareCode'?: string;
    /**
    * IATA code of the carrier operating the flight.
    */
    'carrierCode'?: string;
    /**
    * The IATA three-letter airport code of the departure airport. This field is required if the airline data includes leg details
    */
    'departureAirportCode'?: string;
    /**
    * The flight departure date.
    */
    'departureDate'?: string;
    /**
    * The flight identifier.
    */
    'flightNumber'?: string;
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
