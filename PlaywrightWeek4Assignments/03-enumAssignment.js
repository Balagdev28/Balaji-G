var Environment;
(function (Environment) {
    Environment["local"] = "Local";
    Environment["dev"] = "Development";
    Environment["stage"] = "Staging";
    Environment["prod"] = "Production";
})(Environment || (Environment = {}));
function runTests(Env) {
    console.log("Current Environment is : ".concat(Env));
}
runTests(Environment.stage);
runTests(Environment.prod);
runTests(Environment.local);
