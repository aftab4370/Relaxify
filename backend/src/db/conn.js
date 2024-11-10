const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/backend").then(()=>{
    console.log(`connection success`);
}).catch((e)=>{
    console.log(`no connextion`);
})