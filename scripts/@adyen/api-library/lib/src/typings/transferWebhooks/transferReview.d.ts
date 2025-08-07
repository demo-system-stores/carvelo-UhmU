export declare class TransferReview {
    /**
    * Shows the number of [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) required to process the transfer.
    */
    'numberOfApprovalsRequired'?: number;
    /**
    * Shows the status of the Strong Customer Authentication (SCA) process.  Possible values: **required**, **notApplicable**.
    */
    'scaOnApproval'?: TransferReview.ScaOnApprovalEnum;
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
export declare namespace TransferReview {
    enum ScaOnApprovalEnum {
        Completed = "completed",
        NotApplicable = "notApplicable",
        Required = "required"
    }
}
