import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';

const DashboardCard = ({title, value}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h1" component="div">
          {value}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default DashboardCard