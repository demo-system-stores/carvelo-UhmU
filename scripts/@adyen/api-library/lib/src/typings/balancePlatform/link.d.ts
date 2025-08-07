import { Href } from './href';
export declare class Link {
    'first'?: Href | null;
    'last'?: Href | null;
    'next'?: Href | null;
    'previous'?: Href | null;
    'self'?: Href | null;
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
