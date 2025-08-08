import { expect, test } from "@playwright/test";

test (`Create Account-SalesForce Assignment`,async({page}) => {

await page.goto(`https://login.salesforce.com/?locale=in`);
await page.getByLabel("Username").fill("ravindran.ramdas@testleaf.com"); //Enter Username by Label
await page.getByLabel("Password").fill("RaviSalesTest#1432");   //Enter Passowrd by Label
await page.locator(`#Login`).click();
await page.waitForTimeout(2000);
const url = await page.url();
console.log(`Url of the page open is ${url}`);
await page.waitForTimeout(2000);
await expect(page).toHaveURL(/.*lightning\/setup\/SetupOneHome\/home/); //Verifying the page usl using toHaveUrl page assertion
const title = await page.title();
console.log(`Title of the page is: ${title}`);
await expect(page).toHaveTitle("Home | Salesforce");    //Verified title
await page.waitForSelector(`//button[@class="slds-button slds-context-bar__button slds-icon-waffle_container slds-show"]`);
await page.locator(`//button[@class="slds-button slds-context-bar__button slds-icon-waffle_container slds-show"]`).click(); //Clicked App Launcher using class locator
await page.getByText("View All").isVisible();
await page.getByText("View All").click();   //Clicked "View All" using by text method
await page.getByPlaceholder("Search apps or items...").isVisible();
await page.getByPlaceholder("Search apps or items...").fill("Service"); //Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
await expect(page.locator(`(//a[@class="slds-text-heading_small"])[1]`)).toBeEnabled();
await page.locator(`(//a[@class="slds-text-heading_small"])[1]`).click();   //Click Service using index based XPath. Always taking time to load the element
await page.getByText("Quarterly Performance").isVisible();
await page.locator(`//a[@title="Accounts"]`).click();   //Used attribute css selector to click account
await page.getByRole("button",{name: "New"}).click(); //Clicked new button using get by Role
await page.locator(`//input[@name="Name"]`).fill("BG PTY"); //Used attribute css selector
await page.locator(`//button[(text()="Save")]`).click(); //Used xpath to click save button
await page.locator(`//div[@role="status" and contains(text(), "Success notification..")]`).isVisible(); //Verified the toast message

await page.waitForTimeout(2000);


});