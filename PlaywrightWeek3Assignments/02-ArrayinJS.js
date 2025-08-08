//Array in JavaScript
//Count the occurance of particular element in Array using JavaScript

const nums = [2,3,5,6,2,7,8,2];
const occrNum = 2;
let count=0;

for (let index = 0; index < nums.length; index++) {
    let element = nums[index];
    if(element === occrNum){
        count++;
    }    
}
console.log(`Number of occurance of ${occrNum} in array is: ${count} times`);
