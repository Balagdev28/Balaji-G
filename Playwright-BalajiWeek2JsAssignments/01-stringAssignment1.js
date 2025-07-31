
//Example 1 - String as an array, finding lenght and identifying last word
const strName = "Hello World";
const splitstrName = strName.split(""); //Splitting string into a array of substring
console.log(splitstrName); //Printing the array value
console.log(`String length: ${+splitstrName.length}`); // Getting and printing string length using template literal
console.log(`Last word in the array is : ${strName.charAt(10)}`); //Finding last word in an array using slice function and printing using template literal
                                                                  //We can also use sting array.slice()

//Example 2 - String as an array, finding lenght and identifying last word
const strName1 = '  Hello Play wright  '; //String with space at the start and at the end
const trimmedName = strName1.trimStart(); //Trimming the whitespace at the start of the string 
console.log(`Trim string : ${trimmedName}`);  //Printing trimmed string
console.log(`Split string into words : ${strName1.split(' ') }`); //Splitting string into words
console.log(`Last word in the string is : ${strName1.slice(12,19)}`); //Finding last word in string using slice function and printing using template literal
console.log(`Last word in the string using sub string : ${strName1.substring(12,19)}`); //Finding last word in string using sub string function and printing using template literal


const strName2 = "Dream Catcher";
function lastWordLength () {
let subStr = strName2.slice(6,13); //Identifying the last word using split function
console.log(`Sliced word is: ${subStr}`);
let subStr1 = subStr.length; //calculating the length of the last word
return subStr1;
}
let strLenght = lastWordLength(strName2);
console.log(`Lenght of the last word is: ${strLenght}`);

//Anagram understanding
//Example 3 - Remove characters, sort string and compare

function isAnagram(agmStr1, agmStr2) {
const normalize = function(str) {                       //function to convert all letters to small case 
  return str.toLowerCase().split('').sort().join();    //sort the string ("e", "i", "l", "n", "s", "t") and join as "eilnst"
  
}
  return normalize(agmStr1) === normalize(agmStr2); //compare the string and returns true if both string matches

}
console.log(isAnagram("silent", "LISTEN"));