import { NegativeBalanceCompensationWarningNotificationData } from './negativeBalanceCompensationWarningNotificationData';
export declare class NegativeBalanceCompensationWarningNotificationRequest {
    'data': NegativeBalanceCompensationWarningNotificationData;
    /**
    * The environment from which the webhook originated.  Possible values: **test**, **live**.
    */
    'environment': string;
    /**
    * When the event was queued.
    */
    'timestamp'?: Date;
    /**
    * Type of webhook.
    */
    'type': NegativeBalanceCompensationWarningNotificationRequest.TypeEnum;
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
export declare namespace NegativeBalanceCompensationWarningNotificationRequest {
    enum TypeEnum {
        BalancePlatformNegativeBalanceCompensationWarningScheduled = "balancePlatform.negativeBalanceCompensationWarning.scheduled"
    }
}
