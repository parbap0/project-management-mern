import React, { useState } from 'react'
import Layout from '../components/Layout'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import Alert from '@mui/material/Alert';

const ProjectForm = () => {
    const baseURL = 'http://localhost:4000'
    const [formData, setFormData] = useState({
        ProjectTheme: '',
        Reason: 'Business',
        Type: 'Internal',
        Division: 'Filters',
        Category: 'Quality A',
        Priority: 'High',
        Department: 'Strategy',
        StartDate: null,
        EndDate: null,
        Location: 'Pune',
      });
      const [dateError, setDateError] = useState(false)
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

      const handleDateChange = (name, value) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
      const dataToPost = {
        ...formData,
        StartDate: formData.StartDate ? formData.StartDate.toISOString() : '',
        EndDate: formData.EndDate ? formData.EndDate.toISOString() : '',
      };
      const handleSubmit = async(e) => {
        e.preventDefault();

        if (formData.StartDate && formData.EndDate && formData.EndDate < formData.StartDate) {
          setDateError(true);
          return;
        }
        setDateError(false)
        // Handle form submission
        try {
          const response = await axios.post(baseURL+'/api/projects', dataToPost);
          console.log('Form submitted successfully:', response.data);
        } catch (error) {
          console.error('Error submitting the form:', error);
        }
        console.log(dataToPost);
      };
  return (
    <Layout>
        <div>ProjectForm</div>
        <div>
            <Box sx={{ minWidth: 120 }}>
                <TextField
                  value={formData.ProjectTheme}
                  onChange={handleChange}
                  inputProps={{
                    name: 'ProjectTheme',
                    id: 'uncontrolled-native',
                  }}
                  required
                  id="outlined-required"
                  label="Project Theme"
                  defaultValue="Enter Project Theme"
                />
                <FormControl>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Reason
                  </InputLabel>
                  <NativeSelect 
                    value={formData.Reason}
                    onChange={handleChange}
                    defaultValue={'Business'}
                    inputProps={{
                      name: 'Reason',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option value={'Business'}>Business</option>
                    <option value={'Dealership'}>Dealership</option>
                    <option value={'Transport'}>Transport</option>
                  </NativeSelect>
                </FormControl>
                <FormControl >
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Type
                  </InputLabel>
                  <NativeSelect
                    value={formData.Type}
                    onChange={handleChange}
                    defaultValue={'Internal'}
                    inputProps={{
                      name: 'Type',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option value={'Internal'}>Internal</option>
                    <option value={'External'}>External</option>
                    <option value={'Vendor'}>Vendor</option>
                  </NativeSelect>
                </FormControl>
                <FormControl >
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Division
                  </InputLabel>
                  <NativeSelect
                    value={formData.Division}
                    onChange={handleChange}
                    defaultValue={'Filters'}
                    inputProps={{
                      name: 'Division',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option value={'Filter'}>Filter</option>
                    <option value={'Compressor'}>Compressor</option>
                    <option value={'Pumps'}>Pumps</option>
                    <option value={'Glass'}>Glass</option>
                    <option value={'Water Heater'}>Water Heater</option>
                  </NativeSelect>
                </FormControl>
                <FormControl >
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Category
                  </InputLabel>
                  <NativeSelect
                    value={formData.Category}
                    onChange={handleChange}
                    defaultValue={'Quality A'}
                    inputProps={{
                      name: 'Category',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option value={'Quality A'}>Quality A</option>
                    <option value={'Quality B'}>Quality B</option>
                    <option value={'Quality C'}>Quality C</option>
                    <option value={'Quality D'}>Quality D</option>
                  </NativeSelect>
                </FormControl>
                <FormControl >
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Priority
                  </InputLabel>
                  <NativeSelect
                    value={formData.Priority}
                    onChange={handleChange}
                    defaultValue={'High'}
                    inputProps={{
                      name: 'Priority',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option value={'High'}>High</option>
                    <option value={'Low'}>Low</option>
                    <option value={'Medium'}>Medium</option>
                    
                  </NativeSelect>
                </FormControl>
                <FormControl >
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Department
                  </InputLabel>
                  <NativeSelect
                    value={formData.Department}
                    onChange={handleChange}
                    defaultValue={'Strategy'}
                    inputProps={{
                      name: 'Department',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option value={'Strategy'}>Strategy</option>
                    <option value={'Finance'}>Finance</option>
                    <option value={'Quality'}>Quality</option>
                    <option value={'Maintenance'}>Maintenance</option>
                    <option value={'Stores'}>Stores</option>
                  </NativeSelect>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                      <DateTimePicker
                        value={formData.StartDate}
                        onChange={(value) => handleDateChange('StartDate', value)}
                        name='StartDate'
                        label="Start Date"

                        views={['year', 'day']}
                      />
                      
                      <DateTimePicker
                        
                        value={formData.EndDate}
                        onChange={(value) => handleDateChange('EndDate', value)}
                        name='EndDate'
                        label="End Date"
                        
                        views={['year', 'day']}
                        // value={value}
                        // onChange={(newValue) => setValue(newValue)}
                      />
                      {dateError && 
                          <Alert variant="filled" severity="error">
                            End date should not be smaller than start date
                          </Alert>
                      }
                  </DemoContainer>
                </LocalizationProvider>
                <FormControl >
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Location
                  </InputLabel>
                  <NativeSelect
                    value={formData.Location}
                    onChange={handleChange}
                    defaultValue={'Pune'}
                    inputProps={{
                      name: 'Location',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option value={'Pune'}>Pune</option>
                    <option value={'Mumbai'}>Mumbai</option>
                    <option value={'Delhi'}>Delhi</option>
                    
                  </NativeSelect>
                </FormControl>
                <TextField
                  id="standard-read-only-input"
                  label="Status"
                  defaultValue="Registered"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                />
                <Button onClick={handleSubmit} variant="contained">Save Project</Button>
            </Box>
            
        </div>
    </Layout>
  )
}

export default ProjectForm