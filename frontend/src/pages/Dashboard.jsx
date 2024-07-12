import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import DashboardCard from '../components/DashboardCard'
import { BarChart } from '@mui/x-charts/BarChart';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [projects, setProjects] = useState([])
  
  const now = new Date()
  const statusWiseCount = (status)=>{
    return projects.filter(project => project.Status == status).length
  }

  const ClosureDelayCount = () => {
    return projects.filter(project => {
      return project.Status === 'Running' && new Date(project.EndDate) < now;
    }).length;
  };

  const getDepartments = (projects) => {
    const departmentsSet = new Set();
    projects.forEach(project => {
      if (project.Department) {
        departmentsSet.add(project.Department);
      }
    });
    return Array.from(departmentsSet);
  };

  let total = []
  let closed = []
  const getDepartmentSData = (projects) => {
    const departmentData = {};

    projects.forEach(project => {
      const department = project.Department;
      if (!departmentData[department]) {
        departmentData[department] = { total: 0, closed: 0 };
      }
      if (project.Department) {
        departmentData[department].total += 1;
      }
      if (project.Status === 'Closed') {
        departmentData[department].closed += 1;
      }
    });

    return departmentData
  };

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:4000/api/projects')
      .then(response => {
        console.log('promise fulfilled')
        setProjects(response.data)
        
      })
  }, [])
  // console.log(projects[0].EndDate)
  // console.log(now)
  // console.log(projects[0].EndDate < now.toISOString)
  console.log(getDepartments(projects))
  const depts = getDepartments(projects)
  console.log(getDepartmentSData(projects))
  const departmentData = getDepartmentSData(projects)
  

const departmentNames = [];
const totalCounts = [];
const closedCounts = [];

// Iterate over the keys of the departmentData object
for (const department in departmentData) {
  if (departmentData.hasOwnProperty(department)) {
    departmentNames.push(department);
    totalCounts.push(departmentData[department].total);
    closedCounts.push(departmentData[department].closed);
  }
}

  const DepartmentWiseCount = (dept, projects)=>{
    return [projects.filter(project => project.Department == dept).length, projects.filter(project => project.Department == dept && project.Status == 'Closed').length]
  }

  console.log(DepartmentWiseCount(depts[0], projects))
const BasicBars = () =>{
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: getDepartments(projects) }]}
      series={[{ data: DepartmentWiseCount(depts[0], projects) }, { data: DepartmentWiseCount(depts[1], projects) }, { data:DepartmentWiseCount(depts[2], projects) }]}
      width={500}
      height={300}
    />
  );
}

const DoubleBarChart = () => {
  const data = {
    labels: departmentNames,
    datasets: [
      {
        label: 'Total',
        data: totalCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Closed',
        data: closedCounts,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Double Bar Chart Example',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

  return (
    <Layout>
        <div>Dashboard</div>
        <div className="flex flex-wrap justify-evenly">
            <DashboardCard title={'Total Projects'} value={projects.length} />
            <DashboardCard title={'Closed'} value={statusWiseCount('Closed')} />
            <DashboardCard title={'Running'} value={statusWiseCount('Running')} />
            <DashboardCard title={'Closure Delay'} value={ClosureDelayCount()} />
            <DashboardCard title={'Cancelled'} value={statusWiseCount('Cancelled')} />
        </div>
        <div className='md:w-1/2'><DoubleBarChart/></div>
    </Layout>
  )
}

export default Dashboard