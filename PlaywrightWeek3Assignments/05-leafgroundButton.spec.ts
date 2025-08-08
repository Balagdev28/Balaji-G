import { expect, test } from "@playwright/test";

test(`Leafground Button Assignment`,async({page}) => {

await page.goto(`https://leafground.com/button.xhtml`);
const pgTitle = await page.title();
console.log(`Page title is: ${pgTitle}`);
await page.locator(`//button[@id="j_idt88:j_idt90"]`).click();
await expect(page).toHaveTitle("Dashboard");

const pgTitle1 = await page.title();
console.log(`Page title is: ${pgTitle1}`);

await page.waitForTimeout(2000);
await page.goto(`https://leafground.com/button.xhtml`);
await expect(page.locator(`//button[@id='j_idt88:j_idt92' and @disabled='disabled']`)).toBeDisabled();
console.log(`Button is disabled`);
await page.locator(`//button[@id="j_idt88:j_idt102:imageBtn"]`).click();

const hiddenBtn = await page.locator(`//*[@id="j_idt88:j_idt102:j_idt104"]`); //Clicked on image button
await expect(hiddenBtn).toBeVisible();  //Used locator assertion to make sure is visible
await hiddenBtn.click();

const roundBtn = await page.locator(`//div[@class="card"]/h5[text()="How many rounded buttons are there?"]/following::button`);
const roundBtnCount = await roundBtn.count();
console.log(`Round button count is: ${roundBtnCount}`);

for (let index = 0; index < roundBtnCount; index++) {
    console.log(await roundBtn.nth(index).innerText());
    
}

await page.waitForTimeout(2000);
})