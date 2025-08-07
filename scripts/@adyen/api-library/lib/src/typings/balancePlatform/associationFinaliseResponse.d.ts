export declare class AssociationFinaliseResponse {
    /**
    * The unique identifier of the SCA device you associated with a resource.
    */
    'deviceId'?: string;
    /**
    * The list of unique identifiers of the resources that you associated with the SCA device.
    */
    'ids'?: Array<string>;
    /**
    * The type of resource that you associated with the SCA device.
    */
    'type': AssociationFinaliseResponse.TypeEnum;
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
export declare namespace AssociationFinaliseResponse {
    enum TypeEnum {
        PaymentInstrument = "PAYMENT_INSTRUMENT"
    }
}
