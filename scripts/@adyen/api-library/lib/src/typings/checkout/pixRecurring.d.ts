import { Amount } from './amount';
export declare class PixRecurring {
    /**
    * The date on which the shopper\'s payment method will be charged, in YYYY-MM-DD format.
    */
    'billingDate'?: string;
    /**
    * End date of the billing plan, in YYYY-MM-DD format. The end date must align with the frequency and the start date of the billing plan. If left blank, the subscription will continue indefinitely unless it is cancelled by the shopper.
    */
    'endsAt'?: string;
    /**
    * The frequency at which the shopper will be charged.
    */
    'frequency'?: PixRecurring.FrequencyEnum;
    'minAmount'?: Amount | null;
    /**
    * The pspReference for the failed recurring payment. Find this in AUTHORISATION webhook you received after the billing date.
    */
    'originalPspReference'?: string;
    'recurringAmount'?: Amount | null;
    /**
    * The text that that will be shown on the shopper\'s bank statement for the recurring payments. We recommend to add a descriptive text about the subscription to let your shoppers recognize your recurring payments. Maximum length: 35 characters.
    */
    'recurringStatement'?: string;
    /**
    * When set to true, you can retry for failed recurring payments. The default value is true.
    */
    'retryPolicy'?: boolean;
    /**
    * Start date of the billing plan, in YYYY-MM-DD format. The default value is the transaction date.
    */
    'startsAt'?: string;
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
export declare namespace PixRecurring {
    enum FrequencyEnum {
        Weekly = "weekly",
        Monthly = "monthly",
        Quarterly = "quarterly",
        HalfYearly = "half-yearly",
        Yearly = "yearly"
    }
}
