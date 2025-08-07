export declare class PayAtTable {
    /**
    * Allowed authentication methods: Magswipe, Manual Entry.
    */
    'authenticationMethod'?: PayAtTable.AuthenticationMethodEnum;
    /**
    * Enable Pay at table.
    */
    'enablePayAtTable'?: boolean;
    /**
    * Sets the allowed payment instrument for Pay at table transactions.  Can be: **cash** or **card**. If not set, the terminal presents both options.
    */
    'paymentInstrument'?: PayAtTable.PaymentInstrumentEnum | null;
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
export declare namespace PayAtTable {
    enum AuthenticationMethodEnum {
        Magswipe = "MAGSWIPE",
        Mke = "MKE"
    }
    enum PaymentInstrumentEnum {
        Cash = "Cash",
        Card = "Card"
    }
}
