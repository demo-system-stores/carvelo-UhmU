import { AuthenticationNotificationData } from './authenticationNotificationData';
export declare class AuthenticationNotificationRequest {
    'data': AuthenticationNotificationData;
    /**
    * The environment from which the webhook originated.  Possible values: **test**, **live**.
    */
    'environment': string;
    /**
    * When the event was queued.
    */
    'timestamp'?: Date;
    /**
    * Type of notification.
    */
    'type': AuthenticationNotificationRequest.TypeEnum;
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
export declare namespace AuthenticationNotificationRequest {
    enum TypeEnum {
        BalancePlatformAuthenticationCreated = "balancePlatform.authentication.created"
    }
}
