const express = require("express");
const errorHandler = require("./Middleware/errorMiddleware");
const connectDB = require("./Config/connectDB");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const cors = require('cors');
app.use(cors());
connectDB();


app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use("/api/user", require("./Routes/userRoutes"));
app.use("/api/tweets", require("./Routes/tweetRoutes"));
app.use(errorHandler);


app.listen(port, console.log(`Server is Running at port ${port}`));
