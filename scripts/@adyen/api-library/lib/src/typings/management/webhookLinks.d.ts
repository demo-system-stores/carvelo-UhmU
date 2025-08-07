import { LinksElement } from './linksElement';
export declare class WebhookLinks {
    'company'?: LinksElement | null;
    'generateHmac': LinksElement;
    'merchant'?: LinksElement | null;
    'self': LinksElement;
    'testWebhook': LinksElement;
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
