const express = require("express");

const app = express();

const usersRoutes = requre("../routes/users.route");


app.listen(3000, ()=> {
    console.log("I am ready to listen you");
});
