/* eslint-disable no-undef */
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoURL = process.env.mongoURL;

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)
app.get("/", (req, res) => res.json({msg: "hello world"}));

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));