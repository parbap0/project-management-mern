import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
import { Button } from '@mui/material';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const baseURL = 'http://localhost:4000'

const ProjectListing = () => {

  const [projects, setProjects] = useState([])
  const [projectsToShow, setProjectsToShow] = useState([])
  const [query, setQuery] = useState('')

  const updateStatusButton = (status, buttonValue) => (params) => {
    const handleUpdateStatus = async () => {
      try {
        await axios.put(`${baseURL}/api/projects/${params.row._id}`, { Status: status });
        console.log(`Status updated to ${status}`);
        // Optionally, update the status in the local state or re-fetch data
        setProjectsToShow((prevProjects) =>
          prevProjects.map((project) =>
            project._id === params.row._id ? { ...project, Status: status } : project
          )
        );
      } catch (error) {
        console.error('Error updating status:', error);
      }
    };
  
    return (
      <strong>
        <Button
          variant="contained"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={handleUpdateStatus}
        >
          {buttonValue}
        </Button>
      </strong>
    );
  };

  const columns = [
    {
      field: 'ProjectTheme',
      headerName: 'Project Theme',
      width: 150,
      editable: true,
    },
    {
      field: 'Reason',
      headerName: 'Reason',
      width: 150,
      editable: true,
    },
    {
      field: 'Type',
      headerName: 'Type',
      width: 110,
      editable: true,
    },
    {
      field: 'Division',
      headerName: 'Division',
      width: 150,
      editable: true,
    },
    {
      field: 'Category',
      headerName: 'Category',
      width: 150,
      editable: true,
    },
    {
      field: 'Priority',
      headerName: 'Priority',
      width: 110,
      editable: true,
    },
    {
      field: 'Department',
      headerName: 'Department',
      width: 150,
      editable: true,
    },
    {
      field: 'Location',
      headerName: 'Location',
      width: 150,
      editable: true,
    },
    {
      field: 'Status',
      headerName: 'Status',
      width: 150,
      editable: true,
    },
    {
      field: 'Start',
      headerName: 'Start',
      width: 150,
      renderCell: updateStatusButton("Running", 'Start'),
      disableClickEventBubbling: true
    },
    {
      field: 'Close',
      headerName: 'Close',
      width: 150,
      renderCell: updateStatusButton("Closed", 'Close'),
      disableClickEventBubbling: true
    },
    {
      field: 'Cancel',
      headerName: 'Cancel',
      width: 150,
      renderCell: updateStatusButton("Cancelled", 'Cancel'),
      disableClickEventBubbling: true
    }
  ];

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:4000/api/projects')
      .then(response => {
        console.log('promise fulfilled')
        setProjects(response.data)
        setProjectsToShow(response.data)
      })
  }, [])

  const rows = projectsToShow.map((item, index) => ({
    _id: item._id,
    ProjectTheme: item.ProjectTheme,
    Reason: item.Reason,
    Type: item.Type,
    Division: item.Division,
    Category: item.Category,
    Priority: item.Priority,
    Department: item.Department,
    Location: item.Location,
    Status: item.Status
  }));


  useEffect(() => {
    const lowerQuery = query.toLowerCase();
    const filteredProjects = projects.filter(item => {
      return Object.keys(item).some(key =>
        item[key]?.toString().toLowerCase().includes(lowerQuery)
      );
    });
    setProjectsToShow(filteredProjects);
  }, [query, projects]);

  return (
    <Layout>
        <div>ProjectListing</div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
      
          <TextField value={query} onChange={(e) => setQuery(e.target.value)} id="standard-basic" label="Search Project" variant="standard" />
        </Box>
        <Box sx={{ height: 400, width: '100%' }}>
        
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            getRowId={(row) => row._id}
            pageSizeOptions={[5]}
            
            disableRowSelectionOnClick
          />
        </Box>
    </Layout>
  )
}

export default ProjectListing