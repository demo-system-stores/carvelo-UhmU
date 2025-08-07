import { CommonField } from './commonField';
import { ExternalPlatform } from './externalPlatform';
import { MerchantDevice } from './merchantDevice';
import { ShopperInteractionDevice } from './shopperInteractionDevice';
export declare class ApplicationInfo {
    'adyenLibrary'?: CommonField | null;
    'adyenPaymentSource'?: CommonField | null;
    'externalPlatform'?: ExternalPlatform | null;
    'merchantApplication'?: CommonField | null;
    'merchantDevice'?: MerchantDevice | null;
    'shopperInteractionDevice'?: ShopperInteractionDevice | null;
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
