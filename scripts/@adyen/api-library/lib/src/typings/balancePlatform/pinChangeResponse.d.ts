export declare class PinChangeResponse {
    /**
    * The status of the request for PIN change.  Possible values: **completed**, **pending**, **unavailable**.
    */
    'status': PinChangeResponse.StatusEnum;
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
export declare namespace PinChangeResponse {
    enum StatusEnum {
        Completed = "completed",
        Pending = "pending",
        Unavailable = "unavailable"
    }
}
