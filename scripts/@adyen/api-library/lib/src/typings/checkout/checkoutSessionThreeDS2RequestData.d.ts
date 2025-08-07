import { Phone } from './phone';
export declare class CheckoutSessionThreeDS2RequestData {
    'homePhone'?: Phone | null;
    'mobilePhone'?: Phone | null;
    /**
    * Indicates whether a challenge is requested for this transaction. Possible values: * **01** — No preference * **02** — No challenge requested * **03** — Challenge requested (3DS Requestor preference) * **04** — Challenge requested (Mandate) * **05** — No challenge (transactional risk analysis is already performed) * **06** — Data Only
    */
    'threeDSRequestorChallengeInd'?: CheckoutSessionThreeDS2RequestData.ThreeDSRequestorChallengeIndEnum;
    'workPhone'?: Phone | null;
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
export declare namespace CheckoutSessionThreeDS2RequestData {
    enum ThreeDSRequestorChallengeIndEnum {
        _01 = "01",
        _02 = "02",
        _03 = "03",
        _04 = "04",
        _05 = "05",
        _06 = "06"
    }
}
