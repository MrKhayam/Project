const express = require("express");
const errorHandler = require("./Middleware/errorMiddleware");
const connectDB = require("./Config/connection");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

connectDB();


app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use("/api/user", require("./Routes/userRoute"));


app.use(errorHandler);


app.listen(port, console.log(`Server is Running at port ${port}`));
