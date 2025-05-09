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

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const teachersData = [
    { id: 1, name: 'Alice B', subject: 'Mathematics', experience: '10 years', contact: 'alice.williams@example.com' },
    { id: 2, name: 'Benny Mathew', subject: 'Physics', experience: '8 years', contact: 'bob.brown@example.com' },
    { id: 3, name: 'Deepa D', subject: 'Chemistry', experience: '5 years', contact: 'cathy.green@example.com' },
    { id: 4, name: 'Subramanyam Achari', subject: 'English', experience: '12 years', contact: 'david.black@example.com' },
    { id: 5, name: 'Sukumari', subject: 'Biology', experience: '7 years', contact: 'eva.white@example.com' },
  ];

  const filteredTeachers = teachersData.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Teachers
      </Typography>

      {/* Search Bar */}
      <TextField
        label="Search Teachers"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 3 }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Teachers Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Experience</TableCell>
              <TableCell>Contact</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTeachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell>{teacher.id}</TableCell>
                <TableCell>{teacher.name}</TableCell>
                <TableCell>{teacher.subject}</TableCell>
                <TableCell>{teacher.experience}</TableCell>
                <TableCell>{teacher.contact}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Teachers;
