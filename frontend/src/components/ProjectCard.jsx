import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

const ProjectCard = ({project}) => {
  const startDate = new Date(project.StartDate);
  const endDate = new Date(project.EndDate);
  return (
    <div className='rounded-lg border flex flex-col mb-4'>
      <div className='flex justify-between'>
        <div>{project.ProjectTheme}</div>
        <div>{project.Status}</div>
      </div>
      <div className='text-gray-600'>{startDate.toDateString()} to {endDate.toDateString()}</div>
      <div className='text-gray-500'>Reason:<span className='text-black'> {project.Reason}</span></div>
      <div className='text-gray-500'>Type:<span className='text-black'> {project.Type}</span></div>
      <div className='text-gray-500'>Division:<span className='text-black'> {project.Division}</span></div>
      <div className='text-gray-500'>Category:<span className='text-black'> {project.Category}</span></div>
      <div className='text-gray-500'>Priority:<span className='text-black'> {project.Priority}</span></div>
      <div className='text-gray-500'>Department:<span className='text-black'> {project.Department}</span></div>
      <div className='text-gray-500'>Location:<span className='text-black'> {project.Location}</span></div>
    </div>
  )
}

export default ProjectCard