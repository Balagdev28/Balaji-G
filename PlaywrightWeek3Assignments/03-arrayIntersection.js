
const arr1 = [1,2,4,6,8,9];
const arr2 = [2,3,6,7,];

function intersection(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    const value = arr1[i];

    if (!result.includes(value)) { //used inlcudes() to check whether an array1 element present in result array
      result.push(value);          //used push method to push to result array if its not present 
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    const value1 = arr2[i];

    if (!result.includes(value1)) { //used inlcudes() to check whether an array2 element present in result array
      result.push(value1);          //used push method to push to result array if its not present in result array
    }
  } 

  return result;
}

const interValue = intersection(arr1,arr2);
console.log(interValue);

console.log(`Array in ascending order:${interValue.sort()}`); //Sorting an array value
