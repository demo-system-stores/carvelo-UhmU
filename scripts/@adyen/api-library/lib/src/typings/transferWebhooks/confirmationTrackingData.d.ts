export declare class ConfirmationTrackingData {
    /**
    * The status of the transfer.  Possible values:    - **credited**: the funds are credited to your user\'s transfer instrument or bank account.
    */
    'status': ConfirmationTrackingData.StatusEnum;
    /**
    * The type of the tracking event.  Possible values:   - **confirmation**: the transfer passed Adyen\'s internal review.
    */
    'type': ConfirmationTrackingData.TypeEnum;
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
export declare namespace ConfirmationTrackingData {
    enum StatusEnum {
        Credited = "credited"
    }
    enum TypeEnum {
        Confirmation = "confirmation"
    }
}
