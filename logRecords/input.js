let obj = require("readline-sync");
let fname = obj.question("Enter the First name");

let lname = obj.question("Enter the Last name");

let gender = obj.question("Enter the gender");

let email = obj.question("Enter the email");
//debugger;
//console.log("First name ="+ fname,"Last name ="+ lname,"Gender ="+ gender,"Email ="+ email);
exports.fname = fname;
exports.lname = lname;
exports.gender = gender;
exports.email = email;