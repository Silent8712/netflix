const express = require("express");
const App = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const authRouter = require('./Routes/auth');
const userRouter = require('./Routes/users');

dotenv.config();

mongoose.connect(process.env.MONGO_URL,
     {useNewUrlParser: true,
     useUnifiedTopology: true,
     })
.then(() => console.log("Database Connected"))
.catch((err) => console.log(err));

App.use(express.json());
App.use("/api/auth", authRouter);
App.use("/api/users", userRouter);

App.listen(8800, () => {
    console.log("Backend server is running");
})