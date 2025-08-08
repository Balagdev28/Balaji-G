import {expect, test} from "@playwright/test"
test(`Radio Button Selection`, async({page}) =>{

await page.goto(`https://leafground.com/radio.xhtml`);
const defaultRb = page.locator(`//input[@id="j_idt87:console2:2"]`);
await expect(defaultRb).toBeChecked();      //identified and asserted the default selected option

await page.waitForTimeout(2000);
const favBrwsr = await page.locator(`(//div[@class="ui-radiobutton-box ui-widget ui-corner-all ui-state-default"])[9]`); 
await expect(favBrwsr).toBeEnabled();   //identified most favorite brower using wrapper method as <input> is hidden
await favBrwsr.click();                 //click on Chrome option
await page.waitForTimeout(5000);
await expect(favBrwsr).toHaveClass(/.*ui-state-default*/);  //Assertion using Have class (Need to check as the status is returing default even after wait)

const cityButton = page.locator(`(//div[@class="ui-radiobutton-box ui-widget ui-corner-all ui-state-default"])[12]`);
await expect(cityButton).toBeEnabled(); //identified favorite city using wrapper method as <input> is hidden
await cityButton.click();   //click on Chennai option

const ageGroup = page.locator(`(//div[@class="ui-radiobutton-box ui-widget ui-corner-all ui-state-default ui-state-active"])[6]`);
await expect(ageGroup).toHaveClass(/.*ui-state-active.*/); //identified default age selection using wrapper method as <input> is hidden
                                                        //Assertion performed using HaveClass when the status of selection become active
await page.waitForTimeout(3000);
})