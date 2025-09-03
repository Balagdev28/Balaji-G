var MessageOverload = /** @class */ (function () {
    function MessageOverload() {
    }
    //Single imnplemnetation
    MessageOverload.prototype.reportStep = function (Message, Status, snap) {
        if (snap === undefined) {
            console.log("Report: ".concat(Message, " with status: ").concat(Status, "."));
        }
        else if (snap) {
            console.log("Report: ".concat(Message, " with status: ").concat(Status, "."));
        }
        else {
            console.log("Report: ".concat(Message, " with status: ").concat(Status, "."));
        }
    };
    return MessageOverload;
}());
var msgDisplay = new MessageOverload();
msgDisplay.reportStep("Hello Text", "Fail");
msgDisplay.reportStep("Hello Test", "Sucess snap", true);
msgDisplay.reportStep("Hello Test", "Sucess without snap", false);
