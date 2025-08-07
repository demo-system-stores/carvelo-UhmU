export declare class PseDetails {
    /**
    * The shopper\'s bank.
    */
    'bank': string;
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The client type.
    */
    'clientType': string;
    /**
    * The identification code.
    */
    'identification': string;
    /**
    * The identification type.
    */
    'identificationType': string;
    /**
    * The payment method type.
    */
    'type'?: PseDetails.TypeEnum;
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
export declare namespace PseDetails {
    enum TypeEnum {
        PsePayulatam = "pse_payulatam"
    }
}
