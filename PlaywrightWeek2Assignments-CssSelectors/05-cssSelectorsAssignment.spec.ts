import { chromium, test } from "@playwright/test";

test(`Create Lead`,async({page}) => { //used page fixture to launch browser

   await page.goto(`https://login.salesforce.com/?locale=in`);
   const url = page.url();
   console.log(`Url of the page open is ${url}`);
   await page.locator(`#username`).fill(`ravindran.ramdas@testleaf.com`);
   await page.locator(`#password`).fill(`RaviSalesTest#1432`);
   await page.locator(`#Login`).click();
   await page.waitForTimeout(3000);
   //await page.waitForSelector(`button[title^="App Launcher"`);
   await page.locator(`button[title^="App Launcher"]`).click();
   await page.waitForSelector(`h2[class="slds-text-heading_small title"]`);
   await page.locator(`button[aria-label^="View All Applications"]`).click();
   await page.waitForTimeout(2000);
   await page.locator(`input[placeholder="Search apps or items..."]`).fill('Sales');
   await page.waitForSelector(`h2[class="slds-text-heading--medium slds-p-horizontal--large slds-p-bottom--large"]`);
   await page.waitForSelector(`span[title="All Apps"]`);
   await page.locator(`a[href="/lightning/app/06mNS0000017DrhYAE"]`).click();
   await page.locator(`a[title="Leads"]`).click();
   await page.locator(`div[title="New"]`).click();
   await page.waitForSelector(`h2[class="slds-modal__title slds-hyphenate slds-text-heading--medium"]`);
   await page.locator(`button[name="salutation"]`).click();
   await page.waitForSelector(`button[name="salutation"]`);
   await page.getByRole('option', {name: "Mr."}).click(); //Selected salutation 'Mr' using getByRole
   await page.locator(`input[name="lastName"]`).fill("BGTest1B");
   await page.locator(`input[name="Company"]`).fill("BGComp Pty Ltd");
   await page.locator(`button[name="SaveEdit"]`).click();
   await page.waitForSelector(`lightning-formatted-name[slot="primaryField"]`);
   const title1 = await page.locator('p[title="Company"]').isVisible(); //Verifying title is visible after lead creation using isVisible function
   console.log(title1);

   if (title1){  
        console.log(`Lead is created successfully!!!`); //Print this messsage when isVisible returns true
    } else {
        console.log(`Lead is not created.`);    //Print this messsage when isVisible returns false
        
    }
   await page.waitForTimeout(2000);
})