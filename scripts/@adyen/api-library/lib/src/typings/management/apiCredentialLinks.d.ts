import { LinksElement } from './linksElement';
export declare class ApiCredentialLinks {
    'allowedOrigins'?: LinksElement | null;
    'company'?: LinksElement | null;
    'generateApiKey'?: LinksElement | null;
    'generateClientKey'?: LinksElement | null;
    'merchant'?: LinksElement | null;
    'self': LinksElement;
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
