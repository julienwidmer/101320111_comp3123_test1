/*
Course Code:    COMP3123
Lab Test:       1
Question:       1
Student Name:   Julien Widmer
Student ID:     101320111
*/
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

function lowerCaseWords(array) {
    // Filter to get an array of strings
    let stringArray = array.filter(element => typeof element === "string" && element != "");
    // Map to get an array of lowercase strings
    stringArray = stringArray.map(string => string.toLowerCase());

    let promise = new Promise((resolve, reject) => {
        if (stringArray.length != 0) {
            // One or more item in the array
            resolve(stringArray);
        } else {
            // No items in the array
            reject("Could not find elements of type strings in array.")
        }
    })

    return promise;
}

lowerCaseWords(mixedArray).then((success) => {
    // Promise Resolved
    console.log(success);
}).catch((error) => {
    // Promise Rejected
    console.log("Rejected: " + error);
})