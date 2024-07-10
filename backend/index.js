const express = require("express");
const mongoose = require("mongoose");
const Project = require("./models/project.model.js");
const projectRoute = require("./routes/project.route.js");
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.route.js');
const protectedRoutes = require('./routes/protected.js');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

require('dotenv').config();
const mongo_url = process.env.MONGO_URL
const PORT = process.env.PORT
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/projects", projectRoute);

app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);

app.get("/", (req, res) => {
  res.send("go to /api/projects");
});


mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
