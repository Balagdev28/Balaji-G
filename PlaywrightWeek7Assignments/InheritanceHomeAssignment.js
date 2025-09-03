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
exports.WebComponent = void 0;
var WebComponent = /** @class */ (function () {
    function WebComponent(selector) {
        this.selector = selector;
    }
    WebComponent.prototype.Click = function () {
        console.log("Click on component with: ".concat(this.selector));
    };
    WebComponent.prototype.Focus = function () {
        console.log("Focusing on a component with: ".concat(this.selector));
    };
    return WebComponent;
}());
exports.WebComponent = WebComponent;
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.Click = function () {
        _super.prototype.Click.call(this); //Call base class click method
        console.log("Click on component from Button class with: ".concat(this.selector));
    };
    return Button;
}(WebComponent));
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = " ";
        return _this;
    }
    TextInput.prototype.enterText = function (text) {
        this.value = text;
        console.log("Entered text value is ".concat(this.value, " using the locator ").concat(this.selector));
    };
    return TextInput;
}(WebComponent));
function testComponents() {
    var loginButton = new Button("#Login");
    var textInput = new TextInput("#UserName");
    console.log("----Testing Button----");
    loginButton.Click();
    loginButton.Focus();
    console.log("----Testing TextInput----");
    textInput.Click();
    textInput.Focus();
    textInput.enterText("BGTest");
}
testComponents(); //Calling the function 
