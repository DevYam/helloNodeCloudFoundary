var express = require('express')
var app = express()     // Here the express() is a instance of express that we required above



app.get("/hello",(req,res)=>{
    res.send("Hello")
})

var server = app.listen(8080, ()=>{
    console.log("server is listening to port", server.address().port)
} )
