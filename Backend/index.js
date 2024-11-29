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



app.use(errorHandler);








app.listen(port, console.log(`Server is Running at prot ${port}`));