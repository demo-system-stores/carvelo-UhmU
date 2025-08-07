import { configurationWebhooks, acsWebhooks, reportWebhooks, transferWebhooks, transactionWebhooks, negativeBalanceWarningWebhooks, balanceWebhooks } from "../typings";
declare class BankingWebhookHandler {
    private readonly payload;
    constructor(jsonPayload: string);
    getGenericWebhook(): acsWebhooks.AuthenticationNotificationRequest | acsWebhooks.RelayedAuthenticationRequest | balanceWebhooks.BalanceAccountBalanceNotificationRequest | configurationWebhooks.AccountHolderNotificationRequest | configurationWebhooks.BalanceAccountNotificationRequest | configurationWebhooks.PaymentNotificationRequest | configurationWebhooks.SweepConfigurationNotificationRequest | configurationWebhooks.CardOrderNotificationRequest | negativeBalanceWarningWebhooks.NegativeBalanceCompensationWarningNotificationRequest | reportWebhooks.ReportNotificationRequest | transferWebhooks.TransferNotificationRequest | transactionWebhooks.TransactionNotificationRequestV4;
    getAuthenticationNotificationRequest(): acsWebhooks.AuthenticationNotificationRequest;
    getRelayedAuthenticationRequest(): acsWebhooks.RelayedAuthenticationRequest;
    getBalanceAccountBalanceNotificationRequest(): balanceWebhooks.BalanceAccountBalanceNotificationRequest;
    getAccountHolderNotificationRequest(): configurationWebhooks.AccountHolderNotificationRequest;
    getCardOrderNotificationRequest(): configurationWebhooks.CardOrderNotificationRequest;
    getPaymentNotificationRequest(): configurationWebhooks.PaymentNotificationRequest;
    getSweepConfigurationNotificationRequest(): configurationWebhooks.SweepConfigurationNotificationRequest;
    getNegativeBalanceCompensationWarningNotificationRequest(): negativeBalanceWarningWebhooks.NegativeBalanceCompensationWarningNotificationRequest;
    getReportNotificationRequest(): reportWebhooks.ReportNotificationRequest;
    getTransferNotificationRequest(): transferWebhooks.TransferNotificationRequest;
    getTransactionNotificationRequest(): transactionWebhooks.TransactionNotificationRequestV4;
    BalanceAccountBalanceNotificationRequest(): balanceWebhooks.BalanceAccountBalanceNotificationRequest;
}
export default BankingWebhookHandler;
