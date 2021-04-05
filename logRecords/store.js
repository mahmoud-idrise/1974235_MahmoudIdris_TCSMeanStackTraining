let userInfo = require("./input")
let fs = require('fs');
let date = new Date();
let user1 = {"firstname":userInfo.fname, "lastname":userInfo.lname,"gender":userInfo.gender,"email":userInfo.email,"user input date and time":Date()};
let users = [];
debugger;
console.log(user1);
users.push(user1)

//read the json file
var file = fs.readFileSync('./user.json', 'utf8');

if (file == ''){
    fs.appendFileSync('./user.json', JSON.stringify(users, null, 2));
}
else{
    json_file = JSON.parse(file);
    json_file.push(user1);
    fs.writeFileSync("./user.json", JSON.stringify(json_file, null, 2));
}



