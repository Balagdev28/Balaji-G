import { expect, test } from "@playwright/test";

test(`Leafground wait Assignment`,async({page}) => {

await page.goto(`https://leafground.com/waits.xhtml`);
await page.locator(`//button[@id="j_idt87:j_idt89"]`).click();
await expect(page.locator(`//span[contains(text(), "I am here")]`)).toBeVisible({timeout: 10000}); //Verifed button is enabled after 10 secs using timeout wait in tobevisible function
await page.locator(`//button[@id="j_idt87:j_idt90"]`).click();

await page.waitForTimeout(2000);

await expect(page.locator(`//button[@id="j_idt87:j_idt93"]`)).toBeVisible();
await page.locator(`//button[@id="j_idt87:j_idt92"]`).click();
await expect(page.locator(`//button[@id="j_idt87:j_idt93"]`)).toBeHidden({timeout: 10000}); //Used to be hidden function to verify button inside is hidden

await page.waitForTimeout(2000);
await page.locator(`//button[@id="j_idt87:j_idt95"]`).click();

const chkNtfn = await page.locator(`//span[@class ="ui-growl-title"][contains(text(), "Message")]`).nth(0);
await expect(chkNtfn).toBeVisible();
await expect(chkNtfn).toHaveText('Message 1'); //Verified message text after the click using generic assertion
await expect(page.locator(`//button[@id="j_idt87:j_idt96"]`)).toBeEnabled(); //Verified button is enabled to click using locator assertion
await page.locator(`//button[@id="j_idt87:j_idt96"]`).click(); //Performed click operation in second button

const textChng = await page.locator(`//span[contains(text(),"I am going to change!")]`); 
await expect(textChng).toHaveText("I am going to change!");     //Verified button text before the click using generic assertion
await page.locator(`//button[@id="j_idt87:j_idt98"]`).click();
await page.waitForSelector(`//span[contains(text(),"Did you notice?")]`);
await expect(page.locator(`//span[contains(text(),"Did you notice?")]`)).toHaveText("Did you notice?"); //Verified button text after the click using generic assertion

await page.waitForTimeout(2000);

})