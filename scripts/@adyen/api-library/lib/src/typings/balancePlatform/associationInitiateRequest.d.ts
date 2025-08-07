export declare class AssociationInitiateRequest {
    /**
    * The list of unique identifiers of the resources that you are associating with the SCA device.  Maximum: 5 strings.
    */
    'ids': Array<string>;
    /**
    * The type of resource that you are associating with the SCA device.  Possible value: **PaymentInstrument**
    */
    'type': AssociationInitiateRequest.TypeEnum;
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
export declare namespace AssociationInitiateRequest {
    enum TypeEnum {
        PaymentInstrument = "PaymentInstrument"
    }
}
