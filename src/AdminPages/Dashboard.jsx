import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";

const MetricsCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#1c9bff",
  color: "#fff",
  borderRadius: 12,
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  marginBottom: theme.spacing(2),
}));

const Dashboard = () => {
  const metrics = [
    { title: "Total Students", value: 1200 },
    { title: "Total Teachers", value: 85 },
    { title: "Events Scheduled", value: 15 },
    { title: "Pending Payments", value: "$8,500" },
  ];

  const studentsData = [
    { id: 1, name: "Amal Krishna", grade: "A", attendance: "95%" },
    { id: 2, name: "Athul Manoj", grade: "B", attendance: "89%" },
    { id: 3, name: "Sreehari K S", grade: "A", attendance: "92%" },
    { id: 4, name: "Abin Mathew", grade: "C", attendance: "75%" },
    { id: 5, name: "Mitchel Johnson", grade: "B", attendance: "82%" },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Dashboard
      </Typography>

      {/* Metrics Section */}
      <Grid container spacing={3}>
        {metrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <MetricsCard>
              <CardContent>
                <Typography variant="h6">{metric.title}</Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  {metric.value}
                </Typography>
              </CardContent>
            </MetricsCard>
          </Grid>
        ))}
      </Grid>

      {/* Students Data Table */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Recent Students
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>Attendance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsData.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>{student.attendance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;
