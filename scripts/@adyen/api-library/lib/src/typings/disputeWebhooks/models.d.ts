export * from './amount';
export * from './balancePlatformNotificationResponse';
export * from './disputeEventNotification';
export * from './disputeNotificationRequest';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
