let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"
let fs = require("fs");
var file = fs.readFileSync('./call_data.json', 'utf8');
json_file = JSON.parse(file);
mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
if(!err1){
            let db = client.db("meanstack");
    db.collection("logsRecord").insertMany(json_file,(err2,result)=>{
            if(!err2){
                console.log(result.insertedCount);
            }else {
                console.log(err2.message);
            }
            client.close();    
        });
        
    }
});