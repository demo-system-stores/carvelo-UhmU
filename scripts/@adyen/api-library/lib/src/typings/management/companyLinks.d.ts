import { LinksElement } from './linksElement';
export declare class CompanyLinks {
    'apiCredentials'?: LinksElement | null;
    'self': LinksElement;
    'users'?: LinksElement | null;
    'webhooks'?: LinksElement | null;
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
