"use strict";
/*
 * Adyen NodeJS API Library
 * Copyright (c) 2023 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const typings_1 = require("../typings");
class BankingWebhookHandler {
    constructor(jsonPayload) {
        this.payload = JSON.parse(jsonPayload);
    }
    // Return generic webhook type
    getGenericWebhook() {
        const type = this.payload["type"];
        if (Object.values(typings_1.acsWebhooks.AuthenticationNotificationRequest.TypeEnum).includes(type)) {
            return this.getAuthenticationNotificationRequest();
        }
        if (Object.values(typings_1.configurationWebhooks.AccountHolderNotificationRequest.TypeEnum).includes(type)) {
            return this.getAccountHolderNotificationRequest();
        }
        if (Object.values(typings_1.configurationWebhooks.BalanceAccountNotificationRequest.TypeEnum).includes(type)) {
            return this.getBalanceAccountBalanceNotificationRequest();
        }
        if (Object.values(typings_1.configurationWebhooks.CardOrderNotificationRequest.TypeEnum).includes(type)) {
            return this.getCardOrderNotificationRequest();
        }
        if (Object.values(typings_1.configurationWebhooks.PaymentNotificationRequest.TypeEnum).includes(type)) {
            return this.getPaymentNotificationRequest();
        }
        if (Object.values(typings_1.configurationWebhooks.SweepConfigurationNotificationRequest.TypeEnum).includes(type)) {
            return this.getSweepConfigurationNotificationRequest();
        }
        if (Object.values(typings_1.negativeBalanceWarningWebhooks.NegativeBalanceCompensationWarningNotificationRequest.TypeEnum).includes(type)) {
            return this.getNegativeBalanceCompensationWarningNotificationRequest();
        }
        if (Object.values(typings_1.reportWebhooks.ReportNotificationRequest.TypeEnum).includes(type)) {
            return this.getReportNotificationRequest();
        }
        if (Object.values(typings_1.transferWebhooks.TransferNotificationRequest.TypeEnum).includes(type)) {
            return this.getTransferNotificationRequest();
        }
        if (Object.values(typings_1.transactionWebhooks.TransactionNotificationRequestV4.TypeEnum).includes(type)) {
            return this.getTransactionNotificationRequest();
        }
        if (Object.values(typings_1.balanceWebhooks.BalanceAccountBalanceNotificationRequest.TypeEnum).includes(type)) {
            return this.BalanceAccountBalanceNotificationRequest();
        }
        if (!type && this.payload["paymentInstrumentId"]) {
            // ad-hoc fix for the relayed authentication request
            // if type is undefined but paymentInstrumentId is present then it is a relayedAuthenticationRequest
            return this.getRelayedAuthenticationRequest();
        }
        throw new Error("Could not parse the json payload: " + this.payload);
    }
    getAuthenticationNotificationRequest() {
        return typings_1.acsWebhooks.ObjectSerializer.deserialize(this.payload, "AuthenticationNotificationRequest");
    }
    getRelayedAuthenticationRequest() {
        return typings_1.acsWebhooks.ObjectSerializer.deserialize(this.payload, "RelayedAuthenticationRequest");
    }
    getBalanceAccountBalanceNotificationRequest() {
        return typings_1.balanceWebhooks.ObjectSerializer.deserialize(this.payload, "BalanceAccountBalanceNotificationRequest");
    }
    getAccountHolderNotificationRequest() {
        return typings_1.configurationWebhooks.ObjectSerializer.deserialize(this.payload, "AccountHolderNotificationRequest");
    }
    getCardOrderNotificationRequest() {
        return typings_1.configurationWebhooks.ObjectSerializer.deserialize(this.payload, "CardOrderNotificationRequest");
    }
    getPaymentNotificationRequest() {
        return typings_1.configurationWebhooks.ObjectSerializer.deserialize(this.payload, "PaymentNotificationRequest");
    }
    getSweepConfigurationNotificationRequest() {
        return typings_1.configurationWebhooks.ObjectSerializer.deserialize(this.payload, "SweepConfigurationNotificationRequest");
    }
    getNegativeBalanceCompensationWarningNotificationRequest() {
        return typings_1.negativeBalanceWarningWebhooks.ObjectSerializer.deserialize(this.payload, "NegativeBalanceCompensationWarningNotificationRequest");
    }
    getReportNotificationRequest() {
        return typings_1.reportWebhooks.ObjectSerializer.deserialize(this.payload, "ReportNotificationRequest");
    }
    getTransferNotificationRequest() {
        return typings_1.transferWebhooks.ObjectSerializer.deserialize(this.payload, "TransferNotificationRequest");
    }
    getTransactionNotificationRequest() {
        return typings_1.transactionWebhooks.ObjectSerializer.deserialize(this.payload, "TransactionNotificationRequestV4");
    }
    BalanceAccountBalanceNotificationRequest() {
        return typings_1.balanceWebhooks.ObjectSerializer.deserialize(this.payload, "BalanceAccountBalanceNotificationRequest");
    }
}
exports.default = BankingWebhookHandler;
//# sourceMappingURL=bankingWebhookHandler.js.map