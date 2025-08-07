export * from './balanceAccountBalanceNotificationRequest';
export * from './balanceNotificationData';
export * from './balancePlatformNotificationResponse';
export * from './balances';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
