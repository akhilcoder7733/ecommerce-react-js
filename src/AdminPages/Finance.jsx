import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 5000 },
  { month: 'Feb', revenue: 7000 },
  { month: 'Mar', revenue: 6500 },
  { month: 'Apr', revenue: 8000 },
  { month: 'May', revenue: 7500 },
  { month: 'Jun', revenue: 9000 },
  { month: 'Jul', revenue: 8500 },
];

const Finance = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Finance Overview
      </Typography>

      {/* Year Selector */}
      <FormControl sx={{ minWidth: 120, marginBottom: 3 }}>
        <InputLabel>Select Year</InputLabel>
        <Select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          <MenuItem value="2023">2023</MenuItem>
          <MenuItem value="2024">2024</MenuItem>
          <MenuItem value="2025">2025</MenuItem>
        </Select>
      </FormControl>

      {/* Revenue Summary */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: '#e0f7fa', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Total Revenue</Typography>
              <Typography variant="h5">$50,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: '#fce4ec', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Expenses</Typography>
              <Typography variant="h5">$20,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: '#fff3e0', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Profit</Typography>
              <Typography variant="h5">$30,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: '#e8f5e9', boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">Projected Growth</Typography>
              <Typography variant="h5">+15%</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Revenue Chart */}
      <Box sx={{ marginTop: 4, padding: 2, backgroundColor: '#fafafa', borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h6" gutterBottom>
          Revenue Trend
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#17B8A6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default Finance;