import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";
let token: any
let inst_url: any
let tokenType: any
let case_num:any

test.describe.serial(`Test Case in Serial mode`, async () => {

test(`Generate a token`, async ({ request }) => {

    const response_tk = await request.post("https://login.salesforce.com/services/oauth2/token",
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "grant_type": "password",
                "client_id": "",
                "client_secret": "",
                "username": "balagdev28385@agentforce.com",
                "password": ""
            }
        }


    )
    const responseBody = await response_tk.json()
    console.log(responseBody);
    console.log(response_tk.status());
    console.log(response_tk.statusText());


    token = responseBody.access_token
    inst_url = responseBody.instance_url
    tokenType = responseBody.token_type

})

test(`Create Contact via Playwright`, async ({page}) => {
     
    const fakeEmail = faker.internet.email();
    const fakefname = faker.internet.displayName();
    const fakelname = faker.internet.displayName();

    await page.goto(`https://login.salesforce.com/?locale=in`);

    await page.getByLabel("Username").fill("balagdev28385@agentforce.com"); // normal DOM interaction

    await page.getByRole("textbox",{name:"Password"}).fill("")// accessibility way of interacting with the web elements

    await page.getByRole("button",{name:"Log In"}).click();
    await page.waitForTimeout(3000);
    await page.waitForLoadState('domcontentloaded');

    await page.locator(`//a[span[text()='Contacts List']]`).click();
    await page.locator(`//a[@role="menuitem"]//span[(text()="New Contact")]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//button[@name="salutation"]`).click();
    await page.locator(`//span[@title="Mr."]`).click();
    await page.getByPlaceholder("First Name").fill(fakefname);
    await page.getByPlaceholder("Last Name").fill(fakelname);
    await page.getByRole('textbox', { name: 'Email' }).fill(fakeEmail);

    await page.getByPlaceholder("Search Accounts...").click();
    await page.locator(`//lightning-base-combobox-item[@role="option"]/span/span/span[text()="New Account"]`).click();
    await page.locator(`//input[@name="Name"]`).fill("Credits");
    await page.locator(`(//button[@name="SaveEdit" and text()="Save"])[2]`).click();
     await page.waitForTimeout(3000);
    await page.locator(`//button[@name="SaveEdit" and text()="Save"]`).click();
    await expect(page.locator(`//div[@role="status" and contains(text(), "Success notification.")]`)).toBeVisible();
       await page.waitForTimeout(3000);
    
})

test(`Get Contact using API`, async ({request}) => {

    const response_get = await request.get(`${inst_url}/services/data/v59.0/sobjects/Contact/`,
        {
        headers: {
                "Content-Type": "application/json",
                "Authorization" : `${tokenType} ${token}`
            }
        })
        const respBody = await response_get.json();
        console.log(respBody);
        let contLength = respBody.recentItems;
        case_num = contLength[contLength.length - 1].Id;
        console.log(`Created Contact is: ${case_num}`);
})

test(`Update Contact using API`, async ({request}) => {

    const response_get = await request.patch(`${inst_url}/services/data/v59.0/sobjects/Contact/${case_num}`,
        {
        headers: {
                "Content-Type": "application/json",
                "Authorization" : `${tokenType} ${token}`
            }, data: {
            "Title": "Software",
            "Department": "Information Technology",
            "LeadSource": "Web Engineer"

            }

        })
         console.log(`Updated Contact is: ${case_num}`);

})

test(`Deleting a Contact using API`, async ({request}) => {
     
    const response_Co = await request.delete(`${inst_url}/services/data/v59.0/sobjects/Contact/${case_num}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `${tokenType} ${token}`
            }
        })
                console.log(`Deleted Contact is: ${case_num}`);
})
 
    
})
