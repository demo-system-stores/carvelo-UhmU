import Service from "../../service";
import Client from "../../client";
import { ApiCredential, CreateApiCredentialResponse, CreateMerchantApiCredentialRequest, ListMerchantApiCredentialsResponse, UpdateMerchantApiCredentialRequest } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
export declare class APICredentialsMerchantLevelApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Create an API credential
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param createMerchantApiCredentialRequest {@link CreateMerchantApiCredentialRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CreateApiCredentialResponse }
    */
    createApiCredential(merchantId: string, createMerchantApiCredentialRequest: CreateMerchantApiCredentialRequest, requestOptions?: IRequest.Options): Promise<CreateApiCredentialResponse>;
    /**
    * @summary Get an API credential
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param apiCredentialId {@link string } Unique identifier of the API credential.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ApiCredential }
    */
    getApiCredential(merchantId: string, apiCredentialId: string, requestOptions?: IRequest.Options): Promise<ApiCredential>;
    /**
    * @summary Get a list of API credentials
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param requestOptions {@link IRequest.Options }
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 10 items on a page.
    * @return {@link ListMerchantApiCredentialsResponse }
    */
    listApiCredentials(merchantId: string, pageNumber?: number, pageSize?: number, requestOptions?: IRequest.Options): Promise<ListMerchantApiCredentialsResponse>;
    /**
    * @summary Update an API credential
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param apiCredentialId {@link string } Unique identifier of the API credential.
    * @param updateMerchantApiCredentialRequest {@link UpdateMerchantApiCredentialRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ApiCredential }
    */
    updateApiCredential(merchantId: string, apiCredentialId: string, updateMerchantApiCredentialRequest: UpdateMerchantApiCredentialRequest, requestOptions?: IRequest.Options): Promise<ApiCredential>;
}
