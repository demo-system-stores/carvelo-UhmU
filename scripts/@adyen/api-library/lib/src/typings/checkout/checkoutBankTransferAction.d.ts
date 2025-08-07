import { Amount } from './amount';
export declare class CheckoutBankTransferAction {
    /**
    * The account number of the bank transfer.
    */
    'accountNumber'?: string;
    /**
    * The name of the account holder.
    */
    'beneficiary'?: string;
    /**
    * The BIC of the IBAN.
    */
    'bic'?: string;
    /**
    * The url to download payment details with.
    */
    'downloadUrl'?: string;
    /**
    * The IBAN of the bank transfer.
    */
    'iban'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    /**
    * The transfer reference.
    */
    'reference'?: string;
    /**
    * The routing number of the bank transfer.
    */
    'routingNumber'?: string;
    /**
    * The e-mail of the shopper, included if an e-mail was sent to the shopper.
    */
    'shopperEmail'?: string;
    /**
    * The sort code of the bank transfer.
    */
    'sortCode'?: string;
    'totalAmount'?: Amount | null;
    /**
    * The type of the action.
    */
    'type': CheckoutBankTransferAction.TypeEnum;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;
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
export declare namespace CheckoutBankTransferAction {
    enum TypeEnum {
        BankTransfer = "bankTransfer"
    }
}
