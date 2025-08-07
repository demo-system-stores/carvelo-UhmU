export declare class CardOrderItemDeliveryStatus {
    /**
    * An error message.
    */
    'errorMessage'?: string;
    /**
    * The status of the PIN delivery.
    */
    'status'?: CardOrderItemDeliveryStatus.StatusEnum;
    /**
    * The tracking number of the PIN delivery.
    */
    'trackingNumber'?: string;
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
export declare namespace CardOrderItemDeliveryStatus {
    enum StatusEnum {
        Created = "created",
        Delivered = "delivered",
        NotApplicable = "notApplicable",
        Processing = "processing",
        Produced = "produced",
        Rejected = "rejected",
        Shipped = "shipped",
        Unknown = "unknown"
    }
}
