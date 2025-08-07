import { LinksElement } from './linksElement';
export declare class PaginationLinks {
    'first': LinksElement;
    'last': LinksElement;
    'next'?: LinksElement | null;
    'prev'?: LinksElement | null;
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
