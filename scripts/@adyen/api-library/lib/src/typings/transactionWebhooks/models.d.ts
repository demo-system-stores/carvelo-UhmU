export * from './amount';
export * from './balancePlatformNotificationResponse';
export * from './bankCategoryData';
export * from './internalCategoryData';
export * from './issuedCard';
export * from './paymentInstrument';
export * from './platformPayment';
export * from './relayedAuthorisationData';
export * from './resource';
export * from './resourceReference';
export * from './transaction';
export * from './transactionNotificationRequestV4';
export * from './transferNotificationValidationFact';
export * from './transferView';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
