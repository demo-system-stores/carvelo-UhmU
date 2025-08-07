import { EventUrl } from './eventUrl';
import { Key } from './key';
import { Notification } from './notification';
import { NotificationUrl } from './notificationUrl';
export declare class Nexo {
    'displayUrls'?: NotificationUrl | null;
    'encryptionKey'?: Key | null;
    'eventUrls'?: EventUrl | null;
    /**
    * One or more URLs to send event messages to when using Terminal API.
    *
    * @deprecated since Management API v1
    * Use `eventUrls` instead.
    */
    'nexoEventUrls'?: Array<string>;
    'notification'?: Notification | null;
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
