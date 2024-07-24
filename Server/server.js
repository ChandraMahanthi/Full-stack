const express = require("express");
const mongodb = require("mongodb")
const mongoclient = mongodb.MongoClient
const app = express();
const cors = require("cors");
const port = 4000;
app.use(express.json());
app.use(cors());
app.post("/sample",(req,res)=>{
    if(Object.keys(req.body).length > 0){
        mongoclient.connect("mongodb://127.0.0.1:27017/users",(error,cluster)=>{
            console.log("hi")
            if(error){
console.log(error)
            }else{

 
 console.log(cluster)
 var dbRef = cluster.collection("usercollection")
//  var coll = dbRef.collection("usercollection")
 coll.insertOne(req.body,(succ,error)=>{
    console.log(succ)
    console.log(error)
 
 })
}
        })

        // res.json({message : "success"})
    }else{
        res.json({message : "please send the data"})
    }
  
    
})
app.listen(4000,()=>console.log(`listening susccessfully at ${port}`))