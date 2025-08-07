export declare class GetAcceptedTermsOfServiceDocumentResponse {
    /**
    * The accepted Terms of Service document in the requested format represented as a Base64-encoded bytes array.
    */
    'document'?: string;
    /**
    * The unique identifier of the legal entity.
    */
    'id'?: string;
    /**
    * An Adyen-generated reference for the accepted Terms of Service.
    */
    'termsOfServiceAcceptanceReference'?: string;
    /**
    * The format of the Terms of Service document.
    */
    'termsOfServiceDocumentFormat'?: GetAcceptedTermsOfServiceDocumentResponse.TermsOfServiceDocumentFormatEnum;
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
export declare namespace GetAcceptedTermsOfServiceDocumentResponse {
    enum TermsOfServiceDocumentFormatEnum {
        Json = "JSON",
        Pdf = "PDF",
        Txt = "TXT"
    }
}
