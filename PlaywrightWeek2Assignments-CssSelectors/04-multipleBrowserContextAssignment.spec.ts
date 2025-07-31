import { chromium, firefox, test } from "@playwright/test";

test(`Launch firefox & Edge browser instance test!`, async() => {

    const browserFirefox = await firefox.launch();      //Launch Firefox browser
    const firefoxContext = await browserFirefox.newContext(); //Firefox context
   const newPage = await firefoxContext.newPage(); 
   await newPage.goto('https://www.redbus.in');
   const urlFirefox = newPage.url();                   // Get the url of the page
   console.log(`Url of the page open in Firefox is: ${urlFirefox}`);
   const titlePage = await newPage.title();     // Get the title of the page
    console.log(`Title of the page open in Firefox is: ${titlePage}`);

    await browserFirefox.close();

     const browserEdge = await chromium.launch({channel: 'msedge'}); //Launch Edge browser using lauch option channel Edge
    const edgeContext = await browserEdge.newContext(); //Edge context
    const newEdgePage = await edgeContext.newPage();
    await newEdgePage.goto('https://www.flipkart.com');
    const url = newEdgePage.url();          // Get the url of the page
   console.log(`Url of the page open in Edge is: ${url}`);
   const titlePage1 = await newEdgePage.title();     // Get the title of the page
    console.log(`Title of the page open in Edge is: ${titlePage1}`);

    await browserEdge.close();

})
