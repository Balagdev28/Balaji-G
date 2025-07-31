const { error } = require("console");

function fetchDataFromDatabase() {
    
    return new Promise((resolve, rejects) => {  //handling promise with reolve and reject
    setTimeout(() => {                      // condition check happening inside setTimeout block to print the messsage with 3sec delay
    const data =false;
    if (data == true){
        resolve("Data fetched successfully!");
    } else{
        error("Data not found!");
    }
    }, 3000);

    });

}

console.log(`Fetching data from database...`);
fetchDataFromDatabase()    //Call the function to handle the promise

.then(message => {
    console.log(message);       //.then will print data successful
})
.catch(error => {
    console.log(error);         //.catch will print data not found
})