const express = require("express");
const app = express();
const cors = require("cors");
// const routes = require("./routes/jwtAuth")

app.use(express.json()); //req body
app.use(cors());

//routes
app.use("/auth", require("./routes/jwtAuth"));;
app.use("/dashboard", require("./routes/dashboard"))


app.listen(5400, ()=>{
    console.log("Server is listening on 5400")
});

