import { Amount } from './amount';
import { DeliveryMethod } from './deliveryMethod';
import { TaxTotal } from './taxTotal';
export declare class PaypalUpdateOrderRequest {
    'amount'?: Amount | null;
    /**
    * The list of new delivery methods and the cost of each.
    */
    'deliveryMethods'?: Array<DeliveryMethod>;
    /**
    * The `paymentData` from the client side. This value changes every time you make a `/paypal/updateOrder` request.
    */
    'paymentData'?: string;
    /**
    * The original `pspReference` from the `/payments` response.
    */
    'pspReference'?: string;
    /**
    * The original `sessionId` from the `/sessions` response.
    */
    'sessionId'?: string;
    'taxTotal'?: TaxTotal | null;
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
