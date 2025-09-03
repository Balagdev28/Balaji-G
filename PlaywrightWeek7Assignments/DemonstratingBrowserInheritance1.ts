
export class TestData{

    enterCredentials():void{
        console.log(`Entering credentials in TestData class...`);
        
    }

    navigateToHomePage():void{

        console.log(`Navigating to Home Page from TestData class...`);
        

    }
}

export class LoginTestData extends TestData{

    enterUsername(): void {
        console.log("Entering Username in LoginTestData class...");
    }

    enterPassword(): void {
        console.log("Entering Password in LoginTestData class...");
    }

}

// ---------- Test ----------
const testData = new TestData();
console.log("=== TestData Object ===");
testData.enterCredentials();
testData.navigateToHomePage();

console.log("------------");

const loginData = new LoginTestData();
console.log("=== LoginTestData Object ===");
loginData.enterUsername();
loginData.enterPassword();
loginData.enterCredentials();   // inherited from TestData
loginData.navigateToHomePage(); // inherited from TestData