import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectCardList = ({projects, setProjectToShow}) => {
  return (
    <div className='flex flex-col min-w-full'>
        {projects.map((project, index) =>(
            <ProjectCard  project={project} key={index} setProjectsToShow={setProjectToShow}/>
        ))}
    </div>
  )
}

export default ProjectCardList