export declare class FinancialReport {
    /**
    * The annual turnover of the business.
    */
    'annualTurnover'?: string;
    /**
    * The balance sheet total of the business.
    */
    'balanceSheetTotal'?: string;
    /**
    * The currency used for the net assets and balance sheet total.
    */
    'currencyOfFinancialData'?: string;
    /**
    * The date the financial data were provided, in YYYY-MM-DD format.
    */
    'dateOfFinancialData'?: string;
    /**
    * The number of employees of the business.
    */
    'employeeCount'?: string;
    /**
    * The net assets of the business.
    */
    'netAssets'?: string;
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
