//09-Data-Parameterization-ENVAssignment1.spec.ts

import { expect,test } from "playwright/test";
import dotenv from "dotenv";

const datasets = [
  {
  TCaseId: process.env.TCaseId_1,
    CompanyName: process.env.CompanyName_1,
    FirstName: process.env.FirstName_1,
    LastName: process.env.LastName_1,
    Salutation: process.env.Salutation_1,
    Profile: process.env.Profile_1,
    Source: process.env.Source_1,
    MarketingCampaign: process.env.MarketingCampaign_1,
    Industry: process.env.Industry_1,
    Currency: process.env.Currency_1,
    Country: process.env.Country_1,
    State: process.env.State_1
  },
  {
     TCaseId: process.env.TCaseId_2,
    CompanyName: process.env.CompanyName_2,
    FirstName: process.env.FirstName_2,
    LastName: process.env.LastName_2,
    Salutation: process.env.Salutation_2,
    Profile: process.env.Profile_2,
    Source: process.env.Source_2,
    MarketingCampaign: process.env.MarketingCampaign_2,
    Industry: process.env.Industry_2,
    Currency: process.env.Currency_2,
    Country: process.env.Country_2,
    State: process.env.State_2
  }
];

dotenv.config({path:`TestData/CreateLeadTD1.env`});
test.describe.serial("Create lead by reading data from ENV using serial mode",async() => {
for (let i = 0; i < datasets.length; i++) {
    const data = datasets[i];
test(`Create Lead - Data Parameterization env1: ${data.TCaseId}`,async({page}) => { 
    
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
   await page.locator(`#createLeadForm_companyName`).fill(data.CompanyName as string);
   await page.locator(`#createLeadForm_firstName`).fill(data.FirstName as string);
   await page.locator(`#createLeadForm_lastName`).fill(data.LastName as string);
   await page.locator(`#createLeadForm_personalTitle`).fill(data.Salutation as string);
   await page.locator(`#createLeadForm_generalProfTitle`).fill(data.Profile as string)
   await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{label:data.Source});
   await page.selectOption(`//select[@id="createLeadForm_marketingCampaignId"]`,{value:data.MarketingCampaign});
   const marketCampn = page.locator(`#createLeadForm_marketingCampaignId>option`);
  const marketCampnCount =await marketCampn.count();

  console.log(`No. of values in the Marketing Campaign dropdown: ${marketCampnCount}`); // Print the total count in Marketing Campaign

  for (let index = 0; index < marketCampnCount; index++) {
    console.log(await marketCampn.nth(index).innerText());// Print all the Marketing Campaign values
  }
  await page.selectOption(`//select[@id="createLeadForm_industryEnumId"]`,{index: Number(data.Industry)});
   await page.selectOption(`//select[@id="createLeadForm_currencyUomId"]`,{value:data.Currency}); 
  await page.selectOption(`//select[@id="createLeadForm_generalCountryGeoId"]`,{value:data.Country}); 
  await page.selectOption(`//select[@id="createLeadForm_generalStateProvinceGeoId"]`,{value:data.State}); 

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