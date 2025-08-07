import { Purchase } from './purchase';
export declare class RelayedAuthenticationRequest {
    /**
    * The unique identifier of the challenge.
    */
    'id': string;
    /**
    * The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_) used for the purchase.
    */
    'paymentInstrumentId': string;
    'purchase': Purchase;
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
