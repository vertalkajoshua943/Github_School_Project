// StudentProject.js

const fs = require('fs');

function addStudent(studentInfo) {
    const studentData = JSON.stringify(studentInfo);
    try {
        fs.writeFileSync(`./students/${studentData}`, studentData);
        console.log("Student added successfully!");
    } catch (error) {
        console.error("Failed to write data: ", error);
    }
}

function removeStudent() {
    try {
        fs.unlinkSync(`./students/`);
        console.log("All students removed.");
    } catch (error) {
        console.error("Failed to delete all students: ", error);
    }
}
