export declare class EstimationTrackingData {
    /**
    * The estimated time the beneficiary should have access to the funds.
    */
    'estimatedArrivalTime': Date;
    /**
    * The type of tracking event.   Possible values:   - **estimation**: the estimated date and time of when the funds will be credited has been determined.
    */
    'type': EstimationTrackingData.TypeEnum;
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
export declare namespace EstimationTrackingData {
    enum TypeEnum {
        Estimation = "estimation"
    }
}
