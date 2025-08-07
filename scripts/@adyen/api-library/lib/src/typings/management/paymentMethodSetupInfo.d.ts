import { AccelInfo } from './accelInfo';
import { AffirmInfo } from './affirmInfo';
import { AfterpayTouchInfo } from './afterpayTouchInfo';
import { AmexInfo } from './amexInfo';
import { ApplePayInfo } from './applePayInfo';
import { BcmcInfo } from './bcmcInfo';
import { CartesBancairesInfo } from './cartesBancairesInfo';
import { ClearpayInfo } from './clearpayInfo';
import { DinersInfo } from './dinersInfo';
import { GenericPmWithTdiInfo } from './genericPmWithTdiInfo';
import { GooglePayInfo } from './googlePayInfo';
import { JCBInfo } from './jCBInfo';
import { KlarnaInfo } from './klarnaInfo';
import { MealVoucherFRInfo } from './mealVoucherFRInfo';
import { NyceInfo } from './nyceInfo';
import { PayByBankPlaidInfo } from './payByBankPlaidInfo';
import { PayMeInfo } from './payMeInfo';
import { PayPalInfo } from './payPalInfo';
import { PayToInfo } from './payToInfo';
import { PulseInfo } from './pulseInfo';
import { SodexoInfo } from './sodexoInfo';
import { SofortInfo } from './sofortInfo';
import { StarInfo } from './starInfo';
import { SwishInfo } from './swishInfo';
import { TicketInfo } from './ticketInfo';
import { TwintInfo } from './twintInfo';
import { VippsInfo } from './vippsInfo';
import { WeChatPayInfo } from './weChatPayInfo';
import { WeChatPayPosInfo } from './weChatPayPosInfo';
export declare class PaymentMethodSetupInfo {
    'accel'?: AccelInfo | null;
    'affirm'?: AffirmInfo | null;
    'afterpayTouch'?: AfterpayTouchInfo | null;
    'amex'?: AmexInfo | null;
    'applePay'?: ApplePayInfo | null;
    'bcmc'?: BcmcInfo | null;
    /**
    * The unique identifier of the business line. Required if you are a [platform model](https://docs.adyen.com/platforms).
    */
    'businessLineId'?: string;
    'cartesBancaires'?: CartesBancairesInfo | null;
    'clearpay'?: ClearpayInfo | null;
    /**
    * The list of countries where a payment method is available. By default, all countries supported by the payment method.
    */
    'countries'?: Array<string>;
    'cup'?: GenericPmWithTdiInfo | null;
    /**
    * The list of currencies that a payment method supports. By default, all currencies supported by the payment method.
    */
    'currencies'?: Array<string>;
    /**
    * The list of custom routing flags to route payment to the intended acquirer.
    */
    'customRoutingFlags'?: Array<string>;
    'diners'?: DinersInfo | null;
    'discover'?: GenericPmWithTdiInfo | null;
    'eft_directdebit_CA'?: GenericPmWithTdiInfo | null;
    'eftpos_australia'?: GenericPmWithTdiInfo | null;
    'girocard'?: GenericPmWithTdiInfo | null;
    'googlePay'?: GooglePayInfo | null;
    'ideal'?: GenericPmWithTdiInfo | null;
    'interac_card'?: GenericPmWithTdiInfo | null;
    'jcb'?: JCBInfo | null;
    'klarna'?: KlarnaInfo | null;
    'maestro'?: GenericPmWithTdiInfo | null;
    'mc'?: GenericPmWithTdiInfo | null;
    'mealVoucher_FR'?: MealVoucherFRInfo | null;
    'nyce'?: NyceInfo | null;
    'paybybank_plaid'?: PayByBankPlaidInfo | null;
    'payme'?: PayMeInfo | null;
    'paypal'?: PayPalInfo | null;
    'payto'?: PayToInfo | null;
    'pulse'?: PulseInfo | null;
    /**
    * Your reference for the payment method. Supported characters a-z, A-Z, 0-9.
    */
    'reference'?: string;
    /**
    * The sales channel. Required if the merchant account does not have a sales channel. When you provide this field, it overrides the default sales channel set on the merchant account.  Possible values: **eCommerce**, **pos**, **contAuth**, and **moto**.
    */
    'shopperInteraction'?: PaymentMethodSetupInfo.ShopperInteractionEnum;
    'sodexo'?: SodexoInfo | null;
    'sofort'?: SofortInfo | null;
    'star'?: StarInfo | null;
    /**
    * The unique identifier of the store for which to configure the payment method, if any.
    */
    'storeIds'?: Array<string>;
    'swish'?: SwishInfo | null;
    'ticket'?: TicketInfo | null;
    'twint'?: TwintInfo | null;
    /**
    * Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).
    */
    'type': PaymentMethodSetupInfo.TypeEnum;
    'vipps'?: VippsInfo | null;
    'visa'?: GenericPmWithTdiInfo | null;
    'wechatpay'?: WeChatPayInfo | null;
    'wechatpay_pos'?: WeChatPayPosInfo | null;
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
export declare namespace PaymentMethodSetupInfo {
    enum ShopperInteractionEnum {
        ECommerce = "eCommerce",
        Pos = "pos",
        Moto = "moto",
        ContAuth = "contAuth"
    }
    enum TypeEnum {
        Accel = "accel",
        Ach = "ach",
        Affirm = "affirm",
        Afterpaytouch = "afterpaytouch",
        Alelo = "alelo",
        Alipay = "alipay",
        AlipayHk = "alipay_hk",
        AlipayWap = "alipay_wap",
        Amex = "amex",
        Applepay = "applepay",
        BaneseCard = "banese_card",
        BaneseCardCredit = "banese_card_credit",
        BaneseCardDebit = "banese_card_debit",
        BaneseCardPrepaid = "banese_card_prepaid",
        Bcmc = "bcmc",
        Blik = "blik",
        Cartebancaire = "cartebancaire",
        Clearpay = "clearpay",
        Clicktopay = "clicktopay",
        Credtodos = "credtodos",
        CredtodosPrivateCredit = "credtodos_private_credit",
        CredtodosPrivateDebit = "credtodos_private_debit",
        Cup = "cup",
        Diners = "diners",
        DirectdebitGb = "directdebit_GB",
        Discover = "discover",
        EbankingFi = "ebanking_FI",
        EftDirectdebitCa = "eft_directdebit_CA",
        EftposAustralia = "eftpos_australia",
        Elo = "elo",
        Elocredit = "elocredit",
        Elodebit = "elodebit",
        Girocard = "girocard",
        Googlepay = "googlepay",
        Hiper = "hiper",
        Hipercard = "hipercard",
        Ideal = "ideal",
        InteracCard = "interac_card",
        Jcb = "jcb",
        Klarna = "klarna",
        KlarnaAccount = "klarna_account",
        KlarnaPaynow = "klarna_paynow",
        Maestro = "maestro",
        Mbway = "mbway",
        Mc = "mc",
        Mcdebit = "mcdebit",
        MealVoucherFr = "mealVoucher_FR",
        Mobilepay = "mobilepay",
        Multibanco = "multibanco",
        Nyce = "nyce",
        OnlineBankingPl = "onlineBanking_PL",
        Paybybank = "paybybank",
        PaybybankPlaid = "paybybank_plaid",
        Payme = "payme",
        PaymePos = "payme_pos",
        Paynow = "paynow",
        PaynowPos = "paynow_pos",
        Paypal = "paypal",
        Payto = "payto",
        Pulse = "pulse",
        Sodexo = "sodexo",
        Star = "star",
        Swish = "swish",
        Ticket = "ticket",
        TodoGiftcard = "todo_giftcard",
        Trustly = "trustly",
        Twint = "twint",
        TwintPos = "twint_pos",
        UpBrazilCredit = "up_brazil_credit",
        ValeRefeicao = "vale_refeicao",
        ValeRefeicaoPrepaid = "vale_refeicao_prepaid",
        Vipps = "vipps",
        Visa = "visa",
        Visadebit = "visadebit",
        Vpay = "vpay",
        Wechatpay = "wechatpay",
        WechatpayPos = "wechatpay_pos"
    }
}
