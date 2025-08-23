import { expect, test } from "@playwright/test";

test.only(`Windows Handling class room activity`, async({context, page})=>
{
    await page.goto(`https://login.salesforce.com/`);
    await page.locator(`#username`).fill("ravindran.ramdas@testleaf.com");
    await page.locator(`#password`).fill("RaviSalesTest#1432");
    await page.locator(`#Login`).click();

    const newPage =  context.waitForEvent('page');
    await page.locator(`//button[@title=": Mobile Publisher"]`).click();
    const newCld = await newPage;
    const pageTitle = newCld.title();
    console.log(`Title of the page is: ${pageTitle}`); 
    await page.waitForLoadState('domcontentloaded');
    
    await newCld.locator(`//button[contains(text(),"Confirm")]`).click();
    
    const pageTitle1 = await newCld.title();
    console.log(`Title of the page is: ${pageTitle1}`);
    expect(await newCld.getByTitle("Service Cloud: AI-powered Customer Service Agent Console | Salesforce US",{exact:true}));
    await expect(newCld).toHaveURL('https://www.salesforce.com/service/cloud/');
     
    await page.waitForTimeout(2000);

})

