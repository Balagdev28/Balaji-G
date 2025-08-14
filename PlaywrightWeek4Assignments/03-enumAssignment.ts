enum Environment{           //Created enum called 'Environment

    local ="Local",
    dev ="Development",
    stage= "Staging",
    prod= "Production"
}


function runTests(Env: Environment):void{               //function runTests accepts an argument of type Environment
console.log(`Current Environment is : ${Env}`);

}
//Calling function with different values
runTests(Environment.stage);            
runTests(Environment.prod);
runTests(Environment.local);