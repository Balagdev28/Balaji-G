"use strict";
//interfaceDemo-Test1.ts
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
    return mySQLconnection;
}());
function DBmethod() {
    var mySql = new mySQLconnection();
    mySql.connect();
    mySql.executeUpdate();
    mySql.disconnect();
}
DBmethod();
