/*
Course Code:    COMP3123
Lab Test:       1
Question:       3
Student Name:   Julien Widmer
Student ID:     101320111
*/
const fs = require("fs");
const process = require("process");

const logsDirectory = "logs";

function deleteLogFiles() {
    if (fs.existsSync(logsDirectory)) {
        // Delete log files
        for (i = 0; i < 10; i++) {
            const fileName = `log-${i}.txt`;
            const filePath = `${logsDirectory}/${fileName}`;

            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                console.log(`delete files...${fileName}`);
            } else {
                // File does not exist -> Exit loop
                break;
            }
        }

        // Delete directory
        fs.rmdirSync(logsDirectory);
    } else {
        // Directory does not exist
        console.log("Directory does not exist.");
    }
}

function createLogFiles() {
    if (fs.existsSync(logsDirectory)) {
        // Directory already exists
        console.log("Directory already exists.");
    } else {
        // Create directory
        fs.mkdirSync(logsDirectory);

        // Set process to current directory
        process.chdir(logsDirectory);

        // Create log files
        for (i = 0; i < 10; i++) {
            const fileName = `log-${i}.txt`;
            const data = `${new Date()}: Log file number #${i + 1} created successfully.\n`;

            fs.appendFile(fileName, data, (err) => {
                if (err) { console.log(`Error: ${err}`); }
            });

            console.log(fileName)
        }

        // Set process directory to parent folder of logsDirectory
        process.chdir("../");
    }
}

createLogFiles();
deleteLogFiles();