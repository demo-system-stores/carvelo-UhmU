import Service from "../../service";
import Client from "../../client";
import { ListNetworkTokensResponse, PaymentInstrument, PaymentInstrumentInfo, PaymentInstrumentRevealInfo, PaymentInstrumentRevealRequest, PaymentInstrumentRevealResponse, PaymentInstrumentUpdateRequest, TransactionRulesResponse, UpdatePaymentInstrument } from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
export declare class PaymentInstrumentsApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Create a payment instrument
    * @param paymentInstrumentInfo {@link PaymentInstrumentInfo }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentInstrument }
    */
    createPaymentInstrument(paymentInstrumentInfo: PaymentInstrumentInfo, requestOptions?: IRequest.Options): Promise<PaymentInstrument>;
    /**
    * @summary Get all transaction rules for a payment instrument
    * @param id {@link string } The unique identifier of the payment instrument.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TransactionRulesResponse }
    */
    getAllTransactionRulesForPaymentInstrument(id: string, requestOptions?: IRequest.Options): Promise<TransactionRulesResponse>;
    /**
    * @summary Get the PAN of a payment instrument
    * @param id {@link string } The unique identifier of the payment instrument.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentInstrumentRevealInfo }
    */
    getPanOfPaymentInstrument(id: string, requestOptions?: IRequest.Options): Promise<PaymentInstrumentRevealInfo>;
    /**
    * @summary Get a payment instrument
    * @param id {@link string } The unique identifier of the payment instrument.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentInstrument }
    */
    getPaymentInstrument(id: string, requestOptions?: IRequest.Options): Promise<PaymentInstrument>;
    /**
    * @summary List network tokens
    * @param id {@link string } The unique identifier of the payment instrument.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ListNetworkTokensResponse }
    */
    listNetworkTokens(id: string, requestOptions?: IRequest.Options): Promise<ListNetworkTokensResponse>;
    /**
    * @summary Reveal the data of a payment instrument
    * @param paymentInstrumentRevealRequest {@link PaymentInstrumentRevealRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentInstrumentRevealResponse }
    */
    revealDataOfPaymentInstrument(paymentInstrumentRevealRequest: PaymentInstrumentRevealRequest, requestOptions?: IRequest.Options): Promise<PaymentInstrumentRevealResponse>;
    /**
    * @summary Update a payment instrument
    * @param id {@link string } The unique identifier of the payment instrument.
    * @param paymentInstrumentUpdateRequest {@link PaymentInstrumentUpdateRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link UpdatePaymentInstrument }
    */
    updatePaymentInstrument(id: string, paymentInstrumentUpdateRequest: PaymentInstrumentUpdateRequest, requestOptions?: IRequest.Options): Promise<UpdatePaymentInstrument>;
}
