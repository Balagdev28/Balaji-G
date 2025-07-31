import { chromium, test } from "@playwright/test";

test(`Create Individuals`,async({page}) => { //used page fixture to launch browser

   await page.goto(`https://login.salesforce.com/?locale=in`);
   const url = page.url();
   console.log(`Url of the page open is ${url}`);
   await page.locator(`#username`).fill(`ravindran.ramdas@testleaf.com`);
   await page.locator(`#password`).fill(`RaviSalesTest#1432`);
   await page.locator(`#Login`).click();
   await page.waitForTimeout(2000);
   //await page.waitForSelector(`.slds-icon-waffle`);
   await page.locator(`button[title^="App Launcher"]`).click();
   await page.waitForSelector(`h2[class="slds-text-heading_small title"]`);
   await page.locator(`button[aria-label^="View All Applications"]`).click();
   await page.waitForTimeout(2000);
   await page.locator(`input[placeholder="Search apps or items..."]`).fill('Individuals');
   await page.waitForSelector(`a[href^="/lightning/o/Individual/home"]`);
   await page.waitForTimeout(2000);
   await page.locator(`a[href^="/lightning/o/Individual/home"]`).click();
   await page.locator(`a[title*="New"]`).click();
   await page.locator(`input[placeholder*="Last Name"]`).fill("Mark");
   await page.locator(`button[title="Save"]`).click();
   await page.waitForSelector(`div[title*="Mark"]`);
   const title = await page.title();    //Getting the individual title using title function
   console.log(title);

   if (title === "Mark | Salesforce"){   //Matching the title retrieved using title function with value
            console.log(`Individuals is created successfully!!!`); //Print this when individual is created
    } else {
        console.log(`Individuals is not created.`); //Print this when individual is not created
        
    }
   await page.waitForTimeout(2000);
})