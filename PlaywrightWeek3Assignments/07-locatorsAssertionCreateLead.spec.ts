//07-locatorsAssertionCreateLead.spec.ts

import { expect } from "playwright/test";
import {test } from "./fixtures";

test(`Create Lead - Locators & Assertion`,async({loggedInPage}) => { 

   const url = loggedInPage.url();
   console.log(`Url of the page open is ${url}`);
   await loggedInPage.waitForSelector(`#label`);
   await loggedInPage.locator(`#label`).click();
   await loggedInPage.locator(`a[href="/crmsfa/control/leadsMain"]`).click();
   await loggedInPage.locator(`a[href="/crmsfa/control/createLeadForm"]`).click();
   await loggedInPage.locator(`#createLeadForm_companyName`).fill("BG Pty");
   await loggedInPage.locator(`#createLeadForm_firstName`).fill("BG");
   await loggedInPage.locator(`#createLeadForm_lastName`).fill("Test");
   await loggedInPage.locator(`#createLeadForm_personalTitle`).fill("Mr.");
   await loggedInPage.locator(`#createLeadForm_generalProfTitle`).fill("Software");
   await loggedInPage.locator(`#createLeadForm_annualRevenue`).fill("123123");
   await loggedInPage.locator(`#createLeadForm_departmentName`).fill("Insurance Provider");
   await loggedInPage.selectOption(`//select[@id="createLeadForm_currencyUomId"]`,{value:"AUD"}); 
   await loggedInPage.locator(`#createLeadForm_primaryPhoneCountryCode`).clear();
   await loggedInPage.locator(`#createLeadForm_primaryPhoneCountryCode`).fill("61");
   await loggedInPage.locator(`#createLeadForm_primaryPhoneNumber`).fill("123456789");
   await loggedInPage.locator(`.smallSubmit`).click();
   await loggedInPage.waitForSelector(`#sectionHeaderTitle_leads`);

   const status = await expect(loggedInPage.locator(`//span[@id="viewLead_statusId_sp"]`)).toHaveText("Assigned"); //Verifying the lead is created using Generic assertion. 
   const status1 = await loggedInPage.locator(`//span[@id="viewLead_statusId_sp"]`).isVisible(); //Verified status is visible using generic assertion
   console.log(status1);
   
   if (status1){   
            console.log(`Lead is created successfully!!!`); //Print this if isVisible returns true when lead is created successfully
    } else {
        console.log(`Lead is not created.`);    //Print this if isVisible returns false when lead is not created 
        
    } 

   await loggedInPage.waitForTimeout(2000);

})