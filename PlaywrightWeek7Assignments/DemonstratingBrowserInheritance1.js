"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginTestData = exports.TestData = void 0;
var TestData = /** @class */ (function () {
    function TestData() {
    }
    TestData.prototype.enterCredentials = function () {
        console.log("Entering credentials in TestData class...");
    };
    TestData.prototype.navigateToHomePage = function () {
        console.log("Navigating to Home Page from TestData class...");
    };
    return TestData;
}());
exports.TestData = TestData;
var LoginTestData = /** @class */ (function (_super) {
    __extends(LoginTestData, _super);
    function LoginTestData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginTestData.prototype.enterUsername = function () {
        console.log("Entering Username in LoginTestData class...");
    };
    LoginTestData.prototype.enterPassword = function () {
        console.log("Entering Password in LoginTestData class...");
    };
    return LoginTestData;
}(TestData));
exports.LoginTestData = LoginTestData;
// ---------- Test ----------
var testData = new TestData();
console.log("=== TestData Object ===");
testData.enterCredentials();
testData.navigateToHomePage();
console.log("------------");
var loginData = new LoginTestData();
console.log("=== LoginTestData Object ===");
loginData.enterUsername();
loginData.enterPassword();
loginData.enterCredentials(); // inherited from TestData
loginData.navigateToHomePage(); // inherited from TestData
