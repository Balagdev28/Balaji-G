let factorialNum: number[]; //Array of values

function factorialcalc(numbers: number[]): void{

for (const num of numbers){     //Used for of to calculate factorial for all numbers in array
    if(num > 0){
let result: number =1;

    for (let index = num; index >=1; index--) {
        result *= index;
       
    }
 console.log(`Factorial of given number ${num} is:${result}`);      //Printing factorial value for each positive array value
} else if (num <0 ){
    console.log(`Given number is a Negative value: ${num}`);        //Print this if the array value is 0
}else {
    console.log(`Given number is zero: ${num}`);        //Print this if the array value is -ve
}

}
}

factorialcalc([5,7,0,-4]); //Passing array of values in function

