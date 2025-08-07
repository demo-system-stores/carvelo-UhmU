export declare class TerminalAssignmentNotificationRequest {
    /**
    * The unique identifier of the merchant/company account to which the terminal is assigned.
    */
    'assignedToAccount': string;
    /**
    * The unique identifier of the store to which the terminal is assigned.
    */
    'assignedToStore'?: string;
    /**
    * The date and time when an event has been completed.
    */
    'eventDate': string;
    /**
    * The PSP reference of the request from which the notification originates.
    */
    'pspReference': string;
    /**
    * The unique identifier of the terminal.
    */
    'uniqueTerminalId': string;
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
