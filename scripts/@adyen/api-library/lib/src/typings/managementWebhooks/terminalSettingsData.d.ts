export declare class TerminalSettingsData {
    /**
    * The unique identifier of the company account.
    */
    'companyId'?: string;
    /**
    * The unique identifier of the merchant account.
    */
    'merchantId'?: string;
    /**
    * The unique identifier of the store.
    */
    'storeId'?: string;
    /**
    * The unique identifier of the terminal.
    */
    'terminalId'?: string;
    /**
    * Indicates whether the terminal settings were updated using the Customer Area or the Management API.
    */
    'updateSource': TerminalSettingsData.UpdateSourceEnum;
    /**
    * The user that updated the terminal settings. Can be Adyen or your API credential username.
    */
    'user': string;
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
export declare namespace TerminalSettingsData {
    enum UpdateSourceEnum {
        CustomerArea = "Customer Area",
        ManagementApi = "Management Api"
    }
}
