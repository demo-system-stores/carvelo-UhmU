export * from './amount';
export * from './negativeBalanceCompensationWarningNotificationData';
export * from './negativeBalanceCompensationWarningNotificationRequest';
export * from './resource';
export * from './resourceReference';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
