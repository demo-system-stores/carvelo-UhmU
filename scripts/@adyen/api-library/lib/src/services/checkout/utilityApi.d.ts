import Service from "../../service";
import Client from "../../client";
import { ApplePaySessionRequest, ApplePaySessionResponse, PaypalUpdateOrderRequest, PaypalUpdateOrderResponse, UtilityRequest, UtilityResponse } from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
export declare class UtilityApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Get an Apple Pay session
    * @param applePaySessionRequest {@link ApplePaySessionRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ApplePaySessionResponse }
    */
    getApplePaySession(applePaySessionRequest: ApplePaySessionRequest, requestOptions?: IRequest.Options): Promise<ApplePaySessionResponse>;
    /**
    * @summary Create originKey values for domains
    * @param utilityRequest {@link UtilityRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link UtilityResponse }
    *
    * @deprecated since Adyen Checkout API v67
    */
    originKeys(utilityRequest: UtilityRequest, requestOptions?: IRequest.Options): Promise<UtilityResponse>;
    /**
    * @summary Updates the order for PayPal Express Checkout
    * @param paypalUpdateOrderRequest {@link PaypalUpdateOrderRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaypalUpdateOrderResponse }
    */
    updatesOrderForPaypalExpressCheckout(paypalUpdateOrderRequest: PaypalUpdateOrderRequest, requestOptions?: IRequest.Options): Promise<PaypalUpdateOrderResponse>;
}
