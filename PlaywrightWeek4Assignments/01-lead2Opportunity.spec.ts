import { expect, test } from "@playwright/test";

test (`Lead to Opportunity`,async({page}) => {

    
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
await page.getByPlaceholder("Search apps or items...").fill("Marketing"); //Enter Marketing in the App Launcher Search box using getByPlaceHolder
//await expect(page.locator(`//a[@class="slds-text-heading_small"]`)).toBeEnabled();
await page.locator(`//p[contains(text()," CRM Classic")]`).click();   //Click Service using index based XPath. Always taking time to load the element
await page.locator(`//a[@title="Leads"]/span`).click();
await page.locator(`//div[@title="New"]`).click();
await page.locator(`//button[@aria-label="Salutation"]`).click();
await page.locator(`//*[@data-value="Mr."]`).click();
await page.getByPlaceholder("First Name").fill("Mark");
await page.getByPlaceholder("Last Name").fill("Henry1");
await page.locator(`//input[@name="Company"]`).fill("TLeaf Pty");
await page.locator(`//button[@name="SaveEdit"]`).click();
await page.locator(`//div[@role="status" and contains(text(), "Success notification.")]`).isVisible(); //Verified the toast message
await page.locator(`(//li[@role="presentation"]//button[@type="button"])[4]`).click();
await page.locator(`//a[@role="menuitem"]/span[text()="Convert"]`).click();
await page.locator(`(//button[@class="slds-button transparentButton"])[3]`).click();
await page.locator(`(//input[@class=" input"])[4]`).clear();
await page.locator(`(//input[@class=" input"])[4]`).fill("BG1 PTY");
await page.locator(`//button[@class="slds-button slds-button_brand"]`).click();
await expect(page.locator(`//h2[text()="Your lead has been converted"]`)).toBeVisible();
await page.locator(`//button[@class="slds-button slds-button_brand"]`).click();
await page.getByPlaceholder("Search this list...").fill("Mark Henry1");
await expect(page.locator(`//h3[text()="Nothing to see here"]`)).toBeVisible();
await page.locator(`//a[@title="Opportunities"]`).click();
await page.getByPlaceholder("Search this list...").fill("BG1 PTY");
await page.locator(`//a[@title="BG PTY"]`).click();
await expect(page.locator(`//lightning-formatted-text[text()="BG1 PTY"]`)).toBeVisible();


await page.waitForTimeout(2000);


});