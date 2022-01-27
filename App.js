const express= require('express')
const mongoose = require('mongoose')
const PORT = 8899
const app = express()
//Making Db Connection
const db="mongodb://localhost:27017/mongocrud"
const connectDb= async () =>{
    try{
        await mongoose.connect(db,{useNewUrlParser:true})
        console.log("mongodb Connected Successfully")
    }
    catch(err)
    {
        console.log(err.message)
    }
}
connectDb()

const catModel= require('./categorySchema')

app.get("/insertcategory",(req,res)=>{
    let cname="manisha"
    let path="manisha.jpg"

    let ins= new catModel({cname:cname,image:path})

    ins.save((err)=>{
        if(err) {res.send("ALLREDY ADDED THIS RECORD")}
        res.send("category Added successfully")
    })
})



app.listen(PORT,(err)=>{
 if (err) throw err
 console.log("working On Port"+PORT)
})