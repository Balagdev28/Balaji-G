import { expect } from "playwright/test";
import {test } from "./fixtures";

test(`Edit Lead - Locators & Assertion`,async({loggedInPage}) => { 

   const url = loggedInPage.url();
   console.log(`Url of the page open is ${url}`);
   await loggedInPage.waitForSelector(`#label`);
   await loggedInPage.locator(`#label`).click();
   await loggedInPage.locator(`a[href="/crmsfa/control/leadsMain"]`).click();
   await loggedInPage.locator(`//a[text()="Find Leads"]`).click();
   await loggedInPage.locator(`(//input[@name="firstName"])[3]`).fill("BG");
   await loggedInPage.locator(`//button[@id="ext-gen334"]`).click();
   await loggedInPage.locator(`(//td//a[@class="linktext"])[1]`).click();
   await expect(loggedInPage.locator(`//span[@id="viewLead_statusId_sp"]`)).toHaveText("Assigned"); //Verifying the lead is created using Generic assertion. 
   await loggedInPage.locator(`//*[@class="subMenuButton" and text()="Edit"]`).click();
   await loggedInPage.waitForTimeout(2000);
   await loggedInPage.locator(`#updateLeadForm_companyName`).fill("BG Pty Ltd");
   await loggedInPage.locator(`#updateLeadForm_annualRevenue`).fill("21245");
   await loggedInPage.locator(`#updateLeadForm_departmentName`).fill("Commercial Insurance Provider");
   await loggedInPage.locator(`#updateLeadForm_description`).fill("Lead has been edited updated with new details");
   await loggedInPage.locator(`//input[@class="smallSubmit" and @value="Update"]`).click();

   const status = await expect(loggedInPage.locator(`//span[@id="viewLead_statusId_sp"]`)).toHaveText("Assigned"); //Verifying the lead is created using Generic assertion. 
   const status1 = await loggedInPage.locator(`//span[@id="viewLead_statusId_sp"]`).isVisible(); //Verified status is visible using generic assertion
   console.log(status1);
   
   if (status1){   
            console.log(`Lead has been updated successfully!!!`); //Print this if isVisible returns true when lead is updated successfully
    } else {
        console.log(`Lead is not updated.`);    //Print this if isVisible returns false when lead is not updated 
        
    } 

   await loggedInPage.waitForTimeout(2000);


})