const express = require("express");

const app = express();

app.use("/test",(req, res)=>{
    console.log("Recieved request"); 
    res.status(200).send("recieved request 2");       
});

app.listen(3000, ()=> {
    console.log("I am ready to listen you");
});
