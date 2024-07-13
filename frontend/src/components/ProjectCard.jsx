import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import axios from 'axios'

const baseURL = 'http://localhost:4000'

const ProjectCard = ({project, setProjectsToShow}) => {

  const UpdateStatusButton = ({status, buttonValue}) => {
    const handleUpdateStatus = async () => {
      try {
        await axios.put(`${baseURL}/api/projects/${project._id}`, { Status: status });
        console.log(`Status updated to ${status}`);
        // Optionally, update the status in the local state or re-fetch data
        setProjectsToShow((prevProjects) =>
          prevProjects.map((prevProject) =>
            prevProject._id === project._id ? { ...prevProject, Status: status } : prevProject
          )
        );
      } catch (error) {
        console.error('Error updating status:', error);
      }
    };
  
    return (
      <strong className='mx-4'>
        <Button
          variant="contained"
          size="small"
          // style={{ marginLeft: 16 }}
          onClick={handleUpdateStatus}
          
        >
          {buttonValue}
        </Button>
      </strong>
    );
  };

  const startDate = new Date(project.StartDate);
  const endDate = new Date(project.EndDate);
  return (
    <div className='rounded-lg border flex flex-col mb-4 p-4 min-w-full'>
      <div className='flex justify-between'>
        <div className='text-xl mb-1'>{project.ProjectTheme}</div>
        <div>{project.Status}</div>
      </div>
      <div className='text-gray-600 text-sm'>{startDate.toDateString()} to {endDate.toDateString()}</div>
      <div className='text-gray-500'>Reason:<span className='text-black'> {project.Reason}</span></div>
      <div className='text-gray-500'>Type:<span className='text-black'> {project.Type}</span></div>
      <div className='text-gray-500'>Division:<span className='text-black'> {project.Division}</span></div>
      <div className='text-gray-500'>Category:<span className='text-black'> {project.Category}</span></div>
      <div className='text-gray-500'>Priority:<span className='text-black'> {project.Priority}</span></div>
      <div className='text-gray-500'>Department:<span className='text-black'> {project.Department}</span></div>
      <div className='text-gray-500'>Location:<span className='text-black'> {project.Location}</span></div>
      <div className="flex justify-center p-2">
        <UpdateStatusButton status = {'Running'} buttonValue = {'Start'}/>
        <UpdateStatusButton status = {'Closed'} buttonValue = {'Close'}/>
        <UpdateStatusButton status = {'Cancelled'} buttonValue = {'Cancel'}/>
      </div>
    </div>
  )
}

export default ProjectCard