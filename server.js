const app = express();
const express = require('express');
const connectDB = require('./config/database')

const userRouter = require("./routes/userRoutes")

app.use(express.json());
app.use("/api/v1/users", userRouter);

app.listen(8000, () => {
    connectDB();
    console.log("server started")
})



