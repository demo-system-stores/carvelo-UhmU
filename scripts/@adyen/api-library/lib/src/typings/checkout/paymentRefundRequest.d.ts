import { Amount } from './amount';
import { ApplicationInfo } from './applicationInfo';
import { LineItem } from './lineItem';
import { Split } from './split';
export declare class PaymentRefundRequest {
    'amount': Amount;
    'applicationInfo'?: ApplicationInfo | null;
    /**
    * Price and product information of the refunded items, required for [partial refunds](https://docs.adyen.com/online-payments/refund#refund-a-payment). > This field is required for partial refunds with 3x 4x Oney, Affirm, Afterpay, Atome, Clearpay, Klarna, Ratepay, Walley, and Zip.
    */
    'lineItems'?: Array<LineItem>;
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    /**
    * The reason for the refund request.  Possible values:  * **FRAUD**  * **CUSTOMER REQUEST**  * **RETURN**  * **DUPLICATE**  * **OTHER**
    */
    'merchantRefundReason'?: PaymentRefundRequest.MerchantRefundReasonEnum | null;
    /**
    * Your reference for the refund request. Maximum length: 80 characters.
    */
    'reference'?: string;
    /**
    * An array of objects specifying how the amount should be split between accounts when using Adyen for Platforms. For more information, see how to process payments for [marketplaces](https://docs.adyen.com/marketplaces/split-payments) or [platforms](https://docs.adyen.com/platforms/online-payments/split-payments/).
    */
    'splits'?: Array<Split>;
    /**
    * The online store or [physical store](https://docs.adyen.com/point-of-sale/design-your-integration/determine-account-structure/#create-stores) that is processing the refund. This must be the same as the store name configured in your Customer Area.  Otherwise, you get an error and the refund fails.
    */
    'store'?: string;
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
export declare namespace PaymentRefundRequest {
    enum MerchantRefundReasonEnum {
        Fraud = "FRAUD",
        CustomerRequest = "CUSTOMER REQUEST",
        Return = "RETURN",
        Duplicate = "DUPLICATE",
        Other = "OTHER"
    }
}
