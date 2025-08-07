export declare class PublicKeyResponse {
    /**
    * The public key you need for encrypting a symmetric session key.
    */
    'publicKey': string;
    /**
    * The expiry date of the public key.
    */
    'publicKeyExpiryDate': string;
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
