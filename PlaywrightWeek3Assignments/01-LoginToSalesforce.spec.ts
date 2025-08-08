import {chromium, test} from "@playwright/test"

test('Login to my Salesforce account',async()=>{

    const chromeBrowser = await chromium.launch();
    const browserContext = await chromeBrowser.newContext();
    const pageSF = await browserContext.newPage(); 
    await pageSF.goto(`https://orgfarm-d44796f9ed-dev-ed.develop.my.salesforce.com/`);
    
    await pageSF.locator(`//input[@id="username"]`).fill("balagdev28385@agentforce.com");
    await pageSF.locator(`//input[@id="password"]`).fill("");
    await pageSF.locator(`//input[@id="Login"]`).click();

    await pageSF.waitForTimeout(10000);
    const pageUrl = pageSF.url();
    console.log(`Page Url is: ${pageUrl}`);
    const pageTitle = await pageSF.title();
    console.log(`Page title is: ${pageTitle}`)
    await chromeBrowser.close();


})