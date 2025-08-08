import { expect, test } from "@playwright/test";

test(`Leafground Checkbox Assignment`,async({page}) => {

await page.goto(`https://leafground.com/checkbox.xhtml`);

await page.locator(`//span[text()="Basic"]/preceding::div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default"]`).click(); //input type 'check box' is hidden so used click option
await page.waitForTimeout(2000);
await page.waitForSelector(`//span[text()="Ajax"]/parent::div//div[contains(@class, "ui-chkbox-box")]`);
await page.locator(`//span[text()="Ajax"]/parent::div//div[contains(@class, "ui-chkbox-box")]`).click();
await page.waitForSelector(`.ui-growl-title`);
const chkNtfn = await page.locator(`.ui-growl-title`);
await expect(chkNtfn).toBeVisible();
await expect(chkNtfn).toHaveText('Checked');
await page.waitForTimeout(2000);

await page.waitForSelector(`(//label[text()="Java"]/preceding::div[contains(@class, "ui-chkbox-box")])[3]`);
await page.locator(`(//label[text()="Java"]/preceding::div[contains(@class, "ui-chkbox-box")])[3]`).click();
await page.waitForTimeout(2000);
//await page.waitForSelector(`//span[@class="ui-chkbox-icon ui-c"]/parent::div[contains(@class, "ui-chkbox-box")]`);
await page.locator(`//div[@id="j_idt87:ajaxTriState"]/div[contains(@class, "ui-chkbox-")]`).click();

const triState = await page.locator(`(//span[@class="ui-growl-title"])[1]`);
await expect(triState).toBeVisible();
await expect(triState).toHaveText('State has been changed.'); //Used generic 'toHavetext' assertion

await page.waitForTimeout(2000);
await page.locator(`.ui-toggleswitch-slider`).click();
//await expect(page.locator(`.ui-toggleswitch-slider`)).toBeChecked();
const toggleSt = await page.locator(`//span[@class="ui-growl-title"]`);
await expect(toggleSt.filter({hasText:'Checked'})).toBeVisible();  //Used filter function with has text verification for strict mode-Locator assertion
await page.waitForTimeout(2000);
await expect(page.locator(`//div[contains(@class, "ui-state-disabled")]/preceding::input[@id="j_idt87:j_idt102_input"]`)).toBeDisabled(); //Verified the check box is disabled using locator assertion

await page.locator(`//ul[@data-label="Cities"]`).click();   //Selecting multiple option by using locator
await page.locator(`//li[@data-item-value="London"]/div[@class="ui-chkbox ui-widget"]`).click();
await page.locator(`//li[@data-item-value="Paris"]/div[@class="ui-chkbox ui-widget"]`).click();
await page.locator(`//li[@data-item-value="Rome"]/div[@class="ui-chkbox ui-widget"]`).click();
await page.waitForTimeout(2000);
await page.locator(`//ul[@data-label="Cities"]`).click(); //clicked again to move out of the element

const pageTitle = await page.title();
console.log(`Page title is: ${pageTitle}`);
await expect(page).toHaveTitle("CheckBox Components"); //Verified page title using page assertion

await page.waitForTimeout(3000);


})