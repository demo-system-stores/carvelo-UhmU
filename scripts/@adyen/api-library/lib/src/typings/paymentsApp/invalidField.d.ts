export declare class InvalidField {
    /**
    * The field that has an invalid value.
    */
    'name': string;
    /**
    * The invalid value.
    */
    'value': string;
    /**
    * Description of the validation error.
    */
    'message': string;
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
