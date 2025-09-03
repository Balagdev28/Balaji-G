export class WebComponent{
    selector:string;

    constructor(selector:string){
        this.selector = selector;
    }
    
    Click():void {
        console.log(`Click on component with: ${this.selector}`);
        
    }
    Focus():void{
        console.log(`Focusing on a component with: ${this.selector}`);
        
    }

}

class Button extends WebComponent{

    Click():void {
        super.Click(); //Call base class click method
        console.log(`Click on component from Button class with: ${this.selector}`);
        
    }

}

class TextInput extends WebComponent{
    value: string = " ";

    enterText(text: string):void{
        this.value = text;
        console.log(`Entered text value is ${this.value} using the locator ${this.selector}`);
        
    }

}

function testComponents(){

    const loginButton = new Button(`#Login`);
    const textInput = new TextInput(`#UserName`);

    console.log("----Testing Button----");
    loginButton.Click();
    loginButton.Focus();

    console.log("----Testing TextInput----");
    textInput.Click();
    textInput.Focus();
    textInput.enterText("BGTest");

}

testComponents(); //Calling the function 