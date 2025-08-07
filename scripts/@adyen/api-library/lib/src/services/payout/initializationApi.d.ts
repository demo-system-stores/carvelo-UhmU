import Service from "../../service";
import Client from "../../client";
import { StoreDetailAndSubmitRequest, StoreDetailAndSubmitResponse, StoreDetailRequest, StoreDetailResponse, SubmitRequest, SubmitResponse } from "../../typings/payout/models";
import { IRequest } from "../../typings/requestOptions";
export declare class InitializationApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Store payout details
    * @param storeDetailRequest {@link StoreDetailRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link StoreDetailResponse }
    */
    storeDetail(storeDetailRequest: StoreDetailRequest, requestOptions?: IRequest.Options): Promise<StoreDetailResponse>;
    /**
    * @summary Store details and submit a payout
    * @param storeDetailAndSubmitRequest {@link StoreDetailAndSubmitRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link StoreDetailAndSubmitResponse }
    */
    storeDetailAndSubmitThirdParty(storeDetailAndSubmitRequest: StoreDetailAndSubmitRequest, requestOptions?: IRequest.Options): Promise<StoreDetailAndSubmitResponse>;
    /**
    * @summary Submit a payout
    * @param submitRequest {@link SubmitRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link SubmitResponse }
    */
    submitThirdParty(submitRequest: SubmitRequest, requestOptions?: IRequest.Options): Promise<SubmitResponse>;
}
