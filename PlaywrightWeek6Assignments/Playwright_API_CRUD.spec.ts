import { expect, test } from "@playwright/test";
import { generateToken, fetchOpportuniy, createOpportunity } from "./apiSF_OpportunityUtil";
import { request } from "http";

let oppot_id : any
let token: any
let inst_url: any
let tokenType: any
let oppor_name:string

test.describe.serial(`API & Playwright test is Running in Serial mode!!`, async () => {

test(`Create Opportunity and verification using API`, async ({request,page}) => {

    [token , inst_url, tokenType] = await generateToken(request);
    [oppot_id, oppor_name] = await createOpportunity(request);
    await fetchOpportuniy(request); 
    console.log(`Opportunity id is: ${oppot_id}`);    

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

    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Opportunities");
    await page.waitForTimeout(3000);
    await page.waitForLoadState('domcontentloaded');

    await page.locator(`//a[@data-label="Opportunities"]`).click();
await page.waitForTimeout(3000);
    const search = page.getByPlaceholder("Search this list...");
await page.waitForTimeout(3000);
    await search.fill("TestBG1");
    await search.press('Enter');
    await page.waitForTimeout(3000)
    await expect(page.locator(`//a[@title="TestBG1"]`).first()).toBeVisible();

})

test(`Update a Opportunity in Salesforce and get the opportunity`, async ({ request, page }) => {

    const response = await request.patch(`${inst_url}/services/data/v64.0/sobjects/Opportunity/${oppot_id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            },  
            
            data: {
            "Type": "New Customer",
            "StageName": "Prospecting"

        }

    })

    await page.goto(`https://login.salesforce.com/?locale=in`);

    await page.getByLabel("Username").fill("balagdev28385@agentforce.com"); // normal DOM interaction

    await page.getByRole("textbox",{name:"Password"}).fill("")// accessibility way of interacting with the web elements

    await page.getByRole("button",{name:"Log In"}).click();

    await page.waitForTimeout(5000)
await page.waitForLoadState('domcontentloaded');
    await page.locator(`//button[@title="App Launcher"]`).click();
       await page.waitForTimeout(5000)
    await page.getByText("View All",{exact:true}).click();
    await page.waitForTimeout(3000);
    await page.waitForLoadState('domcontentloaded');
    await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Opportunities");
     await page.waitForTimeout(3000);
    await page.waitForLoadState('domcontentloaded');
    await page.locator(`//a[@data-label="Opportunities"]`).click();
    //await page.getByText("Opportunities",{exact:true}).click();

    const search = page.getByPlaceholder("Search this list...")
    await page.waitForTimeout(3000);

    await search.fill("TestBG1");
    await search.press('Enter');
    await page.waitForTimeout(3000);
    await expect(page.locator(`//span[@title="Prospecting"]`).first()).toBeVisible();

    await fetchOpportuniy(request);   
    
}) 

test(`Delete a Opportunity in Salesforce`, async ({ request, page }) => {

    const response = await request.delete(`${inst_url}/services/data/v64.0/sobjects/Opportunity/${oppot_id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            }

    })

})

})