const express = require("express");
const mongoose = require("mongoose");
const Project = require("./models/project.model.js");
const projectRoute = require("./routes/project.route.js");
const cors = require('cors');
const app = express();

app.use(cors());

require('dotenv').config();
const mongo_url = process.env.MONGO_URL

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/projects", projectRoute);




app.get("/", (req, res) => {
  res.send("go to /api/projects");
});


mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
