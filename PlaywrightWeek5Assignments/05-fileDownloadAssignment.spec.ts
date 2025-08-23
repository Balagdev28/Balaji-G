//05-fileDownloadAssignment.spec.ts

import { expect, test } from "@playwright/test";
import fs from 'fs'
import path from "path";

test (`File Download class assignment`, async ({page})=>{


 await page.goto(`https://the-internet.herokuapp.com/download`);

const filePromise = page.waitForEvent('download');
await page.locator(`//a[text()="example.json"]`).click();
const filedwld = await filePromise;
const suggestedFilename = filedwld.suggestedFilename(); //using suggested name method to keep the file name as same from website
const fileName = path.join('TestDownload', suggestedFilename);
await filedwld.saveAs(fileName);

//Asserting the file existance in TestDownload folder
expect(fs.existsSync(fileName)).toBeTruthy();

 await page.waitForTimeout(3000);


})