import { chromium, test } from "@playwright/test";

test(`Edit Leads in Leaftaps`,async({page}) => { 

   await page.goto(`http://leaftaps.com/opentaps/contorl/main`);
   const url = page.url();
   console.log(`Url of the page open is ${url}`);
   await page.locator(`#username`).fill(`democsr`);
   await page.locator(`#password`).fill(`crmsfa`);
   await page.locator(`.decorativeSubmit`).click();
   await page.waitForSelector(`#label`);
   await page.locator(`#label`).click();
   await page.locator(`a[href="/crmsfa/control/leadsMain"]`).click();
   await page.locator(`a[href="/crmsfa/control/createLeadForm"]`).click();
   await page.locator(`#createLeadForm_companyName`).fill("BG Pty");
   await page.locator(`#createLeadForm_firstName`).fill("BG");
   await page.locator(`#createLeadForm_lastName`).fill("Test");
   await page.locator(`.smallSubmit`).click();
   await page.waitForSelector(`#sectionHeaderTitle_leads`);
   const status = await page.locator('#sectionHeaderTitle_leads').isVisible(); //Verifying the lead is created and visible. 
   console.log(status);
   
   if (status){   
            console.log(`Lead is created successfully!!!`); //Print this if isVisible returns true when lead is created successfully
    } else {
        console.log(`Lead is not created.`);    //Print this if isVisible returns false when lead is not created 
        
    } 

    await page.waitForSelector(`#sectionHeaderTitle_leads`);
    await page.locator(`a[class="subMenuButton"]`).nth(2).click(); //Used nth function with class locator to click the edit button 
    await page.waitForSelector(`#sectionHeaderTitle_leads`);
    await page.locator(`#updateLeadForm_companyName`).fill("BG Pty Ltd"); //Updating the comnpany name
    await page.locator(`input[name="submitButton"]`).nth(0).click();
    await page.waitForSelector(`#viewLead_companyName_sp`);
    
    const leadUpdate = await page.locator(`#viewLead_companyName_sp`).isVisible(); //Verifying the updated company isVisible. 
     if (leadUpdate){   
            console.log(`Lead is Updated successfully!!!`); //Print this if isVisible returns true when lead is updated successfully
    } else {
        console.log(`Lead is not updated.`); //Print this if isVisible returns false when lead is not updated
        
    } 

   await page.waitForTimeout(2000);

})