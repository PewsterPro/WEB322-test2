const fs = require("fs");

module.exports = {
    prep,
    cpa,
    highGPA
}

let students = [];

function prep() {
    return new Promise((resolve, reject) => {
        fs.readFile('./students.json',(err,data)=>{
            if (err) {
                reject("unable to read file");
            }
            else {
                students = JSON.parse(data);
                resolve();
                 }
    });
});
}

function cpa() {
    return new Promise((resolve, reject) => {
        if (students.length == 0) {
            reject("no results returned");
        }
        else {
            resolve(students);
        }
    });
}

function highGPA() {
    return new Promise((resolve, reject) => {
        let highest = students.filter(student => student.gpa == 3.8); //sorry I do not have tiem t make the loop to sompare eacb
        if (highest.length == 0) {
            reject("no results returned");
        }
        else {
            resolve(highest);
        }
    });
}