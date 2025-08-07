import { Amount } from './amount';
import { Fee } from './fee';
import { Repayment } from './repayment';
export declare class GrantOffer {
    /**
    * The identifier of the account holder to which the grant is offered.
    */
    'accountHolderId': string;
    'amount'?: Amount | null;
    /**
    * The contract type of the grant offer. Possible value: **cashAdvance**, **loan**.
    */
    'contractType'?: GrantOffer.ContractTypeEnum;
    /**
    * The end date of the grant offer validity period.
    */
    'expiresAt'?: Date;
    'fee'?: Fee | null;
    /**
    * The unique identifier of the grant offer.
    */
    'id'?: string;
    'repayment'?: Repayment | null;
    /**
    * The starting date of the grant offer validity period.
    */
    'startsAt'?: Date;
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
export declare namespace GrantOffer {
    enum ContractTypeEnum {
        CashAdvance = "cashAdvance",
        Loan = "loan"
    }
}
