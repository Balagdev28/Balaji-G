let browser = "Chrome";

function checkBrowserVersion(fun1) {
    setTimeout(() => {
        fun1(); //Invoke callback function inside checkBrowserVersion function
    }, 2000);
    
}
function callback() {
    console.log(`Browser version using call back is: ${browser}`);
    
}
checkBrowserVersion(callback); //Passing callback function as parameter