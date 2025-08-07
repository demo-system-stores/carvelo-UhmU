import Service from "../../service";
import Client from "../../client";
import { DonationCampaignsRequest, DonationCampaignsResponse, DonationPaymentRequest, DonationPaymentResponse } from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
export declare class DonationsApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Get a list of donation campaigns.
    * @param donationCampaignsRequest {@link DonationCampaignsRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link DonationCampaignsResponse }
    */
    donationCampaigns(donationCampaignsRequest: DonationCampaignsRequest, requestOptions?: IRequest.Options): Promise<DonationCampaignsResponse>;
    /**
    * @summary Start a transaction for donations
    * @param donationPaymentRequest {@link DonationPaymentRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link DonationPaymentResponse }
    */
    donations(donationPaymentRequest: DonationPaymentRequest, requestOptions?: IRequest.Options): Promise<DonationPaymentResponse>;
}
