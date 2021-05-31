const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const usersRoutes = requre("../routes/users.route");

app.user("/users", usersRoutes);

app.listen(3000, () => {
  console.log("I am ready to listen you");
});
