const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema(
  {
    ProjectTheme: String,   
    Reason: String,           
    Type: String,          
    Division: String,       
    Category: String,         
    Priority: String,         
    Department: String,       
    StartDate: String,        
    EndDate: String,          
    Location: String,        
    Status: {
      type: String,
      default: "Registered"      
  }
  },
  {
    timestamps: true,
  }
);


const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;