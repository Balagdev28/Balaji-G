// fixtures.ts
import { test as base } from '@playwright/test';

export const test = base.extend<{
  loggedInPage: import('@playwright/test').Page;
  SfLogin: import('@playwright/test').Page;
}>({
  loggedInPage: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // SETUP: Log in before the test
    await page.goto(`http://leaftaps.com/opentaps/contorl/main`);
   await page.locator(`#username`).fill(`Demosalesmanager`);
   await page.locator(`#password`).fill(`crmsfa`);
   await page.locator(`.decorativeSubmit`).click();

    await use(page); // Pass the logged-in page

    // TEARDOWN1: Clean up after test
    await context.close();
  },
  SfLogin: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // SETUP: Log in before the test
   await page.goto(`https://login.salesforce.com/?locale=in`);
   await page.locator(`#username`).fill(`ravindran.ramdas@testleaf.com`);
   await page.locator(`#password`).fill(`RaviSalesTest#1432`);
   await page.locator(`#Login`).click();

    await use(page); // Pass the logged-in page

    // TEARDOWN2: Clean up after test
    await context.close();
  }

});


