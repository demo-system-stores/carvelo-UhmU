export declare class TerminalConnectivityCellular {
    /**
    * The integrated circuit card identifier (ICCID) of the primary SIM card in the terminal.
    */
    'iccid'?: string;
    /**
    * The integrated circuit card identifier (ICCID) of the secondary SIM card in the terminal, typically used for a [third-party SIM card](https://docs.adyen.com/point-of-sale/design-your-integration/network-and-connectivity/cellular-failover/#using-a-third-party-sim-card).
    */
    'iccid2'?: string;
    /**
    * On a terminal that supports 3G or 4G connectivity, indicates the status of the primary SIM card in the terminal.
    */
    'status'?: TerminalConnectivityCellular.StatusEnum;
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
export declare namespace TerminalConnectivityCellular {
    enum StatusEnum {
        Activated = "activated",
        Deactivated = "deactivated",
        Deprecated = "deprecated",
        Inventory = "inventory",
        ReadyForActivation = "readyForActivation"
    }
}
