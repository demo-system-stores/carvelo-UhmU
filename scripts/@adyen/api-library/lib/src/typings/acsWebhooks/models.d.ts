export * from './amount';
export * from './authenticationDecision';
export * from './authenticationInfo';
export * from './authenticationNotificationData';
export * from './authenticationNotificationRequest';
export * from './balancePlatformNotificationResponse';
export * from './challengeInfo';
export * from './purchase';
export * from './purchaseInfo';
export * from './relayedAuthenticationRequest';
export * from './relayedAuthenticationResponse';
export * from './resource';
export * from './serviceError';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
