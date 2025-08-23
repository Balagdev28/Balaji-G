//04-fileUploadAssignment.spec.ts

import { expect, test } from "@playwright/test";
import path from "path";

test (`FileUpload with no type 'file' attribute`,async ({page}) => {


    await page.goto(`https://the-internet.herokuapp.com/upload`);

    //Uploading an image inside Red square area
    const filePromise = page.waitForEvent("filechooser");
    page.locator(`#drag-drop-upload`).click();
    const fileUpld = await filePromise;
   await fileUpld.setFiles([path.join(__dirname,'../Data/Test 2.docx')]);

   const upldVerfiy = await page.locator(`#drag-drop-upload`).innerText();
   console.log(upldVerfiy);
   //Assert the file is uploaded or not
   await expect(page.locator(`(//div[@id="drag-drop-upload"]//span)[1]`)).toHaveText("Test 2.docx");
   await page.waitForTimeout(3000)

    //Uploading a doc without clicking on upload button
    const uploadFile = page.locator(`#file-upload`);
    await uploadFile.setInputFiles([path.join(__dirname,'../Data/Car.webp')])

    await page.waitForTimeout(3000)
    
})