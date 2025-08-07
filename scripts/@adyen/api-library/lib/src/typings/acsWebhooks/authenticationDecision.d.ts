export declare class AuthenticationDecision {
    /**
    * The status of the authentication.   Possible values:   * **refused**   * **proceed**   For more information, refer to [Authenticate cardholders using the Authentication SDK](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/authenticate-cardholders/).
    */
    'status': AuthenticationDecision.StatusEnum;
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
export declare namespace AuthenticationDecision {
    enum StatusEnum {
        Proceed = "proceed",
        Refused = "refused"
    }
}
