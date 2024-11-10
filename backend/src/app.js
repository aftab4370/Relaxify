const express=require("express");
const app=express();
const port=process.env.PORT || 3000;
require("./db/conn");
app.get("/",(req,res)=>{
    res.send("hello 1")
});

app.listen(port,()=>{
    console.log(`server in port ${port}`);
})
