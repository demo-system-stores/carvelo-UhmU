import { TerminalConnectivityBluetooth } from './terminalConnectivityBluetooth';
import { TerminalConnectivityCellular } from './terminalConnectivityCellular';
import { TerminalConnectivityEthernet } from './terminalConnectivityEthernet';
import { TerminalConnectivityWifi } from './terminalConnectivityWifi';
export declare class TerminalConnectivity {
    'bluetooth'?: TerminalConnectivityBluetooth | null;
    'cellular'?: TerminalConnectivityCellular | null;
    'ethernet'?: TerminalConnectivityEthernet | null;
    'wifi'?: TerminalConnectivityWifi | null;
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
