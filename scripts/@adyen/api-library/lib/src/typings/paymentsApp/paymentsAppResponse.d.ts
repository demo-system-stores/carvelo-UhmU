import { PaymentsAppDto } from './paymentsAppDto';
export declare class PaymentsAppResponse {
    /**
    * List of Payments Apps.
    */
    'paymentsApps': Array<PaymentsAppDto>;
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
