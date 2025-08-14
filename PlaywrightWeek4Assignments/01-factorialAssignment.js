var factorialNum; //Array of values
function factorialcalc(numbers) {
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) { //Used for of to calculate factorial for all numbers in array
        var num = numbers_1[_i];
        if (num > 0) {
            var result = 1;
            for (var index = num; index >= 1; index--) {
                result *= index;
            }
            console.log("Factorial of given number ".concat(num, " is:").concat(result)); //Printing factorial value for each positive array value
        }
        else if (num < 0) {
            console.log("Given number is a Negative value: ".concat(num)); //Print this if the array value is 0
        }
        else {
            console.log("Given number is zero: ".concat(num)); //Print this if the array value is -ve
        }
    }
}
factorialcalc([5, 7, 0, -4]); //Passing array of values in function
