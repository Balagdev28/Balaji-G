import { expect, test } from "@playwright/test";

test (`Test to interact with the frames using framelocator`,async ({page}) => {


    await page.goto(`https://leafground.com/frame.xhtml`);

    const allFrames = page.frames(); //frames method is to get the complete details of your frames from the page[Array of all frames]
    const frameCount = allFrames.length;
    console.log(`The total count of frame in the page is ${frameCount}`);


    //Using frame locator
   const firstFrame = page.frameLocator(`iframe[src='default.xhtml']`) ;
   const clickButton = firstFrame.locator("#Click");
   await clickButton.click();
   await expect(clickButton).toHaveText("Hurray! You Clicked Me."); //Asserting the text of the button after click
   const status = await (clickButton).isVisible();
   console.log(status);
   

   await page.waitForTimeout(3000);  
   
   //interact with nested frame
   const nestedcard = page.locator(".card").filter({hasText:"Inside Nested frame"});
    const frame_outerframe = nestedcard.frameLocator("iframe");
    const frame_innerframe = frame_outerframe.frameLocator("iframe");
    const nestedFrameButton = frame_innerframe.locator("#Click");
    await nestedFrameButton.click();
    await expect(nestedFrameButton).toHaveText("Hurray! You Clicked Me."); //Asserting the text of the button after click
   const status1 = await (clickButton).isVisible();
   console.log(status1);  


    //Interact with frame using "name"


 /*  const frameName = await page.frame({name:'frame2'});
   const loc = await frameName!.locator('#Click');
   await loc.click();
   //await frameName?.click('#Click');
   await expect(loc).toHaveText("Hurray! You Clicked Me.");
   const status1 = await (clickButton).isVisible();
   console.log(status1);   */

    await page.waitForTimeout(3000);

});

