import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectCardList = ({projects}) => {
  return (
    <div>
        {projects.map((project, index) =>(
            <ProjectCard project={project} key={index}/>
        ))}
    </div>
  )
}

export default ProjectCardList