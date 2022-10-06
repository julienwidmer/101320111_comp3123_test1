/*
Course Code:    COMP3123
Lab Test:       1
Question:       2
Student Name:   Julien Widmer
Student ID:     101320111
*/
function resolvedPromise() {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve({"message": "delayed success!"})
        }, 500)
    })

    promise.then((success) => console.log(success));
}

function rejectPromise() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({"error": "delayed exception!"})
        }, 500)
    })

    promise.catch((error) => console.log(error));
}

resolvedPromise();
rejectPromise();