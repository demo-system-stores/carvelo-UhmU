export declare class BoardingTokenResponse {
    /**
    * The boarding token that allows the Payments App to board.
    */
    'boardingToken': string;
    /**
    * The unique identifier of the Payments App instance.
    */
    'installationId': string;
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
