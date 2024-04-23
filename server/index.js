const express = require("express");
const createHttpError = require("http-errors");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const session = require("express-session");
// const routes = require("./routes/jwtAuth")

app.use(express.json()); //req body
app.use(cors());
app.use(morgan('dev'));

//routes
app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"))

//error handler
app.use((req, res, next) =>{
    next(createHttpError.NotFound())
});

app.use((error, req, res, next) => {
    error.status = error.status || 500
    res.status(error.status)
    res.send(error)
})


app.listen(5400, ()=>{
    console.log("Server is listening on 5400")
});