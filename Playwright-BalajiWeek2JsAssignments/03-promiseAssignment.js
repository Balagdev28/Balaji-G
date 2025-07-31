
const conditionalPromise = new Promise((resolve, reject) => {
  const randomNum = Math.random(); //Get the random number and store in the variable 
  console.log("Random number:", randomNum); // To display random number

  if (randomNum > 0.5) { //if random number is > 0.5 then it will reolve(.then) else it will throw error(.catch)
    resolve("Resolved successfully");
  } else {
    reject("Rejected");
  }
});

  conditionalPromise //Conditional promise with then & catch
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.log(error);
  }
  );