import { DisputeEventNotification } from './disputeEventNotification';
export declare class DisputeNotificationRequest {
    'data': DisputeEventNotification;
    /**
    * Type of webhook.
    */
    'type': DisputeNotificationRequest.TypeEnum;
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
export declare namespace DisputeNotificationRequest {
    enum TypeEnum {
        Created = "balancePlatform.dispute.created",
        Updated = "balancePlatform.dispute.updated"
    }
}
