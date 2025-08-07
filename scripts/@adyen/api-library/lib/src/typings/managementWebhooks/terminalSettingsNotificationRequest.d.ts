import { TerminalSettingsData } from './terminalSettingsData';
export declare class TerminalSettingsNotificationRequest {
    /**
    * Timestamp for when the webhook was created.
    */
    'createdAt': Date;
    'data': TerminalSettingsData;
    /**
    * The environment from which the webhook originated.  Possible values: **test**, **live**.
    */
    'environment': string;
    /**
    * Type of notification.
    */
    'type': TerminalSettingsNotificationRequest.TypeEnum;
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
export declare namespace TerminalSettingsNotificationRequest {
    enum TypeEnum {
        TerminalSettingsModified = "terminalSettings.modified"
    }
}
