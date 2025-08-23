//07-Data-Parameterization-CSVAssignment.spec.ts

import { expect,test } from "playwright/test";
import {parse} from "csv-parse/sync";
import fs from "fs";

test.describe.serial(`Create Lead - Data Parameterization CSV in serial mode`,async () => {

let csvRecords1:any[] = parse(
    fs.readFileSync("TestData/CreateLeadTD.csv"),
    {columns:true,skip_empty_lines:true}
);

for (let datacsv of csvRecords1) {

test(`Create Lead - Data Parameterization CSV: ${datacsv.TCaseId}`,async({page}) => { 
    
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
   await page.locator(`#createLeadForm_companyName`).fill(datacsv.CompanyName);
   await page.locator(`#createLeadForm_firstName`).fill(datacsv.FirstName);
   await page.locator(`#createLeadForm_lastName`).fill(datacsv.LastName);
   await page.locator(`#createLeadForm_personalTitle`).fill(datacsv.Salutaion);
   await page.locator(`#createLeadForm_generalProfTitle`).fill(datacsv.Profile)
   await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{label:datacsv.Source});
   await page.selectOption(`//select[@id="createLeadForm_marketingCampaignId"]`,{value:datacsv.MarketingCampaign});
   const marketCampn = page.locator(`#createLeadForm_marketingCampaignId>option`);
  const marketCampnCount =await marketCampn.count();

  console.log(`No. of values in the Marketing Campaign dropdown: ${marketCampnCount}`); // Print the total count in Marketing Campaign

  for (let index = 0; index < marketCampnCount; index++) {
    console.log(await marketCampn.nth(index).innerText());// Print all the Marketing Campaign values
  }
  await page.selectOption(`//select[@id="createLeadForm_industryEnumId"]`,{index: Number(datacsv.Industry)});
   await page.selectOption(`//select[@id="createLeadForm_currencyUomId"]`,{value:datacsv.Currency}); 
  await page.selectOption(`//select[@id="createLeadForm_generalCountryGeoId"]`,{value:datacsv.Country}); 
  await page.selectOption(`//select[@id="createLeadForm_generalStateProvinceGeoId"]`,{value:datacsv.State}); 

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
}

})
