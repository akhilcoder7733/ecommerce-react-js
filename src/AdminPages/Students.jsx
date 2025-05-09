import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const studentsData = [
    { id: 1, name: 'John Cene', grade: 'A', attendance: '95%' },
    { id: 2, name: 'Dwayne Smith', grade: 'B', attendance: '89%' },
    { id: 3, name: 'Alex Maani', grade: 'A', attendance: '92%' },
    { id: 4, name: 'D J Brown', grade: 'C', attendance: '75%' },
    { id: 5, name: 'Michael Mathew', grade: 'B', attendance: '82%' },
  ];

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Students
      </Typography>

      {/* Search Bar */}
      <TextField
        label="Search Students"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 3 }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Students Table */}
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
            {filteredStudents.map((student) => (
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
  );
};

export default Students;
