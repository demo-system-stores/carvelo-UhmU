import { TransactionDescriptionInfo } from './transactionDescriptionInfo';
export declare class PulseInfo {
    /**
    * The type of transactions processed over this payment method.  Allowed values: - **pos** for in-person payments.  - **billpay** for subscription payments, both the initial payment and the later recurring payments. These transactions have `recurringProcessingModel` **Subscription**.  - **ecom** for all other card not present transactions. This includes non-recurring transactions and transactions with `recurringProcessingModel` **CardOnFile** or **UnscheduledCardOnFile**.
    */
    'processingType': PulseInfo.ProcessingTypeEnum;
    'transactionDescription'?: TransactionDescriptionInfo | null;
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
export declare namespace PulseInfo {
    enum ProcessingTypeEnum {
        Billpay = "billpay",
        Ecom = "ecom",
        Pos = "pos"
    }
}
