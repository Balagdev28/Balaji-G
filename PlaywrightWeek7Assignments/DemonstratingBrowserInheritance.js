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
exports.Safari = exports.Edge = exports.Chrome = exports.Browser = void 0;
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.prototype.openUrl = function () {
        console.log("Open url method from SuperClass");
    };
    Browser.prototype.closeBrowser = function () {
        console.log("Close Browser method from SuperClass");
    };
    Browser.prototype.navigateBack = function () {
        console.log("Navigate Back method from SuperClass");
    };
    return Browser;
}());
exports.Browser = Browser;
var Chrome = /** @class */ (function (_super) {
    __extends(Chrome, _super);
    function Chrome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chrome.prototype.openIncognito = function () {
        console.log("Opening browser in incognito mode in Chrome");
    };
    Chrome.prototype.clearCache = function () {
        console.log("Clearing browser Cache in Chrome");
    };
    return Chrome;
}(Browser));
exports.Chrome = Chrome;
var Edge = /** @class */ (function (_super) {
    __extends(Edge, _super);
    function Edge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Edge.prototype.takeSnap = function () {
        console.log("Taking snapshot in Edge Browser");
    };
    Edge.prototype.clearCookies = function () {
        console.log("Clearing Browser cookies in Edge");
    };
    return Edge;
}(Browser));
exports.Edge = Edge;
var Safari = /** @class */ (function (_super) {
    __extends(Safari, _super);
    function Safari() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Safari.prototype.readerMode = function () {
        console.log("Reader Mode in Safari Browser");
    };
    Safari.prototype.fullScreenMode = function () {
        console.log("Full screen mode in Safari browser");
    };
    return Safari;
}(Browser));
exports.Safari = Safari;
var chrome = new Chrome();
chrome.openUrl();
chrome.openIncognito();
chrome.clearCache();
chrome.closeBrowser();
var edge = new Edge();
edge.openUrl();
edge.clearCookies();
edge.navigateBack();
edge.takeSnap();
edge.closeBrowser();
var safari = new Safari();
safari.openUrl();
safari.readerMode();
safari.navigateBack();
safari.fullScreenMode();
safari.closeBrowser();
