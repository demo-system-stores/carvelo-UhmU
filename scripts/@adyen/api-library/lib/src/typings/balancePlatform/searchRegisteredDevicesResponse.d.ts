import { Device } from './device';
import { Link } from './link';
export declare class SearchRegisteredDevicesResponse {
    /**
    * Contains a list of registered SCA devices and their corresponding details.
    */
    'data'?: Array<Device>;
    /**
    * The total amount of registered SCA devices that match the query parameters.
    */
    'itemsTotal'?: number;
    'link'?: Link | null;
    /**
    * The total amount of list pages.
    */
    'pagesTotal'?: number;
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
