export declare class Localization {
    /**
    * Language of the terminal.
    */
    'language'?: string;
    /**
    * Secondary language of the terminal.
    */
    'secondaryLanguage'?: string;
    /**
    * The time zone of the terminal.
    */
    'timezone'?: string;
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
