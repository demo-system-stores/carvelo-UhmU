export declare class CheckoutSessionInstallmentOption {
    /**
    * Defines the type of installment plan. If not set, defaults to **regular**.  Possible values: * **regular** * **revolving*** **bonus** * **with_interest** * **buynow_paylater** * **nointerest_bonus** * **interest_bonus** * **refund_prctg** * **nointeres_refund_prctg** * **interes_refund_prctg**
    */
    'plans'?: Array<CheckoutSessionInstallmentOption.PlansEnum>;
    /**
    * Preselected number of installments offered for this payment method.
    */
    'preselectedValue'?: number;
    /**
    * An array of the number of installments that the shopper can choose from. For example, **[2,3,5]**. This cannot be specified simultaneously with `maxValue`.
    */
    'values'?: Array<number>;
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
export declare namespace CheckoutSessionInstallmentOption {
    enum PlansEnum {
        Bonus = "bonus",
        BuynowPaylater = "buynow_paylater",
        InteresRefundPrctg = "interes_refund_prctg",
        InterestBonus = "interest_bonus",
        NointeresRefundPrctg = "nointeres_refund_prctg",
        NointerestBonus = "nointerest_bonus",
        RefundPrctg = "refund_prctg",
        Regular = "regular",
        Revolving = "revolving",
        WithInterest = "with_interest"
    }
}
