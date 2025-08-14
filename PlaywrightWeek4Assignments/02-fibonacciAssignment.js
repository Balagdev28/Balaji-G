var fiboNum; //Array of values
function fiboNumCalc(numbers) {
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) { //Used for of to calculate Fibonacci for all numbers in array
        var num = numbers_1[_i];
        if (num > 0) {
            var a = 0;
            var b = 1;
            console.log("Fibonacci of given number ".concat(num, " is:"));
            for (var index = 0; index < num; index++) {
                console.log(a); //Printing Fibonacci value for each positive array value
                var result = a + b; //Sum of two numbers
                a = b; //shifting values to next number
                b = result; //shifting values to next number
            }
        }
        else if (num < 0) {
            console.log("Given number is a Negative value: ".concat(num)); //Print this if the array value is 0
        }
        else {
            console.log("Given number is zero: ".concat(num)); //Print this if the array value is -ve
        }
    }
}
fiboNumCalc([5, 7, 0, -4]); //Passing array of values in function
