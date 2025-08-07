export declare class PaypalUpdateOrderResponse {
    /**
    * The updated paymentData.
    */
    'paymentData': string;
    /**
    * The status of the request. This indicates whether the order was successfully updated with PayPal.
    */
    'status': PaypalUpdateOrderResponse.StatusEnum;
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
export declare namespace PaypalUpdateOrderResponse {
    enum StatusEnum {
        Error = "error",
        Success = "success"
    }
}
