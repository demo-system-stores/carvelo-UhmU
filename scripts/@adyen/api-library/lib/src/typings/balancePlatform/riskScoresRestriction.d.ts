import { RiskScores } from './riskScores';
export declare class RiskScoresRestriction {
    /**
    * Defines how the condition must be evaluated.
    */
    'operation': string;
    'value'?: RiskScores | null;
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
