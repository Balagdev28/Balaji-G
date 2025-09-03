"use strict";
//interfaceDemo-Test2.ts
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
var mySQLconnection = /** @class */ (function () {
    function mySQLconnection() {
    }
    mySQLconnection.prototype.connect = function () {
        console.log("Connecting to DataBase....");
    };
    mySQLconnection.prototype.disconnect = function () {
        console.log("Disconnecting from DataBase...");
    };
    mySQLconnection.prototype.executeUpdate = function () {
        console.log("Updating the DataBase...");
    };
    mySQLconnection.prototype.executeQuery = function () {
        console.log("Executing Query in DataBase...");
    };
    return mySQLconnection;
}());
var PlaywrightConnection = /** @class */ (function (_super) {
    __extends(PlaywrightConnection, _super);
    function PlaywrightConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlaywrightConnection.prototype.recordconnect = function () {
        console.log("Record Database connection...");
    };
    PlaywrightConnection.prototype.verifyDB = function () {
        console.log("Verify DataBase Testusing Playwright Abstract class & Interface implementaion...");
    };
    return PlaywrightConnection;
}(mySQLconnection));
var mySql = new PlaywrightConnection();
mySql.verifyDB();
mySql.recordconnect();
mySql.connect();
mySql.executeQuery();
mySql.executeUpdate();
mySql.disconnect();
