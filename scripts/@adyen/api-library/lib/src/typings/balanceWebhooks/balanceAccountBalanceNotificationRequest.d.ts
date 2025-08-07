import { BalanceNotificationData } from './balanceNotificationData';
export declare class BalanceAccountBalanceNotificationRequest {
    'data': BalanceNotificationData;
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
    'type': BalanceAccountBalanceNotificationRequest.TypeEnum;
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
export declare namespace BalanceAccountBalanceNotificationRequest {
    enum TypeEnum {
        BalancePlatformBalanceAccountBalanceUpdated = "balancePlatform.balanceAccount.balance.updated"
    }
}
