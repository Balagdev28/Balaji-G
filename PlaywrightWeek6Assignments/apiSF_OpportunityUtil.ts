import { APIRequestContext } from "@playwright/test";

let token: any
let inst_url: any
let tokenType: any/Users/bala/Desktop/PlaywrightWeek6Assignments/Playwright_API Integration.spec.ts
let opportunity_id:any
let opportunity_name:any
let opportunity_list: any;


export async function generateToken(request:APIRequestContext) {

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
    
        token = responseBody.access_token;
        inst_url = responseBody.instance_url;
        tokenType = responseBody.token_type;

        return [responseBody.access_token, responseBody.instance_url, responseBody.token_type]
}

export async function createOpportunity(request:APIRequestContext) {
    const response_Co = await request.post(`${inst_url}/services/data/v59.0/sobjects/Opportunity`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `${tokenType} ${token}`
                },
                data:{
                        "Name": "TestBG1",
                        "StageName": "Qualification",
                        "CloseDate": "2025-09-02"
                }
            })
            const responseBody = await response_Co.json()
      //  console.log(responseBody);
        
        opportunity_id = responseBody.id;
        console.log(`Opportunity id is: ${opportunity_id}`);
        opportunity_name = responseBody.name;
    
        console.log(response_Co.status());
        console.log(response_Co.statusText());
        return [responseBody.id, responseBody.name];
        
    
}

export async function updateOpportunity(request:APIRequestContext) {
    
}

export async function fetchOpportuniy(request:APIRequestContext) {

     const response_get = await request.get(`${inst_url}/services/data/v59.0/sobjects/Opportunity/${opportunity_id}`,
            {
            headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `${tokenType} ${token}`
                }
            })
            const respBody = await response_get.json();
            opportunity_list = respBody.id;
          //  console.log(respBody);
         console.log(`Opportunity fetch id is ${opportunity_list}`);

            
    
}