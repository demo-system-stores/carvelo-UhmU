export declare class RevealPinRequest {
    /**
    * The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen.
    */
    'encryptedKey': string;
    /**
    * The unique identifier of the payment instrument, which is the card for which you are managing the PIN.
    */
    'paymentInstrumentId': string;
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
