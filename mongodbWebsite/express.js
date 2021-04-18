let app = require("express")();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
let url = "mongodb://localhost:27017";
let Mongoose = require("mongoose"); 
Mongoose.Promise= global.Promise;
let MongoClient = require('mongodb').MongoClient;
let mongodbWarn = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
Mongoose.connect("mongodb://localhost:27017/meanstack",{useFindAndModify:false},mongodbWarn);
let CourseSch = new Mongoose.Schema({
    _id : Number,
    name : String,
    description : String,
    amount : Number,
});
var Courses = Mongoose.model("",CourseSch,"courseAdded");


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.get("/add",(req,res)=>{
    res.sendFile(__dirname+"/add.html");
    console.log(req.body)
})
app.post('/add', (req, res) => {
    console.log(req.body)
    MongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
        if(!err1){
                    let db = client.db("meanstack");
            db.collection("courseAdded").insertOne(req.body,(err2,result)=>{
                    if(!err2){
                        res.send("added successfully");
                    }else {
                        console.log(err2.message);
                    }
                    client.close();    
                });
                
            }
            
        });
  })
app.get("/update",(req,res)=>{
    res.sendFile(__dirname+"/update.html");
    console.log(req.body)
})
app.post('/update', (req, res) => {
    console.log(req.body)
    MongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
        if(!err1){
                    let db = client.db("meanstack");
            db.collection("courseAdded").updateMany({_id:req.body._id},{$set:{amount:req.body.amount}},(err,result)=>{
                if(!err){
                    if(result.nModified>0){
                            res.send("Record updated succesfully")
                    }else {
                            res.send("Record updated succesfully");
                    }
                }else {
                    res.send("Error generated "+err);
                }
                    client.close();    
                });
                
            }
        });
  })

app.get("/fetch", (req,res)=>{

    Courses.find({},(err,result)=>{
        if(!err){
            result.forEach(doc=>console.log(doc));
            res.sendFile(__dirname + "fetch.html");
        }
        res.send(result)
    })
});

app.get("/delete",(req,res)=>{
    res.sendFile(__dirname+"/delete.html");
    console.log(req.body)
})
app.post('/delete', (req, res) => {
    console.log(req.body)
    MongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
        if(!err1){
                    let db = client.db("meanstack");
            db.collection("courseAdded").deleteOne({_id:req.body._id},(err,result)=>{
                if(!err){
                    if(result.deletedCount>0){
                        res.send("Record deleted successfully")
                    }else {
                        res.send("Record not present");
                    }
                    }else {
                    res.send("Error generated "+err);
                    }
                    client.close();    
                });
                
            }
        });
  })

app.listen(9090,()=>console.log("running.."));