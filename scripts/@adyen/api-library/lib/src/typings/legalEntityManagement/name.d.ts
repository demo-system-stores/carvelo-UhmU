export declare class Name {
    /**
    * The individual\'s first name. Must not be blank.
    */
    'firstName': string;
    /**
    * The infix in the individual\'s name, if any.
    */
    'infix'?: string;
    /**
    * The individual\'s last name. Must not be blank.
    */
    'lastName': string;
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
