import { DonationCampaign } from './donationCampaign';
export declare class DonationCampaignsResponse {
    /**
    * List of active donation campaigns for your merchant account.
    */
    'donationCampaigns'?: Array<DonationCampaign>;
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
