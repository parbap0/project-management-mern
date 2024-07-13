import React from 'react'
import createProjectSVG from '../assets/Assignment-assets/create-project.svg'
import createProjectSVGActive from '../assets/Assignment-assets/create-project-active.svg'
import DashboardSVG  from '../assets/Assignment-assets/Dashboard.svg'
import DashboardSVGActive  from '../assets/Assignment-assets/Dashboard-active.svg'
import ProjectListSVG from '../assets/Assignment-assets/Project-list.svg'
import ProjectListSVGActive from '../assets/Assignment-assets/Project-list-active.svg'
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();
    const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 w-full  md:left-0 md:h-full md:w-16 bg-white flex justify-center md:flex-col md:justify-centeritems-center p-4">
      <div className="mx-2 my-2 md:mb-4 cursor-pointer" onClick={() => navigate('/')}>
        <img src={location.pathname == '/' ? DashboardSVGActive : DashboardSVG} alt="Dashboard" className="h-8 w-8" />
      </div>
      <div className="mx-2 my-2 md:mb-4 cursor-pointer" onClick={() => navigate('/project-listing')}>
        <img src={location.pathname == '/project-listing' ? ProjectListSVGActive : ProjectListSVG} alt="Projects" className="h-8 w-8" />
      </div>
      <div className="mx-2 my-2 md:mb-4 cursor-pointer" onClick={() => navigate('/project-form')}>
        <img src={location.pathname == '/project-form' ? createProjectSVGActive : createProjectSVG} alt="Create Project" className="h-8 w-8" />
      </div>
    </nav>
  )
}

export default Navbar