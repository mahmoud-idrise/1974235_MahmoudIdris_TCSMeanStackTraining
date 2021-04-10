let http = require("http");
let url = require('url');
let fs = require('fs');
let port = 4111;

let htmlContent = `
    <form action="/store" method="get">
        <label>Emp Id</label>
        <input type="text" name="empID"/><br/>
        <label>Task Id</label>
        <input type="text" name="taskID"/><br/>
        <label>Task</label>
        <input type="text" name="task"/><br/>
        <label>Deadline</label>
        <input type="date" name="date"/><br/>
        <input type="submit" value="Store"/>
        <input type="reset" value="reset"/>
    </form>

    <form action="/delete" method="get">
    <label>Task delete</label>
    <input type="text" name="taskIDD"/><br/>
    <input type="submit" value="delete"/>
    </form>

`

let user = [];
let server = http.createServer((req,res)=> {
        var pathInfo = url.parse(req.url,true).pathname;
        debugger;
        if(pathInfo=="/") {
           res.setHeader("content-type", "text/html");
                res.end(htmlContent);
                }
        
        else if(pathInfo=="/store") {
            var data = url.parse(req.url,true).query;
                console.log("empid " + data.empID );
                console.log("taskid " + data.taskID);
                console.log("task " + data.task );
                console.log("deadline" + data.date ) ;

            //user.push(data)  
            //var file = fs.readFileSync('./users.json', 'utf8');
            var file = fs.readFileSync('./users.json', 'utf8');

            if (file == ''){
                user.push(data);
                fs.writeFileSync('./users.json', JSON.stringify(user, null, 2));
            }
            else{
                json_file = JSON.parse(file);
                json_file.push(data);
                fs.writeFileSync("./users.json", JSON.stringify(json_file, null, 2));
                
            }
            res.writeHead(301, {location:'/display'});
            res.end();
        }
            
        else if(pathInfo=="/delete"){
            debugger;
            var file = fs.readFileSync('./users.json', 'utf8');
            var removeUser = url.parse(req.url,true).query;
                console.log("removeUser" + removeUser.taskIDD)
            
            var json = JSON.parse(file);
            
            for(i = 0; i<json.length; i++){
                var element = json[i];
                console.log("testing" + element.taskID);
                var taskID = element.taskID;
                var taskIDD = removeUser.taskIDD;
                if(element.taskID === removeUser.taskIDD){
                    console.log("test1" +element.taskID);
                    json.splice(i, 1);
                }
            }
            fs.writeFileSync('users.json', JSON.stringify(json, null, 2));
            res.writeHead(301, {location:'/display'});
            res.end();
        ;}
        
        else if(pathInfo=="/display"){
            debugger;
            let read_json = fs.readFileSync("users.json");
            let task_info =JSON.parse(read_json);
            let table_task = `
                <table border = "1">
                    <tr>
                        <th>Emp Id</th>
                        <th>Task Id</th>
                        <th>Task</th>
                        <th>Deadline</th>
                    </tr>
                    `
                for (let i = 0; i < task_info.length; i++){
                    const element = task_info[i];
                    
                    table_task += `
                    <tr>
                        <td>${element.empID}</td>
                        <td>${element.taskID}</td>
                        <td>${element.task}</td>
                        <td>${element.date}</td>
                    </tr>`
            }

            table_task += `</table>`   
            res.end(table_task);
            
        }
        
    }
    
);
server.listen(port,()=>console.log(`Server is running on port number ${port}`));