export declare class CreateSessionRequest {
    /**
    * The unique identifier of your merchant account.
    */
    'merchantAccount': string;
    /**
    * The setup token provided by the POS Mobile SDK.  - When using the Android POS Mobile SDK, obtain the token through the `AuthenticationService.authenticate(setupToken)` callback of `AuthenticationService`.  - When using the iOS POS Mobile SDK, obtain the token through the `PaymentServiceDelegate.register(with:)` callback of `PaymentServiceDelegate`.
    */
    'setupToken': string;
    /**
    * The unique identifier of the store that you want to process transactions for.
    */
    'store'?: string;
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
