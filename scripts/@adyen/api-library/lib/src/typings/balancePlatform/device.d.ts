export declare class Device {
    /**
    * The unique identifier of the SCA device.
    */
    'id'?: string;
    /**
    * The name of the SCA device. You can show this name to your user to help them identify the device.
    */
    'name'?: string;
    /**
    * The unique identifier of the payment instrument that is associated with the SCA device.
    */
    'paymentInstrumentId'?: string;
    /**
    * The type of device.  Possible values: **ios**, **android**, **browser**.
    */
    'type'?: Device.TypeEnum;
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
export declare namespace Device {
    enum TypeEnum {
        Ios = "ios",
        Android = "android",
        Browser = "browser"
    }
}
