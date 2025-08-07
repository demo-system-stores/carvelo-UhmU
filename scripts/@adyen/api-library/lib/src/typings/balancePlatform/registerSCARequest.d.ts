import { DelegatedAuthenticationData } from './delegatedAuthenticationData';
export declare class RegisterSCARequest {
    /**
    * The name of the SCA device that you are registering. You can use it to help your users identify the device.  If you do not specify a `name`, Adyen automatically generates one.
    */
    'name'?: string;
    /**
    * The unique identifier of the payment instrument for which you are registering the SCA device.
    */
    'paymentInstrumentId': string;
    'strongCustomerAuthentication': DelegatedAuthenticationData;
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
