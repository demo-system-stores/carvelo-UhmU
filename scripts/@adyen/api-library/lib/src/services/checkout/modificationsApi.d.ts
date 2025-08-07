import Service from "../../service";
import Client from "../../client";
import { PaymentAmountUpdateRequest, PaymentAmountUpdateResponse, PaymentCancelRequest, PaymentCancelResponse, PaymentCaptureRequest, PaymentCaptureResponse, PaymentRefundRequest, PaymentRefundResponse, PaymentReversalRequest, PaymentReversalResponse, StandalonePaymentCancelRequest, StandalonePaymentCancelResponse } from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
export declare class ModificationsApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Cancel an authorised payment
    * @param standalonePaymentCancelRequest {@link StandalonePaymentCancelRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link StandalonePaymentCancelResponse }
    */
    cancelAuthorisedPayment(standalonePaymentCancelRequest: StandalonePaymentCancelRequest, requestOptions?: IRequest.Options): Promise<StandalonePaymentCancelResponse>;
    /**
    * @summary Cancel an authorised payment
    * @param paymentPspReference {@link string } The [&#x60;pspReference&#x60;](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to cancel.
    * @param paymentCancelRequest {@link PaymentCancelRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentCancelResponse }
    */
    cancelAuthorisedPaymentByPspReference(paymentPspReference: string, paymentCancelRequest: PaymentCancelRequest, requestOptions?: IRequest.Options): Promise<PaymentCancelResponse>;
    /**
    * @summary Capture an authorised payment
    * @param paymentPspReference {@link string } The [&#x60;pspReference&#x60;](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to capture.
    * @param paymentCaptureRequest {@link PaymentCaptureRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentCaptureResponse }
    */
    captureAuthorisedPayment(paymentPspReference: string, paymentCaptureRequest: PaymentCaptureRequest, requestOptions?: IRequest.Options): Promise<PaymentCaptureResponse>;
    /**
    * @summary Refund a captured payment
    * @param paymentPspReference {@link string } The [&#x60;pspReference&#x60;](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to refund.
    * @param paymentRefundRequest {@link PaymentRefundRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentRefundResponse }
    */
    refundCapturedPayment(paymentPspReference: string, paymentRefundRequest: PaymentRefundRequest, requestOptions?: IRequest.Options): Promise<PaymentRefundResponse>;
    /**
    * @summary Refund or cancel a payment
    * @param paymentPspReference {@link string } The [&#x60;pspReference&#x60;](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment that you want to reverse.
    * @param paymentReversalRequest {@link PaymentReversalRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentReversalResponse }
    */
    refundOrCancelPayment(paymentPspReference: string, paymentReversalRequest: PaymentReversalRequest, requestOptions?: IRequest.Options): Promise<PaymentReversalResponse>;
    /**
    * @summary Update an authorised amount
    * @param paymentPspReference {@link string } The [&#x60;pspReference&#x60;](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment.
    * @param paymentAmountUpdateRequest {@link PaymentAmountUpdateRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PaymentAmountUpdateResponse }
    */
    updateAuthorisedAmount(paymentPspReference: string, paymentAmountUpdateRequest: PaymentAmountUpdateRequest, requestOptions?: IRequest.Options): Promise<PaymentAmountUpdateResponse>;
}
