export declare class BillDeskDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The issuer id of the shopper\'s selected bank.
    */
    'issuer': string;
    /**
    * **billdesk**
    */
    'type': BillDeskDetails.TypeEnum;
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
export declare namespace BillDeskDetails {
    enum TypeEnum {
        Online = "billdesk_online",
        Wallet = "billdesk_wallet"
    }
}
