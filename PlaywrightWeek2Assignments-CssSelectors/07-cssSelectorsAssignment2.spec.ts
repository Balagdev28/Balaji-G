import { chromium, test } from "@playwright/test";

test(`Edit Individuals`,async({page}) => { //used page fixture to launch browser

   await page.goto(`https://login.salesforce.com/?locale=in`);
   const url = page.url();
   console.log(`Url of the page open is ${url}`);
   await page.locator(`#username`).fill(`ravindran.ramdas@testleaf.com`);
   await page.locator(`#password`).fill(`RaviSalesTest#1432`);
   await page.locator(`#Login`).click();
   await page.waitForTimeout(2000);
   await page.waitForSelector(`.slds-icon-waffle`);
   await page.locator(`button[title^="App Launcher"]`).click();
   await page.waitForSelector(`input[role="combobox"]`);
   await page.locator(`button[aria-label^="View All Applications"]`).click();
   await page.waitForTimeout(2000);
   await page.waitForSelector(`span[title="All Apps"]`);
   await page.locator(`input[placeholder="Search apps or items..."]`).fill('Individuals');
   await page.waitForSelector(`a[href^="/lightning/o/Individual/home"]`);
   await page.waitForTimeout(2000);
   await page.locator(`a[href^="/lightning/o/Individual/home"]`).click();
   await page.waitForSelector(`input[name="Individual-search-input"]`);
   await page.locator(`input[type="search"]`).nth(1).fill("Mark");
   await page.locator(`input[type="search"]`).nth(1).press('Tab');
  // await page.waitForSelector(`a[class="slds-button slds-button--icon-x-small slds-button--icon-border-filled"]`);
   await page.locator(`a[title="Mark"]`).nth(1).click(); 
   await page.waitForSelector(`div[title="Edit"]`);
   await page.locator(`a[title="Edit"]`).nth(0).click();
   await page.locator(`a[class="select"]`).nth(0).click();
   await page.getByRole('option', {name: "Mr."}).click();
   await page.locator(`input[class="firstName compoundBorderBottom form-element__row input"]`).fill("Taylor");
   await page.locator(`button[title="Save"]`).click();
   await page.waitForSelector(`div[title="Mr. Taylor Mark"]`);
   const title2 = await page.locator('div[title="Mr. Taylor Mark"]').isVisible();   //Verifying individuals has been Edited using isVisible function
   console.log(title2);
   
   if (title2){   
            console.log(`Individuals is updated successfully!!!`); //Print this messsage when isVisible returns true
    } else {
        console.log(`Individuals is not updated.`); //Print this messsage when isVisible returns false
        
    } 
   await page.waitForTimeout(2000);
})