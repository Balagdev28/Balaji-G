let browserName= "Chrome"

function launchBrowser(){

    if (browserName === "Chrome"){
        console.log ("Browser Name is:"+browserName)
    } else {console.log ("Browser Name is different")
}
    
}
launchBrowser(browserName);

let testType = "UAT"

function runTests(){

    switch(testType){
        case "Unit Test":
        console.log("Current test run is Unit testing")
        break;
        case "Sanity":
        console.log("Current test run is Sanity testing")
        break;
        case "SIT":
        console.log("Current test run is SIT testing")
        break;
        case "Regression":
        console.log("Current test run is Regression testing")
        break;
        case "UAT":
        console.log("Current test run is UAT testing")
        break;
        default:
        console.log("Current test run is E2E testing")
    }

}
runTests(testType)