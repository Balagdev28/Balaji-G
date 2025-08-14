let fiboNum: number[]; //Array of values

function fiboNumCalc(numbers: number[]): void{

for (const num of numbers){     //Used for of to calculate Fibonacci for all numbers in array
    if(num > 0){
    let a=0;        //Initialized variable to store first value
    let b =1;       //Initialized variable to store second value
 console.log(`Fibonacci of given number ${num} is:`); 
    for (let index = 0; index<num; index++) {
        console.log(a);      //Printing Fibonacci value for each positive array value
        let result = a+b; //Sum of two numbers
        a=b;            //shifting values to next number
        b=result;       //shifting values to next number
    }
     
} else if (num <0 ){
    console.log(`Given number is a Negative value: ${num}`);        //Print this if the array value is 0
}else {
    console.log(`Given number is zero: ${num}`);        //Print this if the array value is -ve
}

}
}

fiboNumCalc([5,7,0,-4]); //Passing array of values in function

