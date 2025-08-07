export declare class CalculatePciStatusRequest {
    /**
    * An array of additional sales channels to generate PCI questionnaires. Include the relevant sales channels if you need your user to sign PCI questionnaires. Not required if you [create stores](https://docs.adyen.com/platforms) and [add payment methods](https://docs.adyen.com/adyen-for-platforms-model) before you generate the questionnaires.  Possible values: *  **eCommerce** *  **pos** *  **ecomMoto** *  **posMoto**
    */
    'additionalSalesChannels'?: Array<CalculatePciStatusRequest.AdditionalSalesChannelsEnum>;
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
export declare namespace CalculatePciStatusRequest {
    enum AdditionalSalesChannelsEnum {
        ECommerce = "eCommerce",
        EcomMoto = "ecomMoto",
        Pos = "pos",
        PosMoto = "posMoto"
    }
}
