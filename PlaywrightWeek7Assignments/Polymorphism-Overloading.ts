
class MessageOverload {

   
    //method signature
    public reportStep(Message:string, Status:string, snap:boolean):void;
     //Method signature
    public reportStep(Message:string, Status:string): void;

    //Single imnplemnetation
    public reportStep(Message:string, Status:string, snap?:boolean){
        if (snap === undefined) {
            console.log(`Report: ${Message} with status: ${Status}.`);
        } else if (snap) {
            console.log(`Report: ${Message} with status: ${Status}.`);
        } else {
            console.log(`Report: ${Message} with status: ${Status}.`);
        }
    }
}

const msgDisplay = new MessageOverload();
msgDisplay.reportStep("Hello Text", "Fail");
msgDisplay.reportStep("Hello Test", "Sucess snap", true)
msgDisplay.reportStep("Hello Test", "Sucess without snap", false)