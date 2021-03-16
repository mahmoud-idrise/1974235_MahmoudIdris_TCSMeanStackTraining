
var progobj =[];
function storeInSession() {
    sessionStorage.setItem("progInfo",JSON.stringify(progobj))
}
function retrieveInfo() {
    var session = sessionStorage.getItem("progInfo");
    var obj = JSON.parse(session);
    console.log(obj);  
    return obj;  
}
function infoSubmit(){
    var data = readFormData();
    progobj.push(data);      
    console.log(progobj);
    storeInSession();
}

function readFormData() {
    var obj = {}    
    obj.name = document.getElementById("name").value;
    obj.type = document.getElementById("project").value;
    obj.vendor = document.getElementById("budget").value;
    console.log(obj);
    return obj; 
}

function insertNewRecord(data){
 var table = document.getElementById("projectTable");
 var body = table.getElementsByTagName("tbody")[0];
 var newRow = body.insertRow(body.length);  

 var cell1 = newRow.insertCell(0);          
 cell1.innerHTML=data.name;                

 var cell2 = newRow.insertCell(1);         
 cell2.innerHTML=data.type;                

 var cell3 = newRow.insertCell(2);         
 cell3.innerHTML=data.vendor; 
}

function resetData() {
document.getElementById("name").value="";
document.getElementById("project").value="";
document.getElementById("budget").value="";
}

function create_table(){
    obj = retrieveInfo();
    for (let k in obj){
        insertNewRecord(obj[k]);
    }
}