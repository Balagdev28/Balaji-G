import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";
let token: any
let inst_url: any
let tokenType: any
let case_id:any
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

test(`Create Case`, async ({request}) => {
     
    const fakeEmail = faker.internet.email();
    
    const response_Co = await request.post(`${inst_url}/services/data/v59.0/sobjects/Case`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `${tokenType} ${token}`
            },
            data:{
                    "status": "New",
                    "Origin": "Email",
                    "Type": "Mechanical", 
                    "SuppliedEmail": fakeEmail
            }
        })
        const responseBody = await response_Co.json()
    console.log(responseBody);
    
    case_id = responseBody.id;
    console.log(`Case id is: ${case_id}`);

    console.log(response_Co.status());
    console.log(response_Co.statusText());
    
})

test(`Get Case using API and update using playwright`, async ({request, page}) => {

    const response_get = await request.get(`${inst_url}/services/data/v59.0/sobjects/Case/${case_id}`,
        {
        headers: {
                "Content-Type": "application/json",
                "Authorization" : `${tokenType} ${token}`
            }
        })
        const respBody = await response_get.json();
        console.log(respBody);
        case_num = respBody.CaseNumber;
        console.log(`Created Case number is: ${case_num}`);
        
    await page.goto(`https://login.salesforce.com/?locale=in`);

    await page.getByLabel("Username").fill("balagdev28385@agentforce.com"); // normal DOM interaction

    await page.getByRole("textbox",{name:"Password"}).fill("")// accessibility way of interacting with the web elements

    await page.getByRole("button",{name:"Log In"}).click();

    await page.waitForTimeout(5000)

    await page.locator(`//button[@title="App Launcher"]`).click();
     await page.waitForTimeout(5000)
    await page.getByText("View All",{exact:true}).click();
     await page.waitForTimeout(3000);
    await page.waitForLoadState('domcontentloaded');

    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Cases");
    await page.waitForTimeout(3000);
    await page.waitForLoadState('domcontentloaded');

    await page.locator(`//a[@data-label="Cases"]`).click();
await page.waitForTimeout(3000);
    const search = page.getByPlaceholder("Search this list...");
await page.waitForTimeout(3000);
    await search.fill(case_num);
    await search.press('Enter');
    await page.waitForTimeout(3000)
    await expect(page.locator(`//a[@title=${case_num}]`).first()).toBeVisible();

    await page.locator(`//a[@title=${case_num}]`).click();

    await page.getByRole('button', { name: 'Edit' }).nth(1).click();
    await page.locator(`//button[@role="combobox" and @data-value="New"]`).click();
    await page.locator(`//div[@role="listbox"]/lightning-base-combobox-item/span[2]/span[text()="Working"]`).click();
    await page.waitForTimeout(1000)
    await page.locator(`//button[@role="combobox" and @data-value="Medium"]`).click();
    await page.locator(`//div[@role="listbox"]/lightning-base-combobox-item/span[2]/span[text()="Low"]`).click();
    await page.waitForTimeout(1000)
    await page.locator(`//button[@role="combobox" and @data-value="Email"]`).click();
    await page.locator(`//div[@role="listbox"]/lightning-base-combobox-item/span[2]/span[text()="Phone"]`).click();
    await page.waitForTimeout(1000)
    await page.locator(`//button[@role="combobox" and @aria-label="SLA Violation"]`).click();
    await page.locator(`//div[@role="listbox"]/lightning-base-combobox-item/span[2]/span[text()="No"]`).click();
    await page.locator(`//button[@name="SaveEdit"]`).click();
    await expect(page.locator(`//div[@role="status" and contains(text(), "Success notification.")]`)).toBeVisible();
})


test(`Deleting a Case`, async ({request}) => {
     
    const response_Co = await request.delete(`${inst_url}/services/data/v59.0/sobjects/Case/${case_id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `${tokenType} ${token}`
            }
        })
        
})

    
})
