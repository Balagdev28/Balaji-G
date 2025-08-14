import { expect, test } from "@playwright/test";

test(`Handling Alerts and Frames assginment`,async({page})=>{

    await page.goto(`https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm`);

    page.on("dialog", async(alert)=>{

    const alretMessage = alert.message();
    console.log(`Alert Message is :${alretMessage}`);
    
    const alretType = alert.type();
    console.log(`The type of alret is: ${alretType}`);

    if(alretType === 'confirm'){
        await alert.accept();
    } else if (alretType === 'prompt'){
        await alert.accept('BG Alert Test');
    } else{
        await alert.dismiss();
    }
    
    })
 const allFrames = page.frames(); //frames method is to get the complete details of your frames from the page[Array of all frames]
    const frameCount = allFrames.length;
    console.log(`The total count of frame in the page is ${frameCount}`);
    const firstFrame = page.frameLocator(`iframe[id=iframeResult]`) ;
   const clickButton = firstFrame.locator(`//button[@onclick="myFunction()"]`);
   await clickButton.click();
   await page.waitForTimeout(2000);
   await expect(firstFrame.locator(`//p[contains(text(),'You')]`)).toHaveText("You pressed OK!"); //Asserting the text after clicking the button 
      const status = await (clickButton).isVisible();
      console.log(status);


})