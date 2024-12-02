<<<<<<< HEAD
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
=======
const express = require('express');
const errorHandler = require('./Middlewares/errorMiddleware');
const connectDB = require('./Config/connectDB');
const app = express();
require('dotenv').config();
connectDB();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use("/api/user", require('./Routes/userRoutes'));

>>>>>>> 3d5dc53ef435d6b6a5131be4b29799f0c21c5c79


app.use(errorHandler);


<<<<<<< HEAD
app.listen(port, console.log(`Server is Running at port ${port}`));
=======






app.listen(port, console.log(`Server is Running at prot ${port}`));
>>>>>>> 3d5dc53ef435d6b6a5131be4b29799f0c21c5c79
