import { chromium, expect, test } from "@playwright/test";

test(`Window Handling(Assignment) in Leaftaps`,async({context, page}) => { 

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
   
   const fromLead = context.waitForEvent('page');       //wait for new page event
   await page.locator(`(//a[contains(@href, 'LookupLeads')])[1]`).click();
   const fromLeadPage = await fromLead;     //handling the promise for new page
   const fromLeadPageTitle = await fromLeadPage.title();
   console.log(`From lead page tilte is: ${fromLeadPageTitle}`);
   await fromLeadPage.waitForLoadState('domcontentloaded');

   await fromLeadPage.locator(`//input[@name="firstName"]`).fill("BG");
   await fromLeadPage.locator(`//button[text()="Find Leads"]`).click();
   await fromLeadPage.locator(`//a[@class="linktext" and text()="11122"]`).click();


   await page.bringToFront();       //Bring focus to main page
   await page.waitForLoadState('domcontentloaded');
   await page.keyboard.press('Tab');
   await expect(page.locator(`//input[@name="ComboBox_partyIdFrom"]`)).toHaveAttribute('valuenow','11122');

   const toLead = context.waitForEvent('page');     //wait for new page event
   await page.locator(`(//a[contains(@href, 'LookupLeads')])[2]`).click();
   const toLeadPage = await toLead;     //handling the promise for new page
   const toLeadPageTitle = await toLeadPage.title();
   console.log(`From lead page tilte is: ${toLeadPageTitle}`);
   await toLeadPage.waitForLoadState('domcontentloaded');

   await toLeadPage.locator(`//input[@name="lastName"]`).fill("Test");
   await toLeadPage.locator(`//button[text()="Find Leads"]`).click();
   await toLeadPage.locator(`//a[@class="linktext" and text()="11132"]`).click();
   
   await page.bringToFront();       //Bring focus to main page
   await page.waitForLoadState('domcontentloaded');
   await page.keyboard.press('Tab');
   await expect(page.locator(`//input[@name="ComboBox_partyIdTo"]`)).toHaveAttribute('valuenow','11132');

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