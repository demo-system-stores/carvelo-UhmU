export * from './boardingTokenRequest';
export * from './boardingTokenResponse';
export * from './defaultErrorResponseEntity';
export * from './invalidField';
export * from './paymentsAppDto';
export * from './paymentsAppResponse';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
