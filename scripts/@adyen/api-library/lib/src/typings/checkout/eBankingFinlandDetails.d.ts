export declare class EBankingFinlandDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The Ebanking Finland issuer value of the shopper\'s selected bank.
    */
    'issuer'?: string;
    /**
    * **ebanking_FI**
    */
    'type': EBankingFinlandDetails.TypeEnum;
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
export declare namespace EBankingFinlandDetails {
    enum TypeEnum {
        EbankingFi = "ebanking_FI"
    }
}
