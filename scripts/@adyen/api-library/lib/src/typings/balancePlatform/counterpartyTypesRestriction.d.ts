export declare class CounterpartyTypesRestriction {
    /**
    * Defines how the condition must be evaluated.
    */
    'operation': string;
    /**
    * The list of counterparty types to be evaluated.
    */
    'value'?: Array<CounterpartyTypesRestriction.ValueEnum>;
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
export declare namespace CounterpartyTypesRestriction {
    enum ValueEnum {
        BalanceAccount = "balanceAccount",
        BankAccount = "bankAccount",
        Card = "card",
        TransferInstrument = "transferInstrument"
    }
}
