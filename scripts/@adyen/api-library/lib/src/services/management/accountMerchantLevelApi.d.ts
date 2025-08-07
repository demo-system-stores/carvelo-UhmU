import Service from "../../service";
import Client from "../../client";
import { CreateMerchantRequest, CreateMerchantResponse, ListMerchantResponse, Merchant, RequestActivationResponse } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
export declare class AccountMerchantLevelApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Create a merchant account
    * @param createMerchantRequest {@link CreateMerchantRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CreateMerchantResponse }
    */
    createMerchantAccount(createMerchantRequest: CreateMerchantRequest, requestOptions?: IRequest.Options): Promise<CreateMerchantResponse>;
    /**
    * @summary Get a merchant account
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link Merchant }
    */
    getMerchantAccount(merchantId: string, requestOptions?: IRequest.Options): Promise<Merchant>;
    /**
    * @summary Get a list of merchant accounts
    * @param requestOptions {@link IRequest.Options }
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 10 items on a page.
    * @return {@link ListMerchantResponse }
    */
    listMerchantAccounts(pageNumber?: number, pageSize?: number, requestOptions?: IRequest.Options): Promise<ListMerchantResponse>;
    /**
    * @summary Request to activate a merchant account
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link RequestActivationResponse }
    */
    requestToActivateMerchantAccount(merchantId: string, requestOptions?: IRequest.Options): Promise<RequestActivationResponse>;
}
