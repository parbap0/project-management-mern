import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';

const DashboardCard = ({title, value}) => {
  return (
    <div className='md:pr-28 min-w-32 py-2 my-2 pl-2 border rounded-md shadow-md flex'>
      <div className=' flex flex-col'>
        <div className='text-gray-600'>{title}</div>
        <div className='text-4xl'>{value}</div>
      </div>
    </div>
  )
}

export default DashboardCard