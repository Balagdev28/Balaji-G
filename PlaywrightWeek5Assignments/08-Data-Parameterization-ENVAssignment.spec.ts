//08-Data-Parameterization-ENVAssignment.spec.ts

import { expect,test } from "playwright/test";
import dotenv from "dotenv";

dotenv.config({path:`TestData/CreateLeadTD.env`});
test(`Create Lead - Data Parameterization env: ${process.env.TCaseId}`,async({page}) => { 
    
    await page.goto(`http://leaftaps.com/opentaps/contorl/main`)
   const url = page.url();
   console.log(`Url of the page open is ${url}`);
   await page.locator(`#username`).fill(`demoSalesManager`);
   await page.locator(`#password`).fill(`crmsfa`);
   await page.locator(`.decorativeSubmit`).click();
   await page.waitForSelector(`#label`);
   await page.locator(`#label`).click();
   await page.locator(`a[href="/crmsfa/control/leadsMain"]`).click();
   await page.locator(`a[href="/crmsfa/control/createLeadForm"]`).click();
   await page.locator(`#createLeadForm_companyName`).fill(process.env.CompanyName as string);
   await page.locator(`#createLeadForm_firstName`).fill(process.env.FirstName as string);
   await page.locator(`#createLeadForm_lastName`).fill(process.env.LastName as string);
   await page.locator(`#createLeadForm_personalTitle`).fill(process.env.Salutaion as string);
   await page.locator(`#createLeadForm_generalProfTitle`).fill(process.env.Profile as string)
   await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{label:process.env.Source});
   await page.selectOption(`//select[@id="createLeadForm_marketingCampaignId"]`,{value:process.env.MarketingCampaign});
   const marketCampn = page.locator(`#createLeadForm_marketingCampaignId>option`);
  const marketCampnCount =await marketCampn.count();

  console.log(`No. of values in the Marketing Campaign dropdown: ${marketCampnCount}`); // Print the total count in Marketing Campaign

  for (let index = 0; index < marketCampnCount; index++) {
    console.log(await marketCampn.nth(index).innerText());// Print all the Marketing Campaign values
  }
  await page.selectOption(`//select[@id="createLeadForm_industryEnumId"]`,{index: Number(process.env.Industry)});
   await page.selectOption(`//select[@id="createLeadForm_currencyUomId"]`,{value:process.env.Currency}); 
  await page.selectOption(`//select[@id="createLeadForm_generalCountryGeoId"]`,{value:process.env.Country}); 
  await page.selectOption(`//select[@id="createLeadForm_generalStateProvinceGeoId"]`,{value:process.env.State}); 

  const state = page.locator(`#createLeadForm_generalStateProvinceGeoId>option`);
  const stateCount =await state.count();

  console.log(`No. of values in the Currency dropdown: ${stateCount}`); // Print the total count in state

  for (let index = 0; index < stateCount; index++) {
    console.log(await state.nth(index).innerText());// Print all the values in state dropdown
  }

   await page.locator(`.smallSubmit`).click();
   await page.waitForSelector(`#sectionHeaderTitle_leads`);

   const status = await expect(page.locator(`//span[@id="viewLead_statusId_sp"]`)).toHaveText("Assigned"); //Verifying the lead is created using Generic assertion. 
   const status1 = await page.locator(`//span[@id="viewLead_statusId_sp"]`).isVisible(); //Verified status is visible using generic assertion
   console.log(status1);
   
   if (status1){   
            console.log(`Lead is created successfully!!!`); //Print this if isVisible returns true when lead is created successfully
    } else {
        console.log(`Lead is not created.`);    //Print this if isVisible returns false when lead is not created 
        
    } 

   await page.waitForTimeout(2000);

})

