"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanaraBank = void 0;
var CanaraBank = /** @class */ (function () {
    function CanaraBank() {
    }
    CanaraBank.prototype.cashOnDelivery = function () {
        console.log("Cash on Delivery option...");
    };
    CanaraBank.prototype.upiPayments = function () {
        console.log("UPI Payment option...");
    };
    CanaraBank.prototype.cardPayments = function () {
        console.log("Card Payment option...");
    };
    CanaraBank.prototype.internetBanking = function () {
        console.log("Internet Banking option...");
    };
    CanaraBank.prototype.recordPaymentDetails = function () {
        console.log("Recording payment details in Canara Bank Class...");
    };
    return CanaraBank;
}());
exports.CanaraBank = CanaraBank;
