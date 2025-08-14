import { expect, test } from "@playwright/test";

test (`Create and verify a New Case in Chatter`,async({page}) => {

    
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
await page.locator(`//a[@title="Cases"]`).click();
await page.locator(`//div[@title="New"]`).click();
await page.getByPlaceholder("Search Contacts...").click();
await page.locator(`//*[@data-value="actionCreateNew"]`).click();
await page.locator(`//button[@aria-label="Salutation"]`).click();
await page.locator(`//*[@data-value="Mr."]`).click();
await page.getByPlaceholder("First Name").fill("Gary");
await page.getByPlaceholder("Last Name").fill("Taylor");
await page.locator(`//button[@name="SaveEdit" and text()="Save"]`).nth(1).click();
await expect(page.locator(`//div[@role="status" and contains(text(), "Success notification.")]`)).toBeVisible(); //Verified the toast message
await page.locator(`(//div[@part="input-container"]/input[@placeholder="Search Accounts..."])[1]`).click();
await page.locator(`//ul[@aria-label="Recent Accounts"]/following-sibling::lightning-base-combobox-item[@data-value="actionCreateNew"]`).click();
await page.locator(`//input[@name="Name"]`).fill("Gary T");
await page.locator(`//input[@name="AccountNumber"]`).fill("123124");
await page.locator(`//div[@role="none"]/button[@aria-label="Rating"]`).click();
await page.locator(`//span[@title="Hot"]`).click();
await page.locator(`//button[@name="SaveEdit" and text()="Save"]`).nth(1).click();
await expect(page.locator(`//div[@role="status" and contains(text(), "Success notification.")]`)).toBeVisible();
await page.locator(`//div/button[@aria-label="Status"]`).click();

await page.locator(`//lightning-base-combobox-item//span[@title="New"]`).click();
await page.locator(`//div[@role="none"]//button[@aria-label="Priority"]`).click();
await page.locator(`//span[@title="High"]`).click();
await page.locator(`//div[@role="none"]//button[@aria-label="Case Origin"]`).click();
await page.locator(`//span[@title="Email"]`).click();
await page.locator(`//input[@name="Subject"]`).fill("Product Return Request");
await page.locator(`.slds-textarea`).first().fill("Requesting a return for a defective product");
await page.locator(`//button[@name="SaveEdit"]`).click();
await expect(page.locator(`//div[@role="status" and contains(text(), "Success notification.")]`)).toBeVisible(); //Verified the toast message
await page.locator(`//button[@name="Edit"]`).click();
await page.locator(`//div/button[@aria-label="Status"]`).click();
await page.locator(`//lightning-base-combobox-item//span[@title="Escalated"]`).click();
await page.locator(`//button[@name="SaveEdit"]`).click();

await page.locator(`//span[text()="Share an update..."]`).click();
await page.locator(`//div[@data-placeholder="Share an update..."]`).fill("Case has been escalated.");
await page.locator(`//button[@title="Click, or press Ctrl+Enter"]`).click();

await page.locator(`(//div[@class="cuf-media-right forceChatterOverflowActionMenu uiMenu"]/a)[1]`).click();
await page.locator(`//a[@role="menuitem"]/span[text()="Like on Chatter"]`).click();
await expect(page.locator(`//div[@role="status" and contains(text(), "Success notification.")]`)).toBeVisible(); //Verified the toast message
await page.locator(`//a[@title="Chatter"]`).click();
await expect(page.locator(`(//span[text()="Case has been escalated."])[2]`)).toBeVisible();


await page.waitForTimeout(2000);


});
