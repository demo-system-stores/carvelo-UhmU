import { Amount } from './amount';
export declare class DeliveryMethod {
    'amount'?: Amount | null;
    /**
    * The name of the delivery method as shown to the shopper.
    */
    'description'?: string;
    /**
    * The reference of the delivery method.
    */
    'reference'?: string;
    /**
    * If you display the PayPal lightbox with delivery methods, set to **true** for the delivery method that is selected. Only one delivery method can be selected at a time.
    */
    'selected'?: boolean;
    /**
    * The type of the delivery method.
    */
    'type'?: DeliveryMethod.TypeEnum;
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
export declare namespace DeliveryMethod {
    enum TypeEnum {
        Shipping = "Shipping"
    }
}
