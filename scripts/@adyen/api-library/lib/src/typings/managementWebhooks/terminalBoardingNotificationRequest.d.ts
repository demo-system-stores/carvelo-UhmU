import { TerminalBoardingData } from './terminalBoardingData';
export declare class TerminalBoardingNotificationRequest {
    /**
    * Timestamp for when the webhook was created.
    */
    'createdAt': Date;
    'data': TerminalBoardingData;
    /**
    * The environment from which the webhook originated.  Possible values: **test**, **live**.
    */
    'environment': string;
    /**
    * Type of notification.
    */
    'type': TerminalBoardingNotificationRequest.TypeEnum;
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
export declare namespace TerminalBoardingNotificationRequest {
    enum TypeEnum {
        TerminalBoardingTriggered = "terminalBoarding.triggered"
    }
}
