//03-windowHandlingLeafPrmsAll.spec.ts

import { chromium, expect, test } from "@playwright/test";

test(`Window Handling(Assignment using Promise all) in Leaftaps`,async({context, page}) => { 

   await page.goto(`http://leaftaps.com/opentaps/contorl/main`);
   const url = page.url();
   console.log(`Url of the page open is ${url}`);
   await page.locator(`#username`).fill(`demoSalesManager`);
   await page.locator(`#password`).fill(`crmsfa`);
   await page.locator(`.decorativeSubmit`).click();
   await page.waitForSelector(`#label`);
   await page.locator(`#label`).click();
   await page.locator(`//a[text()="Leads"]`).click();
   await page.locator(`//a[text()="Merge Leads"]`).click();

   const [newChld] = await Promise.all([
        context.waitForEvent('page'),
        page.locator(`(//a[contains(@href, 'LookupLeads')])[1]`).click()
        ]);
   
   const fromLeadPage = context.pages();     //handling the promise for new page
   const fromLeadPageTitle = await newChld.title();
   console.log(`From lead page tilte is: ${fromLeadPageTitle}`);
   await newChld.waitForLoadState('domcontentloaded');

   await newChld.locator(`//input[@name="firstName"]`).fill("Test");
   await newChld.locator(`//button[text()="Find Leads"]`).click();
   await newChld.locator(`//a[@class="linktext" and text()="11222"]`).click();

   await page.bringToFront();       //Bring focus to main page
   await page.waitForLoadState('domcontentloaded');
   await page.keyboard.press('Tab');
   await expect(page.locator(`//input[@name="ComboBox_partyIdFrom"]`)).toHaveAttribute('valuenow','11222');

   const [newChld1] = await Promise.all([
        context.waitForEvent('page'),
        page.locator(`(//a[contains(@href, 'LookupLeads')])[2]`).click(),
        ]);

   const toLeadPage = context.pages();     //handling the promise for new page
   const toLeadPageTitle = await newChld1.title();
   console.log(`From lead page tilte is: ${toLeadPageTitle}`);
   await newChld1.waitForLoadState('domcontentloaded');

   await newChld1.locator(`//input[@name="lastName"]`).fill("Test");
   await newChld1.locator(`//button[text()="Find Leads"]`).click();
   await newChld1.locator(`//a[@class="linktext" and text()="10631"]`).click();
   
   await page.bringToFront();       //Bring focus to main page
   await page.waitForLoadState('domcontentloaded');
   await page.keyboard.press('Tab');
   await expect(page.locator(`//input[@name="ComboBox_partyIdTo"]`)).toHaveAttribute('valuenow','10631');

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

   await page.locator(`//a[text()="Merge"]`).click();

   await page.waitForTimeout(3000);
   //await page.locator(`//a[text()="Merge"]`).click();
   await page.locator(`//div[@id="sectionHeaderTitle_leads"]`).isVisible();
   await expect(page).toHaveTitle("View Lead | opentaps CRM");
   console.log(`Page title assertion ${page.title()}`);
   

})