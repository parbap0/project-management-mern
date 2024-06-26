const express = require("express");
const Project = require("../models/project.model.js");
const router = express.Router();
const {getProjects, getProject, createProject, updateProject, deleteProject} = require('../controllers/project.controller.js');


router.get('/', getProjects);
router.get("/:id", getProject);

router.post("/", createProject);

// update a project
router.put("/:id", updateProject);

// delete a project
router.delete("/:id", deleteProject);




module.exports = router;