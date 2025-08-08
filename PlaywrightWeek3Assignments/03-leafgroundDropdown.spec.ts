
import {expect, test} from "@playwright/test"
test(`Drop down Selection`, async({page}) =>{

await page.goto(`https://leafground.com/select.xhtml`);
await page.selectOption(`//select[@class="ui-selectonemenu"]`,{index:2});
await page.waitForTimeout(3000);

const favTool = page.locator(`//select[@class="ui-selectonemenu"]/option`);
const favToolCount = await favTool.count();

console.log(`No. of option in favorite UI Automation tool is: ${favToolCount}`);

for (let index = 0; index < favToolCount; index++) {
   console.log(await favTool.nth(index).innerText());
    
}
await page.locator(`//label[@id="j_idt87:country_label"]`).click();   //Custom dropdown in div so used manuall locator and selected
await page.locator(`//li[@data-label="India"]`).click();
await page.waitForTimeout(2000);
await page.waitForSelector(`//label[text()='Select City']`);         //Custom dropdown in div so used manuall locator and selected
await page.locator(`(//span[@class="ui-icon ui-icon-triangle-1-s ui-c"])[2]`).click();
await page.locator(`//li[@data-label="Chennai"]`).click();
await page.waitForTimeout(2000);
//await page.getByPlaceholder('Choose Course').fill("AWS");
await page.locator(`//button[@type="button"]`).click();     //Custom dropdown in div so used manuall locator and selected
await page.locator(`//li[@data-item-label="AWS"]`).click();
await page.locator(`//button[@type="button"]`).click();
await page.locator(`//li[@data-item-label="Selenium WebDriver"]`).click();
await page.locator(`//button[@type="button"]`).click();
await page.locator(`//li[@data-item-label="Playwright"]`).click();
await page.waitForTimeout(3000);
await page.keyboard.press('Tab');   //Used tab out as sometimes custom dropdown is visible

await page.waitForSelector(`//label[text()='Select Language']`);
await page.locator(`//label[text()='Select Language']`).click();
await page.locator(`//li[@data-label="Tamil"]`).click();


const selectLang = await page.locator(`//select[@id="j_idt87:lang_input"]/option[not(text()="Select Language")]`); // Selected language option excluding default "Select Language" option tag
const countLang = await selectLang.count();

console.log(`List of Language in the dropdown is: ${countLang}`);

for (let index = 0; index < countLang; index++) {
  console.log(await selectLang.nth(index).innerText());
   
}
await page.waitForTimeout(3000);
await page.locator(`//label[@id="j_idt87:value_label"]`).click(); //Custom dropdown in div so used manuall locator and selected
await page.locator(`//li[@data-label="இரண்டு"]`).click();


await page.waitForTimeout(3000);
})