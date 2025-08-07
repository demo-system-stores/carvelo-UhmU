export declare class PinChangeRequest {
    /**
    * The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen.
    */
    'encryptedKey': string;
    /**
    * The encrypted [PIN block](https://www.pcisecuritystandards.org/glossary/pin-block).
    */
    'encryptedPinBlock': string;
    /**
    * The unique identifier of the payment instrument, which is the card for which you are managing the PIN.
    */
    'paymentInstrumentId': string;
    /**
    * The 16-digit token that you used to generate the `encryptedPinBlock`.
    */
    'token': string;
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
